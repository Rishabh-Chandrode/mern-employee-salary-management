import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../../components/molecules/NotFound'
import Home from '../../pages/Home';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Dashboard from '../../pages/Dashboard';
import {
  FormAddDataJabatan,
  FormEditDataJabatan,
  FormAddDataKehadiran,
  FormEditDataKehadiran,
  FormAddDataPegawai,
  FormEditDataPegawai,
  FormAddDataPotongan,
  FormEditDataPotongan,
  PrintPdfLaporanGaji,
  DetailDataGaji,
  PrintPdfSlipGaji,
  PrintPdfLaporanAbsensi,
  PrintPdfDataGajiPegawai
} from '../../components';
import {
  DataPegawai,
  DataJabatan,
  DataKehadiran,
  DataGaji,
  LaporanGaji,
  LaporanAbsensi,
  SlipGaji,
  UbahPasswordAdmin,
  DataGajiPegawai,
  UbahPasswordPegawai,
  DataPotongan
} from '../../pages'

const AppRoutes = () => {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tentang' element={<About />} />
      <Route path='/about' element={<About />} />
      <Route path='/kontak' element={<Contact />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<Dashboard />} />

      {/* Admin routes */}
      {/* Admin master data */}
      <Route
        path='/data-pegawai'
        element={<DataPegawai />}
      />
      <Route
        path='/employees'
        element={<DataPegawai />}
      />
      <Route
        path='/data-pegawai/form-data-pegawai/add'
        element={<FormAddDataPegawai />}
      />
      <Route
        path='/employees/form/add'
        element={<FormAddDataPegawai />}
      />
      <Route
        path='/data-pegawai/form-data-pegawai/edit/:id'
        element={<FormEditDataPegawai />}
      />
      <Route
        path='/employees/form/edit/:id'
        element={<FormEditDataPegawai />}
      />
      <Route
        path='/data-jabatan'
        element={<DataJabatan />}
      />
      <Route
        path='/positions'
        element={<DataJabatan />}
      />
      <Route
        path='/data-jabatan/form-data-jabatan/add'
        element={<FormAddDataJabatan />}
      />
      <Route
        path='/positions/form/add'
        element={<FormAddDataJabatan />}
      />
      <Route
        path='/data-jabatan/form-data-jabatan/edit/:id'
        element={<FormEditDataJabatan />}
      />
      <Route
        path='/positions/form/edit/:id'
        element={<FormEditDataJabatan />}
      />

      {/* Admin transactions */}
      <Route
        path='/data-kehadiran'
        element={<DataKehadiran />}
      />
      <Route
        path='/attendance'
        element={<DataKehadiran />}
      />
      <Route
        path='/data-kehadiran/form-data-kehadiran/add'
        element={<FormAddDataKehadiran />}
      />
      <Route
        path='/attendance/form/add'
        element={<FormAddDataKehadiran />}
      />
      <Route
        path='/data-kehadiran/form-data-kehadiran/edit/:id'
        element={<FormEditDataKehadiran />}
      />
      <Route
        path='/attendance/form/edit/:id'
        element={<FormEditDataKehadiran />}
      />
      <Route
        path='/data-potongan'
        element={<DataPotongan />}
      />
      <Route
        path='/deductions'
        element={<DataPotongan />}
      />
      <Route
        path='/data-potongan/form-data-potongan/add'
        element={<FormAddDataPotongan />} />
      <Route
        path='/deductions/form/add'
        element={<FormAddDataPotongan />} />
      <Route
        path='/data-potongan/form-data-potongan/edit/:id'
        element={<FormEditDataPotongan />} />
      <Route
        path='/deductions/form/edit/:id'
        element={<FormEditDataPotongan />} />
      <Route
        path='/data-gaji'
        element={<DataGaji />}
      />
      <Route
        path='/salaries'
        element={<DataGaji />}
      />
      <Route
        path='/data-gaji/detail-data-gaji/name/:name'
        element={<DetailDataGaji />}
      />
      <Route
        path='/salaries/details/name/:name'
        element={<DetailDataGaji />}
      />
      <Route
        path='/data-gaji/cetak-gaji/slip-gaji/name/:name'
        element={<PrintPdfSlipGaji />}
      />
      <Route
        path='/salaries/print/salary-slip/name/:name'
        element={<PrintPdfSlipGaji />}
      />

      {/* Admin reports */}
      <Route
        path='/laporan/gaji'
        element={<LaporanGaji />}
      />
      <Route
        path='/reports/salary'
        element={<LaporanGaji />}
      />
      <Route
        path='/laporan/gaji/print-page'
        element={<PrintPdfLaporanGaji />}
      />
      <Route
        path='/reports/salary/print-page'
        element={<PrintPdfLaporanGaji />}
      />
      <Route
        path='/laporan/absensi'
        element={<LaporanAbsensi />}
      />
      <Route
        path='/reports/attendance'
        element={<LaporanAbsensi />}
      />
      <Route
        path='/laporan/absensi/print-page'
        element={<PrintPdfLaporanAbsensi />}
      />
      <Route
        path='/reports/attendance/print-page'
        element={<PrintPdfLaporanAbsensi />}
      />
      <Route
        path='/laporan/slip-gaji'
        element={<SlipGaji />}
      />
      <Route
        path='/reports/salary-slip'
        element={<SlipGaji />}
      />
      <Route
        path='/laporan/slip-gaji/print-page'
        element={<PrintPdfSlipGaji />}
      />
      <Route
        path='/reports/salary-slip/print-page'
        element={<PrintPdfSlipGaji />}
      />

      {/* Admin settings */}
      <Route
        path='/ubah-password'
        element={<UbahPasswordAdmin />}
      />
      <Route
        path='/change-password'
        element={<UbahPasswordAdmin />}
      />

      {/* Employee routes */}
      {/* Employee salary dashboard */}
      <Route
        path='/data-gaji-pegawai'
        element={<DataGajiPegawai />}
      />
      <Route
        path='/employee-salaries'
        element={<DataGajiPegawai />}
      />
      <Route
        path='/data-gaji-pegawai/print-page'
        element={<PrintPdfDataGajiPegawai />}
      />
      <Route
        path='/employee-salaries/print-page'
        element={<PrintPdfDataGajiPegawai />}
      />
      <Route
        path='/ubah-password-pegawai'
        element={<UbahPasswordPegawai />}
      />
      <Route
        path='/employee/change-password'
        element={<UbahPasswordPegawai />}
      />

      {/* 404 route */}
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  )
}

export default AppRoutes;
