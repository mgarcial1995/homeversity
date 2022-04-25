import './styles.sass'
import LoginImage from '../../assets/img/smiling.jpg'
import { useState, useContext} from 'react';
import {TypeLoginContext} from '../LoginBox'
import {UserEnterContext} from '../../App'
const LoginContent = ({setOpenLogin}) => {
    const {typeLog, setTypeLog} = useContext(TypeLoginContext)
    const {userLogged, setUserLogged} = useContext(UserEnterContext)
    const [userLog, setUserLog] = useState({email:'martingarcial.1995@gmail.com', password:'123'})

    let singinUser = async (event) => {
        // console.log(userLog)
        event.preventDefault()
        await fetch('http://localhost:3001/api/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userLog)})
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setOpenLogin(false)
            setUserLogged(data.userdata)
            console.log("data",data.userdata)
            localStorage.setItem("token", JSON.stringify(data.token))
            localStorage.setItem("idSession", JSON.stringify(data.userdata.id))
        })
        .catch(err=>{
            console.log(err)
        })
    }
return (
    <div className="loginContent">
        <h2 className="title">Iniciar Sesión</h2>
        <form className="formContent" >
            <input value={userLog.email} onChange={(e)=>setUserLog({...userLog, email: e.target.value})} className="input" type="text" placeholder="Correo de registro" />
            <input value={userLog.password} onChange={(e)=>setUserLog({...userLog, password: e.target.value})} className="input" type="password" placeholder="Contraseña" />

            <button onClick={(e)=>singinUser(e)} className="btn">Ingresar</button>
            <p>¿Aun no tienes cuenta? <span className="span" onClick={()=>setTypeLog('register')}>Regístrate</span></p>
        </form>
    </div>
)
};

export default LoginContent