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
    <img src="https://mindlatam.com/wp-content/themes/mind/img/home/mosaico-2.jpg" alt="Mind" width="100%" height="1050" loading="lazy" decoding="async"/>
    </div>
    <div></div>
    <div></div>

    </section>
    </div>
  );
};

export default Home;
