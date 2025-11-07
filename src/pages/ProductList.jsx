import React, { useState } from "react";

export default function ProductForm() {
  const productName = [
    "Chais",
    "Chang",
    "Chartreuse Verte",
    "Cote De Biaye",
    "Guarana Fantastica",
    "Ipoh Coffee",
    "Lakkalikoori",
    "Laughing Lumberjack Lager",
    "Outback Lager",
  ];

  const Unit = [
    "10 boxes × 20 bags",
    "24 - 12 oz bottles",
    "750 ml per bottles",
    "12 - 75 cl bottles",
    "12 - 355 ml cans",
    "16 - 500 g tins",
    "500 ml",
    "24 - 12 oz bottles",
    "24 - 355 ml bottles",
  ];

  const Price = [18, 19, 18, 264, 5, 46, 18, 14, 65];

  const suppliers = [
    "Exotic Liquid",
    "Exotic Liquid",
    "Aux joyeux ecclesiasitiques",
    "Aux joyeux ecclesiasitiques",
    "Refrescos Americanas LTDA",
    "Leka Trading",
    "Karkki Oy",
    "Bigfoot Breweries",
    "Pavlova Ltd",
  ];

  const categories = ["Beverages"];

  const [form, setForm] = useState({
    name: "",
    unit: "",
    price: "",
    supplier: "",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Data tersimpan");
    setForm({
      name: "",
      unit: "",
      price: "",
      supplier: "",
      category: "",
    });
  };

  return (
    <div
      style={{
        background: "#ffffffff",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "white",
          color: "black",
          padding: "30px",
          borderRadius: "12px",
          width: "400px",
          boxShadow: "0 4px 10px rgba(255, 255, 255, 0.3)",
        }}
      >
        <h2 style={{ color: "#008b8b", marginBottom: "20px" }}>
           Form Registrasi Produk
        </h2>

        <form onSubmit={handleSubmit}>
          <label style={{ display: "block", marginBottom: "8px" }}>
            Product Name:
          </label>
          <select
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "12px",
              borderRadius: "6px",
            }}
          >
            <option value="">-- Pilih Produk --</option>
            {productName.map((p, i) => (
              <option key={i} value={p}>
                {p}
              </option>
            ))}
          </select>

          <label style={{ display: "block", marginBottom: "8px" }}>Unit:</label>
          <select
            value={form.unit}
            onChange={(e) => setForm({ ...form, unit: e.target.value })}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "12px",
              borderRadius: "6px",
            }}
          >
            <option value="">-- Pilih Unit --</option>
            {Unit.map((u, i) => (
              <option key={i} value={u}>
                {u}
              </option>
            ))}
          </select>

          <label style={{ display: "block", marginBottom: "8px" }}>
            Price :
          </label>
          <select
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "12px",
              borderRadius: "6px",
            }}
          >
            <option value="">-- Pilih Harga --</option>
            {Price.map((p, i) => (
              <option key={i} value={p}>
                {p}
              </option>
            ))}
          </select>

          <label style={{ display: "block", marginBottom: "8px" }}>
            Supplier Name:
          </label>
          <select
            value={form.supplier}
            onChange={(e) => setForm({ ...form, supplier: e.target.value })}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "12px",
              borderRadius: "6px",
            }}
          >
            <option value="">-- Pilih Supplier --</option>
            {suppliers.map((s, i) => (
              <option key={i} value={s}>
                {s}
              </option>
            ))}
          </select>

          <label style={{ display: "block", marginBottom: "8px" }}>
            Category Name:
          </label>
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "20px",
              borderRadius: "6px",
            }}
          >
            <option value="">-- Pilih Category --</option>
            {categories.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              background: "#00a19d",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
}
