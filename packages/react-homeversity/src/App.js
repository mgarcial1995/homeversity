import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./views/Home";
import Carshop from "./views/Carshop";
import Courses from "./views/Courses";
import Premium from "./views/Premium";
import Programs from "./views/Programs";
import MyCourses from "./views/MyCourses";
import ClassCourse from "./views/ClassCourse";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginBox from "./components/LoginBox";
import "./App.css";
import InfoProgramPage from "./views/InfoProgramPage";
import InfoCoursePage from "./views/InfoCoursePage";
import ModalCardShop from "./components/ModalCardShop";

export const OpenLoginContext = React.createContext({});
export const UserDataContext = React.createContext({});
export const CardShopModal = React.createContext([]);
export const UserEnterContext = React.createContext({});

let user = {
  name: "",
  surname: "",
  bornDate: "",
  gender: "",
  carShop: [],
  typeUser: "",
  passWord: "",
  confirmPassword: "",
  email: "",
};
function App() {
  const routesNav = [
    { name: "CURSOS", url: "/courses" },
    { name: "PROGRAMAS", url: "/programs" },
    { name: "MEMBRESIA", url: "/premium" },
  ];
  const [openLogin, setOpenLogin] = useState(false);
  const [modalCard, setModalCard] = useState([]);
  const [userData, setUserData] = useState(user)
  const [userLogged, setUserLogged] = useState(null)

  let changeUserData = (event) => {
    let newuserdata = Object.assign({}, userData);
    newuserdata[event.target.name] = event.target.value;
    setUserData(newuserdata);
  };

  useEffect(()=>{
    let token = localStorage.getItem("token");
    setUserLogged(token?token:null)
    let sessionID = JSON.parse(localStorage.getItem("idSession"));
    if(sessionID){
      fetch(`http://localhost:3001/api/users/${sessionID}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }})
        .then(response => response.json())
        .then(data => {
          setUserLogged(data.userdata)
          console.log(data.userdata)
          setModalCard(data.userdata.typeUser.carshop)
        })
        .catch(err=>{
          console.log(err)
        })
    }
  },[])

  return (
    <div className="App">
      <UserEnterContext.Provider value={{userLogged, setUserLogged}}>
        <UserDataContext.Provider value={{userData, setUserData, changeUserData}}>
          <CardShopModal.Provider value = {{modalCard, setModalCard}}>
            <OpenLoginContext.Provider value={{ openLogin, setOpenLogin }}>
              <Navbar routes={routesNav} />
              {openLogin == true ? <LoginBox /> : ""}
            </OpenLoginContext.Provider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/premium" element={<Premium />} />
              <Route path="/carshop" element={<Carshop />} />
              <Route path="/mycourses" element={<MyCourses />} />
              <Route path="/class/:id" element={<ClassCourse />} />
              <Route path='/infoprogram' element={<InfoProgramPage />} />
              <Route path="/infocourse/:id" element={<InfoCoursePage />} />
              <Route path="/programs/infoprogram/:id" element={<InfoProgramPage />} />
            </Routes>
          </CardShopModal.Provider>
        </UserDataContext.Provider>
      </UserEnterContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
