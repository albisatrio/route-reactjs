// src/app/routes.jsx
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import App from "../App";
import Profil from "../pages/Profil"; 
import Galeri from "../pages/Galeri";
import HubungiKami from "../pages/HubungiKami";
import Registrasi from "../pages/Registrasi";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "profil", element: <Profil /> },
      { path: "galeri", element: <Galeri /> },
      { path: "hubungi-kami", element: <HubungiKami /> },
      { path: "registrasi", element: <Registrasi />},
    ],
  },
]);