import styles from "./Analisis.module.css"
import { NavLink } from "react-router-dom";




const Analisis =()=>{

  
  const elementos=["Función digestiva y permeabilidad intestinal", "Función hormonal, reproductiva y fertilidad","Metabolismo y fluctuaciones de peso","Función neuroendocrina y cognitiva","Función inmune e inflamación crónica","Nutrición celular e intracelular","Estrés, energía y fatiga crónica","Ritmo circadiano y melatonina","Marcadores epigenéticos y envejecimiento celular","Panel cardiovascular funcional avanzado","Alergias, Intolerancias y sensibilidades alimentarias","Reacción cruzada al gluten y otras moléculas del trigo"]


  return (  
  
  <div className={styles.contenedorPrincipal}>

    {/* primer contenedor */}
    <div className={styles.one}>

<div className={styles.contenedor1}>
<span className={styles.span1}>Análisis <br /> Clinicos <br /> Funcionales </span>
</div>
<div className={styles.contenedor2}>
<span>Una nueva forma de comprender <br />
tu organismo </span>
</div>


</div>
<hr />
<div className={styles.two}>

<div className={styles.contenedor3}>

    <h2 className={styles.titulo1}>¿Qué son?</h2>
    <img className={styles.icono} src="https://mindlatam.com/wp-content/themes/mind/img/icons/matraz.svg" alt="Matraz" loading="lazy" decoding="async"></img>
    <p>Son análisis especializados de laboratorio que estudian las diferentes funciones del organismos a través de biomarcadores específicos. Nos muestran cómo nuestras células se nutren y detoxifican, cómo apoyan la función hormonal y metabólica, su rol en la expresión genética y en la función digestiva, entre otras.</p>

    <img className={styles.icono} src="https://mindlatam.com/wp-content/themes/mind/img/icons/microscopio.svg" alt="Microscopio" loading="lazy" decoding="async"></img>

    <p>Permiten investigar las causas detrás de los desórdenes y disfunciones mucho antes de que la patología se establezca. Brindan información precisa para identificar cómo debemos intervenir de forma personalizada y corregir tanto el exceso como la falta de función mediante factores modificables de estilo de vida y nutrición.</p>

    <img className={styles.icono} src="https://mindlatam.com/wp-content/themes/mind/img/icons/plus.svg" alt="más" loading="lazy" decoding="async"></img>

    <p>Estos análisis se envían a laboratorios partners especializados en Lifestyle & Functional Medicine, localizados en Estados Unidos e Inglaterra, únicos centros de investigación donde se realizan este tipo de estudios. Son análisis no invasivos que en su mayor parte se pueden realizar en su domicilio.</p>
</div>
<div className={styles.contenedor4}>
    
<img src="https://mindlatam.com/wp-content/themes/mind/img/analisis-funcionales/analisis-1.jpg" alt="Metodología 1" width="450" height="590" loading="lazy" decoding="async"></img>
</div>

</div>
<div className={styles.three}>
<p className={styles.titulo2}>
La selección de los biomarcadores se basa en los avances científicos más recientes
en biología molecular, genómica nutricional, microbiología, inmunología
nutricional y neuroendocrinología en el marco del abordaje del
Lifestyle & Functional Medicine. Para conocer más sobre nuestra metodología ingresá aquí:
</p>

</div>
        <NavLink to={`/que-hacemos`}>
    <button className={styles.boton1}>Conocer más </button>
    </NavLink>

    <div className={styles.four}>
    <div className={styles.contenedor5}>
      <h2 className={styles.titulo3}>¿Qué analizan?</h2>
      <p className={styles.parrafo1}>Investigan el comportamiento único de tu organismo a nivel celular en sus diferentes funciones y sistemas de forma integrada. Estos son algunos de los biomarcadores que analizamos:</p>
    </div>
    <hr />
    <div className={styles.contenedor6}>
      <ul className={styles.textos}>
      {elementos.map((ele,index)=>{
        return  <div className={styles.ele} key={index}><img  src="https://mindlatam.com/wp-content/themes/mind/img/icons/label-sky.svg" alt="" loading="lazy" decoding="async" width="30px"></img><li >{ele}</li> </div> 
      })}

      </ul>
     </div>
     <hr />
    <div className={styles.contenedor7}>
      <p className={styles.parrafo2}>Una vez obtenidos los resultados, se realiza una evaluación funcional personalizada para comprender cómo los diferentes sistemas biológicos interactúan entre sí, en el marco de la historia clínica y los motivos de la consulta de cada persona.</p>
    </div>

    </div>
   
      <div className={styles.five}>
        <h4 className={styles.titulo4}>
        Descargá nuestro brochure y conocé más
          sobre nuestra metodología.
        </h4>
        <button className={styles.boton1}>Descargar brochure</button>
      </div>
      <div className={styles.six}>
        <div className={styles.contenedor3}>

        <h3 className={styles.h3}>¿Cuál es su diferencial?</h3>
    <p>Estamos habituados a los análisis clínicos convencionales cuyo objetivo es realizar un diagnóstico médico e identificar una patología si la hubiere. En cambio, los análisis funcionales, como dice su nombre, buscan comprender el nivel de salud de las distintas funciones orgánicas, y nos indican de forma precisa cómo recuperar su capacidad óptima.</p>

    <h3 className={styles.h3}>¿Cómo puedo acceder a ellos?</h3>
    <h3>Planes Mind</h3>

    <p>Comienza tu proceso en el abordaje del Lifestyle & Functional Medicine agendando una consulta inicial donde evaluaremos tu historia y tus motivos de consulta para indicarte cuáles son los análisis adecuados para tí.</p>

    
    <h3 className={styles.h3}>Contactar</h3>
    <h3>Profesionales de la salud</h3>
    <p>Si eres un profesional de la salud y te interesa incorporar estos análisis a tu práctica clínica, contactanos para agendar una instancia y explorar las diferentes modalidades de acceso.</p>
</div>
<div className={styles.contenedor4}>
    
<img  src="https://mindlatam.com/wp-content/themes/mind/img/analisis-funcionales/analisis-2.jpg" width="450" height="590" alt="Análisis 3" loading="lazy" decoding="async"></img>
</div>

      </div>
     <div className={styles.carrusel}> 
     <img  src="https://mindlatam.com/wp-content/uploads/2021/10/analisis-3-mind.jpg" width="100%" height="956"   alt="Analisis 3"></img>
     </div>

     <div className={styles.seven}>
      <h3 className={styles.titulo7}> ¿Te interesa saber más?</h3>
      <NavLink to={`/contacto`}>
      <button className={styles.boton1}>contactar</button>
      </NavLink>

     </div>
    </div>
  );
}
 export default Analisis;