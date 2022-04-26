import "./styles.sass";
import LoginImage from "../../assets/img/smiling.jpg";
import { useState, useContext } from "react";
import { TypeLoginContext } from "../LoginBox";
import { UserDataContext } from "../../App";
let genders = ["Masculino", "Femenino", "No contestar"];
const RegisterContent = ({ setOpenLogin }) => {
  const { typeLog, setTypeLog } = useContext(TypeLoginContext);
  const { userData, setUserData, changeUserData } = useContext(UserDataContext);

  let createUser = async (event) => {
    userData.typeUser = "student";
    event.preventDefault();
    await fetch("http://localhost:3001/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log(data);
        setOpenLogin(false);
        console.log(data);
      });
  };

  return (
    <div className='loginContent'>
      <h2 className='title'>Registro</h2>
      <form className='formContent'>
        <div className='formContent_subinputs'>
          <input
            value={userData.name}
            className='input'
            type='text'
            placeholder='Nombres'
            name='name'
            onChange={changeUserData}
          />
          <input
            value={userData.surname}
            className='input'
            type='text'
            placeholder='Apellidos'
            name='surname'
            onChange={changeUserData}
          />
        </div>
        <div className='formContent_subinputs'>
          <input
            value={userData.bornDate}
            className='input'
            type='date'
            placeholder='Fecha de nacimiento'
            name='bornDate'
            onChange={changeUserData}
          />
          <select
            value={userData.gender}
            className='input'
            placeholder='Género'
            name='gender'
            onChange={changeUserData}
          >
            {userData.gender !== "" ? (
              ""
            ) : (
              <option value={""}>Seleccionar..</option>
            )}
            {genders.map((e, i) => {
              return (
                <option value={e} key={i}>
                  {e}
                </option>
              );
            })}
          </select>
        </div>
        <input
          value={userData.email}
          className='input'
          type='text'
          placeholder='Correo de registro'
          name='email'
          onChange={changeUserData}
        />
        <input
          value={userData.passWord}
          className='input'
          type='password'
          placeholder='Contraseña'
          name='passWord'
          onChange={changeUserData}
        />
        <input
          value={userData.confirmPassword}
          className='input'
          type='password'
          placeholder='Repetir ontraseña'
          name='confirmPassword'
          onChange={changeUserData}
        />
        <button onClick={(e) => createUser(e)} className='btn'>
          Crear cuenta
        </button>
        <p>
          ¿Ya tienes cuenta?{" "}
          <span className='span' onClick={() => setTypeLog("login")}>
            Inicia sesión
          </span>
        </p>
      </form>
    </div>
  );
};

export default RegisterContent;
