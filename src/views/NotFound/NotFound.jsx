import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFountContainer}>
      <Navbar />
      <h1 className={styles.text}>NotFound</h1>
      <Footer />
    </div>
  );
};

export default NotFound;
