import './styles.sass'
import LoginImage from '../../assets/img/smiling.jpg'
import { useState } from 'react';
let userinit = {name: '', lastName: '', date: '', gender: '', email: '', password: ''}
const RegisterContent = () => {

return (
    <div className='loginContent'>
        <h2 className="title">Registro</h2>
        <form className="formContent" >
            <div className='formContent_subinputs'>
                <input className="input" type="text" placeholder="Nombres" />
                <input className="input" type="text" placeholder="Apelidos" />
            </div>
            <div className='formContent_subinputs'>
                <input className="input" type="date" placeholder="Fecha de nacimiento" />
                <input className="input" type="test" placeholder="Género" />
            </div>
            <input className="input" type="text" placeholder="Correo de registro" />
            <input className="input" type="password" placeholder="Contraseña" />
            <input className="input" type="password" placeholder="Repetir ontraseña" />

            <button className="btn">Crear cuenta</button>
            <p>¿Ya tienes cuenta? <span class="span">Inicia sesión</span></p>
        </form>
    </div>
)
};
  
export default RegisterContent