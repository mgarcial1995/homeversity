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
import ModalCardShop from "./components/ModalCardShop";

export const OpenLoginContext = React.createContext({});
export const CardShopModal = React.createContext([]);
function App() {
  const routesNav = [
    { name: "CURSOS", url: "/courses" },
    { name: "PROGRAMAS", url: "/programs" },
    { name: "MEMBRESIA", url: "/premium" },
  ];
  const [openLogin, setOpenLogin] = useState(false);
  const [modalCard, setModalCard] = useState([]);

  return (
    <div className="App">
      
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
        </Routes>
      </CardShopModal.Provider>
      <Footer />
    </div>
  );
}

export default App;
