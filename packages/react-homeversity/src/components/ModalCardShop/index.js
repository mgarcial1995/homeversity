import React, { useContext } from "react";
import "./styles.sass";
import CourseSelect from "../CourseSelect";
import { CardShopModal } from "../../App";

function ModalCardShop() {
  const { modalCard, setModalCard } = useContext(CardShopModal);

  
  let price = "";
  let total = 0;
  if (modalCard.length > 0) {
    for (let i = 0; i < modalCard.length; i++) {
      price = modalCard[i].price.slice(3, 9);
      total += parseInt(price);
    }
  }

  // let total = list.reduce((a, b) => a + b.price, 0);

  return (
    <>
      <div className="container-modal">
        <p className="sumaryCar">Resumen de carrito ( {modalCard.length} items )</p>
        
        <div className="container-modal-box">
          {modalCard.length > 0
            ? modalCard.map((el, id) => {
                return <CourseSelect key={id} val={el} indexArray={id}/>;
              })
            : ""}
            <hr color= "#050530" size= "20" />
        </div>
         <p className="total">
          Total <spam>S/. {total}</spam>
        </p>
        <div className="detailShoping">
        {/* <Link to="/carshop"> */}
         <button className="detailShoping-button"> Ir a detalle de compra </button>
         {/* </Link> */}
        </div>
      </div>
    </>
  );
}

export default ModalCardShop;
