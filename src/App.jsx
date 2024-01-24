import "./App.css";
import { Routes, Route } from "react-router-dom";
import QueHacemos from "./views/QueHacemos/QueHacemos";
import Analisis from "./views/AnalisisFun/Analisis";
import Servicios from "./views/NuestrosServicios/Servicios.jsx";
import QuienesSomos from "./views/QuienesSomos";
import Redes from "./views/Redes";
import Contacto from "./views/Contacto/Contacto";

import Faqs from "./views/Faqs/Faqs.jsx";
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/que-hacemos" element={<QueHacemos />} />
        <Route path="/analisis" element={<Analisis />} />
        <Route path="/nuestros-servicios" element={<Servicios />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/redes" element={<Redes />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
