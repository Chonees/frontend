import styles from "./Servicios.module.css"
import { useState } from "react";
import { Link } from "react-router-dom";
const Servicios=()=>{

  

    const [button1Active, setButton1Active] = useState(false);
    const [button2Active, setButton2Active] = useState(false);
    const [button3Active, setButton3Active] = useState(false);
    const [button4Active, setButton4Active] = useState(false);

  const handleToggle = (buttonNumber) => {
    if (buttonNumber === 1) {
      setButton1Active(!button1Active);
    } else if (buttonNumber === 2) {
      setButton2Active(!button2Active);
    }else if(buttonNumber===3){
        setButton3Active(!button3Active)
    } else if(buttonNumber===4){
        setButton4Active(!button4Active)
    }
    // Puedes agregar más casos según la cantidad de botones que tengas
  };
    
    return(


        <div className={styles.global}> 
        <div className={styles.contenedor1}>
            <div className={styles.conoce}>
                <span>Conocé <br /> Nuestros <br /> Servicios</span>

            </div>
            <div className={styles.herramientas}>
                <span >Nuestras herramientas para crear salud</span>
            </div>
                </div>

                <img src="https://mindlatam.com/wp-content/themes/mind/img/nuestros-servicios/nuestros-servicios-1.jpg" width="100%" height="1280" loading="lazy" decoding="async" alt="Nuestros servicios"/> 

                <div className={styles.seccion3}>

                    <span className={styles.seccion3}>Nuestro abordaje está diseñado para optimizar las funciones de tu organismo, desde tus niveles de energía y rendimiento físico y mental, hasta una completa detoxificación y recalibración de la función celular.</span>
                </div>

            <div className={styles.seccion4}>
                <div className={styles.img1}>
            <img src="https://mindlatam.com/wp-content/uploads/2021/11/nuestros-servicios-2-mind.jpg" alt="Nuestros Servicios 2" width="561" height="980" loading="lazy" decoding="async"></img>
            </div>
            <div className={styles.img2}>
            <img src="https://mindlatam.com/wp-content/uploads/2021/11/nuestros-servicios-2-mind.jpg" alt="Nuestros Servicios 2" width="455" height="742" loading="lazy" decoding="async"/>
            </div>
            <div className={styles.img3}>
          
        <h2>Nuestros Planes</h2>


            <button className={styles.primeros} onClick={() => handleToggle(1)}>
        {button1Active ? 'Plan Asignature -' : 'Plan Asignature +'} 
      </button>
      {button1Active && (
        <div>
          <p>Transitando las tres fases de nuestro proceso, redescubrí cómo funciona tu organismo mediante análisis clínicos funcionales en el exterior y una metodología de vanguardia diseñada para restaurar el equilibrio de tu salud mediante intervenciones personalizada de nutrición, epigenética y estilo de vida. Trabajaremos en conjunto durante un período estimado de 3 a 6 meses dependiendo de las áreas de intervención identificadas en la fase de evaluación funcional y el alcance de tus objetivos de salud. Disponible para Uruguay y Argentina.</p>
        </div>
      )}
    <br />


<button className={styles.primeros} onClick={() => handleToggle(2)}>
        {button2Active ? 'Plan Element -' : 'Plan Element +'} 
      </button>
      {button2Active && (
        <div>
          <p>Un primer acercamiento al abordaje del Lifestyle & Functional medicine donde trabajaremos de forma online durante 6 semanas sobre los principales factores modificables de tu estilo de vida para detoxificar, reenergizar y recalibrar tu salud. Se tomará en cuenta la historia clínica y los resultados de los análisis clínicos locales. No incluye realización de análisis internacionales especializados.</p>
        </div>
      )}
      <br />

<button className={styles.primeros} onClick={() => handleToggle(3)}>
        {button3Active ? 'Plan Internacional -' : 'Plan Internacional +'} 
      </button>
      {button3Active && (
        <div>
          <p>Trabajaremos a través de TeleSalud y mediante acuerdos internacionales con laboratorios locales especializados para que cada vez más personas puedan acceder a los beneficios del Lifestyle & Functional Medicine más allá de las fronteras. Disponible para Chile, España, Perú, México y Colombia. Por otros países consultar.</p>
        </div>
      )}
      <br />


<button className={styles.primeros} onClick={() => handleToggle(4)}>
        {button4Active ? 'Mind Empresas -' : 'Mind Empresas +'} 
      </button>
      {button4Active && (
        <div>
          <p>Brindamos accesos a análisis clínicos funcionales y planes grupales de Lifestyle Medicine para empresas diseñados para potenciar los niveles de energía y vitalidad, prevenir el surgimiento de desórdenes crónicos y mejorar la calidad de vida y la productividad. A su vez, podrás acceder a nuestros servicios de consultoría para evaluar cuál es la mejor forma de implementar el abordaje del Functional & Lifestyle Medicine en tu organización.</p>
        </div>
      )}
            </div>

            </div>
        <h3 className={styles.titulo23}>
        Te invitamos a conocer más.
        </h3>
        <div className={styles.tresbotones}>
          <button className={styles.btn}>metodología</button>
          <Link to={`/analisis`}>
          <button className={styles.btn}>análisis funcionales</button>
          </Link>
          <button className={styles.btn}>desacargar brochure</button>
        </div>


        {/* aqui va el carrusel */}
        <section className={styles.carrusel}>
          <h3>---- Testimonios ----</h3>

          <p className={styles.textCarrusel}>El tratamiento me hizo reencontrar con la versión de mí que añoraba por un lado y deseaba por otro. Que añoraba a nivel físico (peso, dolores, etc.), y que deseaba en cuanto a un nuevo estilo de vida más armonioso conmigo y con el entorno.</p>

        </section>
        </div>

    )
}


export default Servicios;