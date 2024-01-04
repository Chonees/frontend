import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.logo}>
        <div className={styles.imagen}>
          <img
            src="https://mindlatam.com/wp-content/themes/mind/img/logos/mind-logo-dark.svg"
            alt="logo"
          />
        </div>

        <div className={styles.parrafo}>
          <p>
            © 2023 SILVINA TOCCHETTI <br />
            Mind Lifestyle & Functional Medicine <br />
            Todos los derechos reservados
          </p>
        </div>
      </div>

      <div className={styles.datos}>
        <div className={styles.one}>
          <p>QueHacemos</p>
          <p>QuienesSomos</p>
          <p>Redes</p>
          <p>nuestros Servicios</p>
          <p>Contacto</p>
          <p>Faqs</p>
          <p>Analisis funcionales</p>
        </div>

        <div className={styles.two}>
          <p>ejemplo@gmail.com</p>
          <p>+57 000 0000 000</p>
          <p>+57 000 0000 000</p>
          <p>+57 000 0000 000</p>
        </div>
        <div className={styles.three}>
          <p>Ir arriba </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
