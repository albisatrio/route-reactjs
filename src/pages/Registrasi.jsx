import React, { useState } from "react";

export default function Registrasi() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    nohp: "",
    password: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // validasi sederhana
    if (!formData.nama || !formData.email || !formData.nohp || !formData.password) {
      setStatus("❌ Mohon isi semua kolom!");
      return;
    }

    setStatus("⏳ Mengirim data...");
    setTimeout(() => {
      setStatus("✅ Pendaftaran berhasil! Selamat datang, " + formData.nama + " 🎉");
      setFormData({ nama: "", email: "", nohp: "", password: "" });
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-100">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
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
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
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
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
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
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
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
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Buat password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg py-2 transition-all"
          >
            Daftar Sekarang
          </button>
        </form>

        {status && (
          <p className="text-center mt-4 text-sm font-medium text-gray-600">
            {status}
          </p>
        )}
      </div>
    </div>
  );
}
