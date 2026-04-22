import DataPegawai from "../models/DataPegawaiModel.js";
import argon2 from "argon2";
import { verifyUser } from "../middleware/AuthUser.js";

export const Register = async (req, res) => {
  const {
    nik,
    nama_pegawai,
    username,
    password,
    confPassword,
    jenis_kelamin,
    jabatan,
    tanggal_masuk,
    status
  } = req.body;

  if (
    !nik ||
    !nama_pegawai ||
    !username ||
    !password ||
    !confPassword ||
    !jenis_kelamin ||
    !jabatan ||
    !tanggal_masuk ||
    !status
  ) {
    return res.status(400).json({ msg: "All registration fields are required" });
  }

  if (password !== confPassword) {
    return res.status(400).json({ msg: "Password and password confirmation do not match" });
  }

  try {
    const existingUser = await DataPegawai.findOne({
      where: {
        username: username
      }
    });

    if (existingUser) {
      return res.status(409).json({ msg: "Username is already in use" });
    }

    const hashPassword = await argon2.hash(password);

    await DataPegawai.create({
      nik,
      nama_pegawai,
      username,
      password: hashPassword,
      jenis_kelamin,
      jabatan,
      tanggal_masuk,
      status,
      // Self-register endpoint is restricted to employee role only.
      hak_akses: "pegawai",
      photo: "default-profile.png",
      url: null
    });

    res.status(201).json({ msg: "Registration successful. Please login." });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const Login = async (req, res) => {
  let user = {};
  const pegawai = await DataPegawai.findOne({
    where: {
      username: req.body.username
    }
  });

  if (!pegawai) {
    return res.status(404).json({ msg: "Employee data not found" });
  }

  const match = await argon2.verify(pegawai.password, req.body.password);

  if (!match) {
    return res.status(400).json({ msg: "Incorrect password" });
  }

  req.session.userId = pegawai.id_pegawai;

  user = {
    id_pegawai: pegawai.id,
    nama_pegawai: pegawai.nama_pegawai,
    username: pegawai.username,
    hak_akses: pegawai.hak_akses
  }

  res.status(200).json({
    id_pegawai: user.id_pegawai,
    nama_pegawai: user.nama_pegawai,
    username: user.username,
    hak_akses: user.hak_akses,
    msg: "Login successful"
  });
};

export const Me = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: "Please sign in to your account first" });
  }
  const pegawai = await DataPegawai.findOne({
    attributes: ['id', 'nik', 'nama_pegawai', 'username', 'hak_akses'],
    where: {
      id_pegawai: req.session.userId
    }
  });
  if (!pegawai) return res.status(404).json({ msg: "User not found" });
  res.status(200).json(pegawai);
}

export const LogOut = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ msg: "Unable to log out" });
    res.status(200).json({ msg: "Logged out successfully" });
  });
}

export const changePassword = async (req, res) => {
  await verifyUser(req, res, () => { });

  const userId = req.userId;

  const user = await DataPegawai.findOne({
    where: {
      id: userId
    }
  });

  const { password, confPassword } = req.body;

  if (password !== confPassword) return res.status(400).json({ msg: "Password and password confirmation do not match" });

  try {
    const hashPassword = await argon2.hash(password);

    await DataPegawai.update(
      {
        password: hashPassword
      },
      {
        where: {
          id: user.id
        }
      }
    )
    res.status(200).json({ msg: "Password updated successfully" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};