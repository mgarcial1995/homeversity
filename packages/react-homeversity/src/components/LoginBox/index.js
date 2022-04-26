import './styles.sass'
import { useState } from 'react';
import LoginImage from '../../assets/img/smiling.jpg'
import student from '../../assets/img/stu.png'

import LoginContent from '../LoginContent'
import RegisterContent from '../RegisterContent'
import { OpenLoginContext } from '../../App';
import React, { useContext } from "react";

export const TypeLoginContext = React.createContext({})


let loginuser = {name: '', lastName: '', date: '', gender: '', email: '', password: ''}
let userinit = {name: '', lastName: '', date: '', gender: '', email: '', password: ''}
const LoginBox = () => {
    const [typeLog, setTypeLog] = useState("login");
    const { openLogin, setOpenLogin } = useContext(OpenLoginContext);
    return (
      <div>
        <div className='background_login' onClick={()=>setOpenLogin(false)}>
        </div>
        <div className="login__container">
              <img className="imgContent" src={student} alt=""/>
              <TypeLoginContext.Provider value={{typeLog, setTypeLog}}>
              {
                typeLog === 'login' ? <LoginContent setOpenLogin={setOpenLogin} /> : <RegisterContent setOpenLogin={setOpenLogin} />
              }
              </TypeLoginContext.Provider>
        </div>
      </div>
    )
  };
  
  export default LoginBox