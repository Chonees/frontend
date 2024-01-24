import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.principal}>
      <section className={styles.section}>
        <div className={styles.titulo1}>
          <span className={styles.fortaceler}>Fortalecer </span>
          <span className={styles.fortaceler}>Restaurar</span>
          <span className={styles.fortaceler}> Vivir mejor</span>
        </div>
        <div className={styles.titulo2}>
          <h3>Lifestyle & Functional Medicine</h3>
        </div>
      </section>
      <section className={styles.section2}>
        <div>
          <img
            src="https://mindlatam.com/wp-content/themes/mind/img/home/mosaico-2.jpg"
            alt="Mind"
            width="100%"
            height="1050"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div></div>
        <div></div>
      </section>
      <section className={styles.containerGrid}>
        <div className={styles.divGrid}>
          <h2 className={styles.h2Grid}>
            Una nueva solución
            <br />
            para tu salud
            <br />
            que va a la raíz
            <br />
            de tus sintomas.
          </h2>
        </div>
      </section>
      <section className={styles.containerflex}>
        <div className={styles.containerBlue}>
          <div className={styles.contentBlue}>
            <img className={styles.imgGrid - 1} width="50%" src="https://mindlatam.com/wp-content/themes/mind/img/icons/clock-tick.svg" alt="" loading="lazy" decoding="async" />
            <div className={styles.p2container}>
              <p className={styles.pGrid-1}>
                Optimizá tu nutrición, tu entorno, tu expresión genética y tu estilo de vida. Prevení, restaurá
                y revertí disfunciones crónicas. Desarrollá tu máxima expresión de salud y vitalidad.
              </p>
            <div>
              <p>Somos el primer centro especializado </p><br />
              <p>en Lifestyle &amp; Functional Medicine </p><br />
              <p>del Cono Sur.</p><br />
            </div>
          </div>
          </div>  
        </div>
        <div className={styles.imagenesSuperpuestas}>
          <div className={styles.grid2_Imagen1}><img src="https://mindlatam.com/wp-content/themes/mind/img/home/img-layer-1a.jpg" alt="" /></div>
          <div className={styles.grid2_Imagen2}><img width="650" src="https://mindlatam.com/wp-content/themes/mind/img/home/img-layer-1b.jpg" alt="" /></div>
        </div>
      </section>
    </div>
  );
};

export default Home;

{/*  */}
{/* <section className={styles.containerGrid-2}>  
  <div className={styles.containerGrid-3}>
    <h3 className={styles.h3-1}>
      Somos el primer centro especializado 
      <br class="style-8" />
      en Lifestyle &amp; Functional Medicine 
      <br class="style-9" />
      del Cono Sur.
    </h3>
  </div>
  <picture className={styles.pictureGrid-1}>
   <img className={styles.imgGrid-2} src="https://mindlatam.com/wp-content/themes/mind/img/home/img-layer-1a.jpg" alt="" width="528px" height="793px"/>
  </picture>
  <picture className={styles.pictureGrid-2}> 
    <img className={styles.imgGrid-3} src="https://mindlatam.com/wp-content/themes/mind/img/home/img-layer-1b.jpg" alt="" width="584px" height="876px"/>
  </picture>
</section> */}
{/*  */}