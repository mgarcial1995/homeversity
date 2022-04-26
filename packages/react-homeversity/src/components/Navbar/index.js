import "./styles.sass";
import LogoHeader from "../../assets/img/logo-header.png";
import Carshop from "../../assets/img/shopcart.png";
import User from "../../assets/img/user.png";
import { OpenLoginContext } from "../../App";
import React, { useContext, useState } from "react";
import ModalCardShop from "../ModalCardShop";
import { CardShopModal } from "../../App";
import { UserEnterContext } from '../../App'
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const { routes } = props;
  const { openLogin, setOpenLogin } = useContext(OpenLoginContext);
  const { modalCard, setModalCard } = useContext(CardShopModal);
  const { userLogged, setUserLogged } = useContext(UserEnterContext)
  const [modal, setModal]= useState(false)
  let navigate  = useNavigate()
  let closeSession =()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('idSession');
    setUserLogged(null)
    navigate('/')
  }
 
// const showModal = () => setModal(true)
  return (
    <div className="navbar">
      <div className="navbar_left">
        <Link to="/">
          <img className="navbar_left_logo" src={LogoHeader} alt="Logo" />
        </Link>
        <ul className="navbar_left_list">
          {routes.map((el, index) => {
            return (
              <li key={index}>
                <Link className="navbar_left_list_element" to={el.url}>
                  {el.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
     
      <div className="modal">
        {modal == true ? <ModalCardShop /> : ""}
      </div>
      
      <div className="navbar_right">
      {
        userLogged ? 
        <Link to="/mycourses" style={{"margin-right":"1rem","textDecoration":"none"}} className="navbar_right_name">Mis cursos</Link>
        : ''
      }
          <img
            className="navbar_right_carshop"
            width="100"
            src={Carshop}
            alt="Comprar"
            val
            onClick={() => setModal((prevModal) => !prevModal)}
          />
          <div style={{color: "#FFFFFF"}} >{modalCard.length}</div>
        {
          userLogged ? 
          <div className="navbar_right_name">
            <div className="navbar_right_name_dat">
              Hola, {userLogged.name} {userLogged.surname} 
              <div style={{"color":"#FFFFFF","textDecoration":"none"}} onClick={() =>closeSession()}>
              Cerrar sesión</div>
            </div>
            <img className="navbar_right_name_icon" src={User} alt="Comprar" />
          </div>
          
          :
          <div className="navbar_right_button" onClick={() => setOpenLogin(true)}>
            Ingresar
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
