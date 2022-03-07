import './styles.sass'
import LoginImage from '../../assets/img/smiling.jpg'
import { useState, useContext} from 'react';
import {TypeLoginContext} from '../LoginBox'
const LoginContent = () => {
    const {typeLog, setTypeLog} = useContext(TypeLoginContext)
return (
    <div className="loginContent">
        <h2 className="title">Iniciar Sesión</h2>
        <form className="formContent" >
            <input className="input" type="text" placeholder="Correo de registro" />
            <input className="input" type="password" placeholder="Contraseña" />

            <button className="btn">Ingresar</button>
            <p>¿Aun no tienes cuenta? <span className="span" onClick={()=>setTypeLog('register')}>Regístrate</span></p>
        </form>
    </div>
)
};

export default LoginContent