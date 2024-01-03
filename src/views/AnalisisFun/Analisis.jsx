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
   


     
    </div>
  );
}
 export default Analisis;