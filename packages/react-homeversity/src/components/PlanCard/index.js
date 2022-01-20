import "./styles.sass";
const PlanCard = (props) => {
  const {tittle, recommended, time, label, message, price} =props.plan;
  console.log(tittle)
    if(recommended){
        return (
            <div className="plan_card_recommended">
              <div className="top">
                <p className="tittle">{tittle}</p>
                <p className="label">{label}</p>
              </div>
              <div className="bot">
                <p className="time">{time}</p>
                <p className="message">{message}</p>
                <p className="price">{price}</p>
                <button className="button"> Obtener ya</button>
              </div>
            </div>
          );
    }
    return (
        <div className="plan_card">          
            <p className="tittle">{tittle}</p>          
            <p className="time">{time}</p>
            <p className="price">{price}</p>
            <button className="button"> Obtener ya</button>
        </div>
      );

 };

export default PlanCard;
