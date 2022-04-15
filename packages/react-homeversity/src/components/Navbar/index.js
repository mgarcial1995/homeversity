import { Link } from "react-router-dom";
import "./styles.sass";
import LogoHeader from "../../assets/img/logo-header.png";
import Carshop from "../../assets/img/shopcart.png";
import { OpenLoginContext } from "../../App";
import React, { useContext, useState } from "react";
import ModalCardShop from "../ModalCardShop";
import { CardShopModal } from "../../App";

const Navbar = (props) => {
  const { routes } = props;
  const { openLogin, setOpenLogin } = useContext(OpenLoginContext);
  const { modalCard, setModalCard } = useContext(CardShopModal);
  const [modal, setModal]= useState(false)
 
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
        {/* <Link to="/carshop"> */}
          <img
            className="navbar_right_carshop"
            width="100"
            src={Carshop}
            alt="Comprar"
            val
            onClick={() => setModal((prevModal) => !prevModal)}
          />
          {/* <div className="length">
          <p>{modalCard.length}</p>
          </div> */}
        {/* </Link> */}

        <div className="navbar_right_button" onClick={() => setOpenLogin(true)}>
          Ingresar
        </div>
      </div>
    </div>
  );
};

export default Navbar;
