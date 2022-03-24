import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./views/Home";
import Carshop from "./views/Carshop";
import Courses from "./views/Courses";
import Premium from "./views/Premium";
import Programs from "./views/Programs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginBox from "./components/LoginBox";
import "./App.css";

export const OpenLoginContext = React.createContext({})
export const UserDataContext = React.createContext({})
let user = {
  "name": "",
  "surname": "",
  "bornDate": "",
  "gender": "",
  "carShop": [],
  "typeUser": "",
  "passWord": "",
  "confirmPassword": "",
  "email": "",
  "premiumID": "",
  "initPremium": "",
  "finishPremium": "",
  "courses": [],
  "descriptTeacher": "",
  "jobTeacher": ""
}
function App() {
  const routesNav = [
    { name: "CURSOS", url: "/courses" },
    { name: "PROGRAMAS", url: "/programs" },
    { name: "MEMBRESIA", url: "/premium" },
  ];
  const [openLogin, setOpenLogin] = useState(false);
  const [userData, setUserData] = useState(user)

  let changeUserData = (event) => {
    let newuserdata = Object.assign({}, userData)
    newuserdata[event.target.name] = event.target.value
    setUserData(newuserdata)
    console.log(newuserdata)
  }

  return (
    <div className='App'>
      <UserDataContext.Provider value={{userData, setUserData, changeUserData}}>
        <OpenLoginContext.Provider value={{ openLogin, setOpenLogin }}>
          <Navbar routes={routesNav} />
          {
            openLogin == true ? <LoginBox /> : ""
          }
        </OpenLoginContext.Provider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/programs' element={<Programs />} />
          <Route path='/premium' element={<Premium />} />
          <Route path='/carshop' element={<Carshop />} />
        </Routes>
        <Footer />
      </UserDataContext.Provider>
    </div>
  );
}

export default App;
