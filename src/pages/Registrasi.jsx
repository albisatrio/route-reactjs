import React, { useState } from "react";

export default function Registrasi() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    nohp: "",
    password: "",
    konfirmasiPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pendaftaran berhasil!\nSelamat datang, ${formData.nama}!`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 p-6">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Formulir Pendaftaran
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Nama Lengkap</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Masukkan nama lengkap"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Masukkan email aktif"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">No. HP</label>
            <input
              type="tel"
              name="nohp"
              value={formData.nohp}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Contoh: 081234567890"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Buat password"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Konfirmasi Password</label>
            <input
              type="password"
              name="konfirmasiPassword"
              value={formData.konfirmasiPassword}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Ulangi password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-2 transition-colors"
          >
            Daftar Sekarang
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6 text-sm">
          Sudah punya akun? <a href="/login" className="text-blue-600 hover:underline">Masuk di sini</a>
        </p>
      </div>
    </div>
  );
}
