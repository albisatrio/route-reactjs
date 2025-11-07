import { path } from "framer-motion/client";
import { Outlet, NavLink } from "react-router-dom";

export default function App() {
  const menu = [
    { path: "/", label: "Beranda" },
    { path: "/about", label: "Tentang" },
    { path: "/profil", label: "Profil" },
    { path: "/galeri", label: "Galeri" },
    { path: "/hubungi-kami", label: "Hubungi Kami" },
    { path: "/registrasi", label: "Registrasi" },
    { path: "/product-list", label: "Product List" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-indigo-600 to-blue-600 shadow-lg py-3">
        <div className="container mx-auto flex justify-center flex-wrap gap-5 text-white font-medium">
          {menu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `transition-all px-3 py-2 rounded-lg ${
                  isActive
                    ? "bg-white text-indigo-700 shadow-md"
                    : "hover:bg-indigo-500"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Isi halaman */}
      <main className="flex-grow container mx-auto p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center py-3">
        <p>© 2025 MyWebsite — All rights reserved.</p>
      </footer>
    </div>
  );
}
