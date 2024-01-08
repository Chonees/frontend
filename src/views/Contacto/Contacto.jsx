import styles from "./Contacto.module.css"

const Contacto=()=>{
   
   
 return (
      <div className={styles.contenedor}>

        <div className={styles.numbers}>

        <div className={styles.tituloOne}>
            <p className={styles.texto}>¿Cómo <br /> podemos <br /> ayudarte?</p>
        </div>
        <div className={styles.textoTwo}>
            <span >Contactanos para dar tu primer paso.</span>
        </div>
        
        </div>
        
    <div className={styles.seccion2}>
        <div className={styles.correo}>
            <p>hola@mindlatam.com <br />
+ 598 2604 6305 | + 598 93 982 322</p>

    <p> Rostand 1577 | Of. 01 <br />
Montevideo, Uruguay CP 11500</p>

        </div>
        <div className={styles.form}>
            <form action="">
            <input type="text"  placeholder="* Nombre completo"/>
            <input type="text"  placeholder="* Teléfono"/>
            <input type="text"  placeholder="* Mail"/>
            <input type="text" placeholder="* Mensaje"/>
                
                <p className={styles.campos}> * campos obligatorios</p>

                <button className={styles.enviar}>Enviar</button>
            </form>

        </div>

    </div>
    <img src="https://mindlatam.com/wp-content/themes/mind/img/contacto/contacto-1.jpg" width="100%" height="580px" alt="" />

      </div>
        
    )
    }
    
    export default Contacto;