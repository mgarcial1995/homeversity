import ProgressBar from "../../components/ProgressBar";
import CoursesOnCar from "../../components/CoursesOnCar";
import CarHeader from "../../components/CarHeader";
import PurchaseSummary from "../../components/PurchaseSummary";
import PaymentButton from "../../components/PaymentButton";
import CreditCard from "../../components/CreditCard";
import VisaForm from "../../components/VisaForm";
import PurchasedCourse from "../../components/PurchasedCourse";
import React, { useState } from "react";
import "./styles.sass";

export const StepContext = React.createContext({});
export const PaymentButtonContext = React.createContext({});
export const CreditCardContext = React.createContext({});

function Carshop() {
  const headers = ["Producto", "Cantidad", "Eliminar", "Total"];
  const steps = [
    "Carrito de compras",
    "Detalle de compras",
    "Compra realizada",
  ];
  const [currentStep, updateCurrentStep] = useState(1);
  const [paymentButtonSelected, setSelectedButton] = useState(1);
  const [creditCardSelected, setSelectedCreditCard] = useState(1);

  const updateCurrent = (step) => {
    return updateCurrentStep(step);
  };
  const coursesOnCar = [
    {
      name: "Curso 1",
      price: 100,
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzmyLjORKt3NzRGN6b2r3NPs_jvMkh_Wa9Ep2Kt4ex27YpwakbMK5MeiWquDATLa0diyM&usqp=CAU",
      amount: 1,
      total: 100,
    },
    {
      name: "Curso 2",
      price: 100,
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzmyLjORKt3NzRGN6b2r3NPs_jvMkh_Wa9Ep2Kt4ex27YpwakbMK5MeiWquDATLa0diyM&usqp=CAU",
      amount: 1,
      total: 100,
    },
    {
      name: "Curso 3",
      price: 100,
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzmyLjORKt3NzRGN6b2r3NPs_jvMkh_Wa9Ep2Kt4ex27YpwakbMK5MeiWquDATLa0diyM&usqp=CAU",
      amount: 1,
      total: 100,
    },
  ];

  const paymentMethods = ["Tarjeta", "Paypal", "Yape"];
  const creditCardList = [
    {
      name: "Visa",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzmyLjORKt3NzRGN6b2r3NPs_jvMkh_Wa9Ep2Kt4ex27YpwakbMK5MeiWquDATLa0diyM&usqp=CAU",
    },
    {
      name: "MasterCard",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzmyLjORKt3NzRGN6b2r3NPs_jvMkh_Wa9Ep2Kt4ex27YpwakbMK5MeiWquDATLa0diyM&usqp=CAU",
    },
  ];

  const purchasedCourses = [
    {
      name: "Curso 1",
      price: 100,
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzmyLjORKt3NzRGN6b2r3NPs_jvMkh_Wa9Ep2Kt4ex27YpwakbMK5MeiWquDATLa0diyM&usqp=CAU",
      amount: 1,
      total: 100,
    },
    {
      name: "Curso 2",
      price: 100,
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzmyLjORKt3NzRGN6b2r3NPs_jvMkh_Wa9Ep2Kt4ex27YpwakbMK5MeiWquDATLa0diyM&usqp=CAU",
      amount: 1,
      total: 100,
    }
  ];

  const renderSwitchCreditCardForms = (creditCardSelected) => {
      switch(creditCardSelected) {
        case 1: 
          return (
            <VisaForm/>
          )
        case 2:
          return (
            "MasterCardForm"
          )
        default:
          return ""
      }
  }

  const renderSwitchPaymentMethods = (paymentButtonSelected) => {
    switch (paymentButtonSelected) {
      case 1:
        return (
          <>
          <div className="credit-cards-container">
            <CreditCardContext.Provider
              value={{ creditCardSelected, setSelectedCreditCard }}
            >
              {creditCardList.map((creditCard, i) => (
                <CreditCard key={i} creditCard={creditCard} index={i} />
              ))}
            </CreditCardContext.Provider>
          </div>
          <div className="credit-card-horizontal-line"></div>
          {renderSwitchCreditCardForms(creditCardSelected)}
          </>
        );
      default:
        return "";
    }
  };

  const renderSwitchStep = (currentStep) => {
    switch (currentStep) {
      case 1:
        return (
          <div className="courses-container">
            <CarHeader headers={headers} />
            {coursesOnCar.map((course, i) => (
              <CoursesOnCar key={i} course={course} />
            ))}
          </div>
        );
      case 2:
        return (
          <div className="payment-container">
            <div className="left">
              <div className="payment-buttons-container">
                <PaymentButtonContext.Provider
                  value={{ paymentButtonSelected, setSelectedButton }}
                >
                  {paymentMethods.map((paymentMethod, i) => (
                    <PaymentButton key={i} index={i} label={paymentMethod} />
                  ))}
                </PaymentButtonContext.Provider>
              </div>
              {renderSwitchPaymentMethods(paymentButtonSelected)}
            </div>
            <div className="payment-separator"></div>
            <div className="right">
              <div className="purchase-summary">
                <PurchaseSummary courses={coursesOnCar} />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="sale-completed">
            <h1 className="sale-completed-tittle">¡COMPRA EXITOSA!</h1>
            <p1 className="sale-completed-mensagge">Felicidades nameUser has adquirido los cursos: </p1>
            {purchasedCourses.map((purchasedCourse) => (
              <PurchasedCourse purchasedCourse={purchasedCourse}/>
            ))}
          </div>
        );
      default:
        return "";
    }
  };

  return (
    <div className="carshop-container">
      <StepContext.Provider value={{ currentStep }}>
        <ProgressBar steps={steps} />
      </StepContext.Provider>
      {renderSwitchStep(currentStep)}
      <button
        className="next-step"
        onClick={() => updateCurrent(currentStep + 1)}
      >
        FINALIZAR COMPRA
      </button>
    </div>
  );
}

export default Carshop;
