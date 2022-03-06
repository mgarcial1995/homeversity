import './styles.sass'
import { useState } from 'react';
import LoginImage from '../../assets/img/smiling.jpg'

import LoginContent from '../LoginContent'
import RegisterContent from '../RegisterContent'

let userinit = {name: '', lastName: '', date: '', gender: '', email: '', password: ''}
const LoginBox = () => {
    const [userRegister, setUserRegister] = useState(userinit)
    const [toggleState, setToggleState] = useState('register')
    return (
      <div className="login__container">
            <img className="imgContent" src={LoginImage} alt=""/>
            <LoginContent />
            {/* <RegisterContent /> */}
      </div>
    )
  };
  
  export default LoginBox