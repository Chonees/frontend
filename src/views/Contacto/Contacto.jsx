import "../Contacto/Contacto.css"
const Contacto=()=>{
    return (
        <>
       
        <form action="https://formsubmit.co/lucasbranchini196@gmail.com" method="POST" >
            <h2>Contacto</h2>
            <div class= "input-group">
                <label for="nombre">Nombre: </label>
                <input type="text" name="name" id="name" placeholder="Nombre"/>
                
                <label for="phone">Telefono: </label> 
                <input type="tel" name="phone" id="phone" placeholder="Telefono"/>
               
                <label for="email">Email: </label> 
                <input type="email" name="email" id="email" placeholder="Email"/>
                
                <label for="message">Mensaje</label> 
                <textarea name="message" id="message" cols="30"  rows="5" placeholder="Mensaje"></textarea>
                
                <div class="form-txt">
                    <a href="#">Politica de privacidad</a>
                    <a href="#">Terminos y condiciones</a>
                </div>
                <input class="btn" type="submit" value="Enviar"/>

            </div>
        </form>

          
        
        </>
        
    )
    }
    
    export default Contacto;