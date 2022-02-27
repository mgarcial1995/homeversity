import "./styles.sass"
const VisaForm = () => {
  return (
    <form className="visa-card-form">
      <input className="visa-card-owner" type="text" placeholder="Nombres y Apellidos" />
      <input className="visa-card-number" type="text" placeholder="Número de la tarjeta"  />
      <div className="flex">
        <input className="visa-card-expiration" type="text" placeholder="Fecha de vencimiento" />
        <input className="visa-card-expiration-aux" type="text" placeholder="" />
        <input className="visa-card-cod" type="text" placeholder="CVC/CVV" />
      </div>
      <input className="email" type="text" placeholder="Correo electrónico" />
    </form>
  );
};

export default VisaForm;
