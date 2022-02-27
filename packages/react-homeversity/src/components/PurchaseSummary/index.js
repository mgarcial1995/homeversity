import "./styles.sass";
const PurchaseSummary = ({ courses }) => {
  return (
    <>
      <h1 className="summary-tittle">Resumen de compra</h1>
      {courses.map((course) => (
        <p className="summary-course">
          {course.name} {course.price}
        </p>
      ))}
      <div className="summary-separator"></div>
      <p className="summary-total-tittle">Total</p>
      <p>
        {courses.map((course) => {
          let total = 0;
          return course.price * course.amount;
        })}
      </p>
    </>
  );
};

export default PurchaseSummary;
