import { useState } from "react";

export default function Registrasi() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    password: "",
    jurusan: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `✅ Pendaftaran Berhasil!\n\nNama: ${formData.nama}\nEmail: ${formData.email}\nJurusan: ${formData.jurusan}`
    );
    setFormData({
      nama: "",
      email: "",
      password: "",
      jurusan: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-gray-100">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Formulir Pendaftaran
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              required
