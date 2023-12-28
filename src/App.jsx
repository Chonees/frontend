
import './App.css'
import {Routes,Route} from "react-router-dom";
import QueHacemos from "./views/queHacemos/QueHacemos"
import Analisis from "./views/Analisis"
import Servicios from "./views/Servicios"
import QuienesSomos from "./views/QuienesSomos"
import Redes from "./views/Redes"
import Contacto from "./views/Contacto"
import Faqs from "./views/Faqs"
function App() {

  
    return (
      <>
        <Routes>
          <Route exact path="/que-hacemos" element={<QueHacemos />} />
          <Route path="/analisis-funcionales" element={<Analisis />} />
          <Route path="/nuestros-servicios" element={<Servicios />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/redes" element={<Redes />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/faqs" element={<Faqs />} />

        </Routes>
      </>
    );
  
}

export default App;
