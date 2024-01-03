
import "./App.css";
import { Routes, Route } from "react-router-dom";
import QueHacemos from "./views/QueHacemos/QueHacemos";
import Analisis from "./views/AnalisisFun/Analisis";
import Servicios from "./views/Servicios";
import QuienesSomos from "./views/QuienesSomos";
import Redes from "./views/Redes";
import Contacto from "./views/Contacto/Contacto";
import Faqs from "./views/Faqs";
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
    
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/que-hacemos" element={<QueHacemos />} />
        <Route path="/analisis" element={<Analisis />}/>
        <Route path="/nuestros-servicios" element={<Servicios />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/redes" element={<Redes />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
