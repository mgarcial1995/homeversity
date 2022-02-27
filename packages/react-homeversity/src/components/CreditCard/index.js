import { useContext } from "react";
import { CreditCardContext } from "../../views/Carshop";
import "./styles.sass";

const CreditCard = (props) => {
  const { creditCardSelected, setSelectedCreditCard } =
    useContext(CreditCardContext);
  const { name, logo } = props.creditCard;

  const setSelected =(creditCardSelected) =>{
    return setSelectedCreditCard(creditCardSelected)
  }

  return (
    <>
      <div className="credit-card" onClick={() => {setSelected(props.index+1)}}>
        {name}
        {props.index + 1 === creditCardSelected ? (
          <div className="credit-card-selected"></div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default CreditCard;
