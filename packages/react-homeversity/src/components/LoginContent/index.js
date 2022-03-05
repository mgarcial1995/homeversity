import './styles.sass'
import LoginImage from '../../assets/img/smiling.jpg'
import { useState } from 'react';
let userinit = {name: '', lastName: '', date: '', gender: '', email: '', password: ''}
const LoginContent = () => {

return (
    <div className="loginContent">
        <h2 className="title">Iniciar Sesión</h2>
        <form className="formContent" >
            <input className="input" type="text" placeholder="Correo de registro" />
            <input className="input" type="password" placeholder="Contraseña" />
            <input className="input" type="password" placeholder="Repetir ontraseña" />

            <button className="btn">Ingresar</button>
            <p>¿Aun no tienes cuenta? <span class="span">Regístrate</span></p>
        </form>
    </div>
)
};

export default LoginContent