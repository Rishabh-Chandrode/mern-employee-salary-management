import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import LogoSipeka from "../../assets/images/logo/logo-sipeka.png";
import LoginImg from "../../assets/images/LoginImg/login.svg";
import { Footer, Navbar } from "../../components";

function Register() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nik: "",
    nama_pegawai: "",
    username: "",
    password: "",
    confPassword: "",
    jenis_kelamin: "",
    jabatan: "",
    tanggal_masuk: "",
    status: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/register", formData);

      await Swal.fire({
        icon: "success",
        title: "Registrasi Berhasil",
        text: response.data.msg || "Akun berhasil dibuat",
        timer: 1600,
        showConfirmButton: false,
      });

      navigate("/login");
    } catch (error) {
      const errMsg =
        error.response?.data?.msg ||
        error.message ||
        "Terjadi kesalahan saat registrasi";

      Swal.fire({
        icon: "error",
        title: "Registrasi Gagal",
        text: errMsg,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen rounded-sm border border-stroke pt-10 shadow-default dark:border-strokedark dark:bg-boxdark">
      <Navbar />
      <div className="flex min-h-screen flex-wrap items-center">
        <div className="hidden w-full xl:block xl:w-1/2">
          <div className="px-26 py-18.5 text-center ">
            <span className="mb-5.5 inline-block ">
              <img
                className="w-80"
                src={LogoSipeka}
                alt="Logo SiPeKa"
                title="Logo SiPeKa"
              />
            </span>
            <p className="text-black dark:text-white 2xl:px-20">
              Create your employee account
              <br /> PT. Humpuss Karbometil Selulosa
            </p>
            <img className="mt-15 inline-block" src={LoginImg} alt="Register" />
          </div>
        </div>

        <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            <h2 className="mb-2 text-2xl font-bold text-black dark:text-white">Register</h2>
            <p className="mb-6 text-sm text-bodydark2">Buat akun pegawai baru untuk login.</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4.5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="nik"
                  value={formData.nik}
                  onChange={handleChange}
                  required
                  placeholder="NIK"
                  className="w-full rounded-lg border border-stroke bg-transparent py-3 px-4 outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input"
                />
                <input
                  type="text"
                  name="nama_pegawai"
                  value={formData.nama_pegawai}
                  onChange={handleChange}
                  required
                  placeholder="Nama Pegawai"
                  className="w-full rounded-lg border border-stroke bg-transparent py-3 px-4 outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input"
                />
              </div>

              <div className="mb-4.5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  placeholder="Username"
                  className="w-full rounded-lg border border-stroke bg-transparent py-3 px-4 outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input"
                />
                <input
                  type="text"
                  name="jabatan"
                  value={formData.jabatan}
                  onChange={handleChange}
                  required
                  placeholder="Jabatan"
                  className="w-full rounded-lg border border-stroke bg-transparent py-3 px-4 outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input"
                />
              </div>

              <div className="mb-4.5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <select
                  name="jenis_kelamin"
                  value={formData.jenis_kelamin}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-stroke bg-transparent py-3 px-4 outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input"
                >
                  <option value="" disabled>
                    Jenis Kelamin
                  </option>
                  <option value="Laki-Laki">Laki-Laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-stroke bg-transparent py-3 px-4 outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input"
                >
                  <option value="" disabled>
                    Status
                  </option>
                  <option value="karyawan tetap">Karyawan Tetap</option>
                  <option value="karyawan tidak tetap">Karyawan Tidak Tetap</option>
                </select>
              </div>

              <div className="mb-4.5">
                <input
                  type="date"
                  name="tanggal_masuk"
                  value={formData.tanggal_masuk}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-stroke bg-transparent py-3 px-4 outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input"
                />
              </div>

              <div className="mb-4.5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Password"
                  className="w-full rounded-lg border border-stroke bg-transparent py-3 px-4 outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input"
                />
                <input
                  type="password"
                  name="confPassword"
                  value={formData.confPassword}
                  onChange={handleChange}
                  required
                  placeholder="Konfirmasi Password"
                  className="w-full rounded-lg border border-stroke bg-transparent py-3 px-4 outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="mb-5 w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? "Loading..." : "Register"}
              </button>

              <p className="text-center text-sm text-black dark:text-white">
                Sudah punya akun?{" "}
                <Link to="/login" className="font-semibold text-primary">
                  Login di sini
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
