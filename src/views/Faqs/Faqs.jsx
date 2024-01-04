import styles from "./Faqs.module.css";
import image1 from "../../assets/FAQimg1.jpg";

const Faqs = () => {
  return (
    <div className={styles.mainContainer}>
      <div>
        <p>Preguntas Frecuentes</p>
        <p>Todo lo que necesitás saber para comenzar.</p>
      </div>
      <div className={styles.image}>
        <img src={image1} alt="logo" />
      </div>
      <div>listas</div>
      <div className={styles.final}>
        <p>tengo Preguntas?</p>
        <p>como podemos ayudarte?</p>
        <button>Contactar</button>
      </div>
    </div>
  );
};

export default Faqs;
