import './styles.sass'
import { useState } from 'react';
import LoginImage from '../../assets/img/smiling.jpg'

import LoginContent from '../LoginContent'
import RegisterContent from '../RegisterContent'
import { OpenLoginContext } from '../../App';
import React, { useContext } from "react";

export const TypeLoginContext = React.createContext({})


let loginuser = {name: '', lastName: '', date: '', gender: '', email: '', password: ''}
let userinit = {name: '', lastName: '', date: '', gender: '', email: '', password: ''}
const LoginBox = () => {
    const [typeLog, setTypeLog] = useState("login");
    const [loginData, setLoginData] = useState({});
    const [registerData, setRegisterData] = useState({});
    const { openLogin, setOpenLogin } = useContext(OpenLoginContext);
    return (
      <div>
        <div className='background_login' onClick={()=>setOpenLogin(false)}>
        </div>
        <div className="login__container">
              <img className="imgContent" src={LoginImage} alt=""/>
              <TypeLoginContext.Provider value={{typeLog, setTypeLog}}>
              {
                typeLog === 'login' ? <LoginContent /> : <RegisterContent />
              }
              </TypeLoginContext.Provider>
        </div>
      </div>
    )
  };
  
  export default LoginBox