import "./App.css";
import { Routes, Route } from "react-router-dom";
import QueHacemos from "./views/QueHacemos";
import Analisis from "./views/Analisis";
import Servicios from "./views/Servicios";
import QuienesSomos from "./views/QuienesSomos";
import Redes from "./views/Redes";
import Contacto from "./views/Contacto";
import Faqs from "./views/Faqs";
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/que-hacemos" element={<QueHacemos />} />
        <Route path="/analisis-funcionales" element={<Analisis />} />
        <Route path="/nuestros-servicios" element={<Servicios />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/redes" element={<Redes />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
