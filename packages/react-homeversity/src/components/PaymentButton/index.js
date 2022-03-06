import React, { useContext, useEffect } from "react";
import { PaymentButtonContext } from "../../views/Carshop";
import "./styles.sass";

const PaymentButton = (props) => {
  const { paymentButtonSelected, setSelectedButton } =
    useContext(PaymentButtonContext);
  const selectButton = (selectedButton) => {
    return setSelectedButton(selectedButton);
  };

  return (
    <button
      className={
        "buttonPayment" +
        (props.index+1 === paymentButtonSelected ? "-selected" : "")
      }
      onClick={() => {
        selectButton(props.index+1);
      }}
    >
      {props.label}
    </button>
  );
};

export default PaymentButton;
