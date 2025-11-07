import React, { useState } from "react";

export default function Registrasi() {
  const [formData, setFormData] = useState({
    name: "",
    unit: "",
    price: "",
    supplier: "",
    category: "",
  });

  const productList = [
    {
      name: "Chais",
      unit: "10 boxes × 20 bags",
      price: 18,
      supplier: "Exotic Liquid",
      category: "Beverages",
    },
    {
      name: "Chang",
      unit: "24 - 12 oz bottles",
      price: 19,
      supplier: "Exotic Liquid",
      category: "Beverages",
    },
    {
      name: "Ipoh Coffee",
      unit: "16 - 500 g tins",
      price: 46,
      supplier: "Leka Trading",
      category: "Beverages",
    },
    {
      name: "Laughing Lumberjack Lager",
      unit: "24 - 12 oz bottles",
      price: 14,
      supplier: "Bigfoot Breweries",
      category: "Beverages",
    },
  ];

  const suppliers = ["Exotic Liquid", "Leka Trading", "Bigfoot Breweries"];
  const categories = ["Beverages", "Condiments", "Seafood"];

  const handleProductSelect = (e) => {
    const selected = productList.find((p) => p.name === e.target.value);
    if (selected) {
      setFormData({
        ...formData,
        name: selected.name,
        unit: selected.unit,
        price: selected.price,
        supplier: selected.supplier,
        category: selected.category,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data tersimpan:", formData);
    alert(`Produk "${formData.name}" berhasil disimpan!`);
    setFormData({
      name: "",
      unit: "",
      price: "",
      supplier: "",
      category: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-teal-400">🧾 Form Registrasi Produk</h2>

        {/* Product Name */}
        <div>
          <label className="block mb-1">Product Name:</label>
          <select
            name="name"
            value={formData.name}
            onChange={handleProductSelect}
            required
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-teal-500"
          >
            <option value="">-- Pilih Produk --</option>
            {productList.map((p, index) => (
              <option key={index} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        {/* Unit */}
        <div>
          <label className="block mb-1">Unit:</label>
          <select
            name="unit"
            value={formData.unit}
            onChange={(e) =>
              setFormData({ ...formData, unit: e.target.value })
            }
            required
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-teal-500"
          >
            <option value="">-- Pilih Unit --</option>
            {[...new Set(productList.map((p) => p.unit))].map((unit, i) => (
              <option key={i}>{unit}</option>
            ))}
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1">Price ($):</label>
          <select
            name="price"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            required
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-teal-500"
          >
            <option value="">-- Pilih Harga --</option>
            {[...new Set(productList.map((p) => p.price))].map((price, i) => (
              <option key={i} value={price}>
                {price}
              </option>
            ))}
          </select>
        </div>

        {/* Supplier */}
        <div>
          <label className="block mb-1">Supplier Name:</label>
          <select
            name="supplier"
            value={formData.supplier}
            onChange={(e) =>
              setFormData({ ...formData, supplier: e.target.value })
            }
            required
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-teal-500"
          >
            <option value="">-- Pilih Supplier --</option>
            {suppliers.map((s, i) => (
              <option key={i}>{s}</option>
            ))}
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1">Category Name:</label>
          <select
            name="category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            required
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-teal-500"
          >
            <option value="">-- Pilih Kategori --</option>
            {categories.map((c, i) => (
              <option key={i}>{c}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold py-2 rounded-lg mt-4 transition-colors"
        >
          Simpan
        </button>
      </form>
    </div>
  );
}
