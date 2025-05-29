import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Residential from "./pages/Residential.jsx";
import Commercial from "./pages/Commercial.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="residential" element={<Residential/>}/>
        <Route path="residential" element={<Residential/>}/>
        <Route path="commercial" element={<Commercial/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
