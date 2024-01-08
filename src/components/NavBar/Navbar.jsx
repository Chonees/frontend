import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <Link to="/">
        <div className={styles.image}>
          <img
            src="https://mindlatam.com/wp-content/themes/mind/img/logos/mind-logo-dark.svg"
            alt="logo"
          />
        </div>
      </Link>
      <Link to="/que-hacemos" className={styles.navLink}>
        Qué hacemos
      </Link>
      <Link to="/analisis" className={styles.navLink}>
        Análisis funcionales
      </Link>
      <Link to="/nuestros-servicios" className={styles.navLink}>
        Nuestros servicios
      </Link>
      <Link to="/quienes-somos" className={styles.navLink}>
        Quiénes somos
      </Link>
      <Link to="/redes" className={styles.navLink}>
        Redes
      </Link>
      <Link to="/contacto" className={styles.navLink}>
        Contacto
      </Link>
      <Link to="/faqs" className={styles.navLink}>
        {`FAQ's`}
      </Link>
    </div>
  );
};

export default Navbar;
