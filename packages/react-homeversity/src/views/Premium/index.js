import PlanCard from "../../components/PlanCard";
import "./styles.sass";

function Premium() {
  const plans = [
    {
      id: 1,
      recommended: false,
      tittle: "Mensual",
      time: "1 mes",
      label: "",
      message: "",
      price: "$9/mes",
    },
    {
      id: 2,
      tittle: "Anual",
      recommended: true,
      time: "12 meses",
      label: "21% OFF",
      message: "Ahorra hasta $28",
      price: "$90/anual",
    },
    {
      id: 3,
      tittle: "Semestral",
      recommended: false,
      time: "6 mes",
      label: "",
      message: "",
      price: "$40/mes",
    },
  ];
  return (
    <div>
      <div className="header_premium">
        <p className="header_tittle">MEMBRESÍA</p>
        <p className="header_message">¡OBTENLA AHORA MISMO!</p>
      </div>
      <div className="cards_container">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
}
export default Premium;
