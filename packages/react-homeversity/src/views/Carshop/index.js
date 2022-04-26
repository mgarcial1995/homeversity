import ProgressBar from "../../components/ProgressBar";
import CoursesOnCar from "../../components/CoursesOnCar";
import CarHeader from "../../components/CarHeader";
import PurchaseSummary from "../../components/PurchaseSummary";
import PaymentButton from "../../components/PaymentButton";
import CreditCard from "../../components/CreditCard";
import VisaForm from "../../components/VisaForm";
import PurchasedCourse from "../../components/PurchasedCourse";
import React, { useContext, useState, useEffect } from "react";
import { UserEnterContext } from "../../App";
import { Link } from 'react-router-dom';
import "./styles.sass";
import { CardShopModal } from "../../App";

export const StepContext = React.createContext({});
export const PaymentButtonContext = React.createContext({});
export const CreditCardContext = React.createContext({});

function Carshop() {
  const headers = ["Producto", "Total"];
  const steps = [
    "Carrito de compras",
    "Detalle de compras",
    "Compra realizada",
  ];
  const lastStep = steps.length;
  const [currentStep, updateCurrentStep] = useState(1);
  const [paymentButtonSelected, setSelectedButton] = useState(1);
  const [creditCardSelected, setSelectedCreditCard] = useState(1);
  const [carCourses, setCarCourses] = useState([])
  const { userLogged, setUserLogged } = useContext(UserEnterContext);
  const { modalCard, setModalCard } = useContext(CardShopModal);

  useEffect(async () => {
    let sessionID = JSON.parse(localStorage.getItem("idSession"));
    if(sessionID){
      await fetch(`http://localhost:3001/api/users/${sessionID}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }})
        .then(response => response.json())
        .then(response => {
          setCarCourses(response.userdata.typeUser.carshop)
          console.log(response.userdata.typeUser.carshop,"dataaaaaaa")
        })
        .catch(err=>{
          console.log(err)
        })
    }
  },[])
  const updateCurrent = (step) => {
    if(step === 3){
      const config = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({hola: "holaa"})
      };
      fetch('http://localhost:3001/api/students/buycourse/'+userLogged.typeUser.userID, config)
        .then(res => {
          return res.json();
        })
        .then(response =>  {
          console.log(response.data)
          // setCarCourses([])
        })
    }
    return updateCurrentStep(step);
  };
  const goCourse = () => {
    setModalCard([])
  }
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
      logo: "./visa_logo.png",
    },
    {
      name: "MasterCard",
      logo: "./mastercard_logo.png",
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
    },
  ];

  const renderSwitchCreditCardForms = (creditCardSelected) => {
    switch (creditCardSelected) {
      case 1:
        return <VisaForm />;
      case 2:
        return <VisaForm />;
      default:
        return "";
    }
  };

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
          <>
            <div className="courses-container">
              <CarHeader headers={headers} />
              {carCourses.map((course, i) => (
                <CoursesOnCar key={i} course={course} />
              ))}
            </div>
            <button
              className="next-step"
              onClick={() => updateCurrent(currentStep + 1)}
            >
              Siguiente
            </button>
          </>
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
              <button
                className="confirm-purchase-button"
                onClick={() => updateCurrent(currentStep + 1)}
              >
                Finalizar compra
              </button>
            </div>
            <div className="payment-separator"></div>
            <div className="right">
              <div className="purchase-summary">
                <PurchaseSummary courses={carCourses} />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <>
            <div className="sale-completed">
              <h1 className="sale-completed-tittle">¡COMPRA EXITOSA!</h1>
              <p1 className="sale-completed-mensagge">
                Felicidades {userLogged.name} has adquirido los cursos:{" "}
              </p1>
              {carCourses.map((purchasedCourse) => (
                <PurchasedCourse purchasedCourse={purchasedCourse} />
              ))}
            </div>
            <Link to="/courses" onClick={()=>goCourse()}>
            <button
              className="sale-completed-button"
            >
              Ir a Mis Cursos
            </button>
            </Link>
          </>
        );
      default:
        return "";
    }
  };

  return (
    <div className="carshop-container">
      <StepContext.Provider value={{ currentStep, lastStep }}>
        <ProgressBar steps={steps} />
      </StepContext.Provider>
      {renderSwitchStep(currentStep)}
    </div>
  );
}

export default Carshop;
