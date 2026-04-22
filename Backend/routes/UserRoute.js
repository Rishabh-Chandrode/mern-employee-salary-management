import express from 'express';

/* === import Middleware === */
import { adminOnly, verifyUser } from '../middleware/AuthUser.js';

/* === import Controllers === */
import {
    getDataPegawai,
    getDataPegawaiByID,
    createDataPegawai,
    updateDataPegawai,
    deleteDataPegawai,
    getDataPegawaiByNik,
    getDataPegawaiByName,
} from '../controllers/DataPegawai.js';

import {
    getDataJabatan,
    createDataJabatan,
    updateDataJabatan,
    deleteDataJabatan,
    getDataJabatanByID
} from "../controllers/DataJabatan.js";

import {
    viewDataKehadiran,
    createDataKehadiran,
    updateDataKehadiran,
    deleteDataKehadiran,
    viewDataKehadiranByID,
    viewDataGajiByName,
} from "../controllers/TransaksiController.js";

import {
    createDataPotonganGaji,
    deleteDataPotongan,
    viewDataPotonganByID,
    updateDataPotongan,
    viewDataPotongan
} from "../controllers/TransaksiController.js";

import {
    viewDataGajiPegawai,
    viewDataGajiPegawaiByMonth,
    viewDataGajiPegawaiByYear
} from "../controllers/TransaksiController.js";

import {
    viewLaporanAbsensiPegawaiByMonth,
    viewLaporanAbsensiPegawaiByYear,
    viewLaporanGajiPegawai,
    viewLaporanGajiPegawaiByMonth,
    viewLaporanGajiPegawaiByName,
    viewLaporanGajiPegawaiByYear,
    viewSlipGajiByMonth,
    viewSlipGajiByName,
    viewSlipGajiByYear,
} from "../controllers/LaporanController.js";

import { LogOut, changePassword } from '../controllers/Auth.js';
import {
    dashboardPegawai,
    viewDataGajiSinglePegawaiByMonth,
    viewDataGajiSinglePegawaiByYear
} from '../controllers/Pegawai.js';

const router = express.Router();

// Admin routes

/* ==== Master Data ==== */
// Employee data
router.get('/data_pegawai', verifyUser, adminOnly, getDataPegawai);
router.get('/employees', verifyUser, adminOnly, getDataPegawai);
router.get('/data_pegawai/id/:id', verifyUser, adminOnly, getDataPegawaiByID);
router.get('/employees/id/:id', verifyUser, adminOnly, getDataPegawaiByID);
router.get('/data_pegawai/nik/:nik', verifyUser, adminOnly, getDataPegawaiByNik);
router.get('/employees/nik/:nik', verifyUser, adminOnly, getDataPegawaiByNik);
router.get('/data_pegawai/name/:name', verifyUser, getDataPegawaiByName);
router.get('/employees/name/:name', verifyUser, getDataPegawaiByName);
router.post('/data_pegawai',verifyUser, adminOnly, createDataPegawai);
router.post('/employees',verifyUser, adminOnly, createDataPegawai);
router.patch('/data_pegawai/:id', verifyUser, adminOnly, updateDataPegawai);
router.patch('/employees/:id', verifyUser, adminOnly, updateDataPegawai);
router.delete('/data_pegawai/:id', verifyUser, adminOnly, deleteDataPegawai);
router.delete('/employees/:id', verifyUser, adminOnly, deleteDataPegawai);
router.patch('/data_pegawai/:id/change_password', verifyUser, adminOnly, changePassword);
router.patch('/employees/:id/change_password', verifyUser, adminOnly, changePassword);

// Position data
router.get('/data_jabatan', verifyUser, adminOnly, getDataJabatan);
router.get('/positions', verifyUser, adminOnly, getDataJabatan);
router.get('/data_jabatan/:id', verifyUser, adminOnly, getDataJabatanByID);
router.get('/positions/:id', verifyUser, adminOnly, getDataJabatanByID);
router.post('/data_jabatan', verifyUser, adminOnly, createDataJabatan);
router.post('/positions', verifyUser, adminOnly, createDataJabatan);
router.patch('/data_jabatan/:id', verifyUser, adminOnly, updateDataJabatan);
router.patch('/positions/:id', verifyUser, adminOnly, updateDataJabatan);
router.delete('/data_jabatan/:id', verifyUser, adminOnly, deleteDataJabatan);
router.delete('/positions/:id', verifyUser, adminOnly, deleteDataJabatan);

/* ==== Transactions ==== */
// Attendance data
router.get('/data_kehadiran', verifyUser, adminOnly, viewDataKehadiran);
router.get('/attendance', verifyUser, adminOnly, viewDataKehadiran);
router.get('/data_kehadiran/:id', verifyUser, adminOnly, viewDataKehadiranByID);
router.get('/attendance/:id', verifyUser, adminOnly, viewDataKehadiranByID);
router.post('/data_kehadiran',verifyUser, adminOnly, createDataKehadiran);
router.post('/attendance',verifyUser, adminOnly, createDataKehadiran);
router.patch('/data_kehadiran/update/:id',verifyUser, adminOnly, updateDataKehadiran);
router.patch('/attendance/update/:id',verifyUser, adminOnly, updateDataKehadiran);
router.delete('/data_kehadiran/:id', verifyUser, adminOnly, deleteDataKehadiran);
router.delete('/attendance/:id', verifyUser, adminOnly, deleteDataKehadiran);

// Salary deduction data
router.get('/data_potongan', adminOnly, verifyUser, viewDataPotongan);
router.get('/deductions', adminOnly, verifyUser, viewDataPotongan);
router.get('/data_potongan/:id', adminOnly, verifyUser, viewDataPotonganByID);
router.get('/deductions/:id', adminOnly, verifyUser, viewDataPotonganByID);
router.post('/data_potongan', adminOnly, verifyUser, createDataPotonganGaji);
router.post('/deductions', adminOnly, verifyUser, createDataPotonganGaji);
router.patch('/data_potongan/update/:id', adminOnly, verifyUser, updateDataPotongan);
router.patch('/deductions/update/:id', adminOnly, verifyUser, updateDataPotongan);
router.delete('/data_potongan/:id', adminOnly, verifyUser, deleteDataPotongan);
router.delete('/deductions/:id', adminOnly, verifyUser, deleteDataPotongan);

// Salary data
router.get('/data_gaji_pegawai', viewDataGajiPegawai);
router.get('/employee-salaries', viewDataGajiPegawai);
router.get('/data_gaji/name/:name', verifyUser, viewDataGajiByName);
router.get('/salary/name/:name', verifyUser, viewDataGajiByName);
router.get('/data_gaji_pegawai/month/:month', viewDataGajiPegawaiByMonth);
router.get('/employee-salaries/month/:month', viewDataGajiPegawaiByMonth);
router.get('/data_gaji_pegawai/year/:year', viewDataGajiPegawaiByYear);
router.get('/employee-salaries/year/:year', viewDataGajiPegawaiByYear);

/* ==== Reports ==== */
// Employee salary report
router.get('/laporan/gaji',verifyUser, adminOnly, viewLaporanGajiPegawai);
router.get('/reports/salary',verifyUser, adminOnly, viewLaporanGajiPegawai);
router.get('/laporan/gaji/name/:name',verifyUser, adminOnly, viewLaporanGajiPegawaiByName);
router.get('/reports/salary/name/:name',verifyUser, adminOnly, viewLaporanGajiPegawaiByName);
router.get('/laporan/gaji/month/:month', verifyUser, adminOnly,viewLaporanGajiPegawaiByMonth);
router.get('/reports/salary/month/:month', verifyUser, adminOnly,viewLaporanGajiPegawaiByMonth);
router.get('/laporan/gaji/year/:year', verifyUser, adminOnly,viewLaporanGajiPegawaiByYear);
router.get('/reports/salary/year/:year', verifyUser, adminOnly,viewLaporanGajiPegawaiByYear);

// Employee attendance report
router.get('/laporan/absensi/month/:month', verifyUser, adminOnly,viewLaporanAbsensiPegawaiByMonth);
router.get('/reports/attendance/month/:month', verifyUser, adminOnly,viewLaporanAbsensiPegawaiByMonth);
router.get('/laporan/absensi/year/:year', verifyUser, adminOnly,viewLaporanAbsensiPegawaiByYear);
router.get('/reports/attendance/year/:year', verifyUser, adminOnly,viewLaporanAbsensiPegawaiByYear);

// Employee salary slip
router.get('/laporan/slip_gaji/name/:name', verifyUser, adminOnly,viewSlipGajiByName);
router.get('/reports/salary-slip/name/:name', verifyUser, adminOnly,viewSlipGajiByName);
router.get('/laporan/slip_gaji/month/:month',verifyUser, adminOnly, viewSlipGajiByMonth);
router.get('/reports/salary-slip/month/:month',verifyUser, adminOnly, viewSlipGajiByMonth);
router.get('/laporan/slip_gaji/year/:year',verifyUser, adminOnly, viewSlipGajiByYear);
router.get('/reports/salary-slip/year/:year',verifyUser, adminOnly, viewSlipGajiByYear);

/* ==== Change Password ==== */
router.patch('/change_password', verifyUser, changePassword);

/* ==== Logout ==== */
router.delete('/logout', LogOut);

// Employee routes
/* ==== Dashboard ==== */
router.get('/dashboard', verifyUser, dashboardPegawai);
/* ==== Salary Data ==== */
router.get('/data_gaji/month/:month', verifyUser, viewDataGajiSinglePegawaiByMonth);
router.get('/salary/month/:month', verifyUser, viewDataGajiSinglePegawaiByMonth);
router.get('/data_gaji/year/:year', verifyUser, viewDataGajiSinglePegawaiByYear);
router.get('/salary/year/:year', verifyUser, viewDataGajiSinglePegawaiByYear);
/* ==== Change Password ==== */
router.patch('/change_password', verifyUser, changePassword);
/* ==== Logout ==== */
router.delete('/logout', LogOut);


export default router;