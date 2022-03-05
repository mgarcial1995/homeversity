import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Carshop from "./views/Carshop";
import Courses from "./views/Courses";
import Premium from "./views/Premium";
import Programs from "./views/Programs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginBox from "./components/LoginBox";
import { useState } from "react";
import "./App.css";

function App() {
  const routesNav = [
    { name: "CURSOS", url: "/courses" },
    { name: "PROGRAMAS", url: "/programs" },
    { name: "MEMBRESIA", url: "/premium" },
  ];

  const [typeLog, setTypeLog] = useState("login")
  const [loginData, setLoginData] = useState({})
  const [registerData, setRegisterData] = useState({})

  return (
    <div className="App">
      <Navbar routes={routesNav} />
      <LoginBox />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/programs' element={<Programs />} />
        <Route path='/premium' element={<Premium />} />
        <Route path='/carshop' element={<Carshop />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
