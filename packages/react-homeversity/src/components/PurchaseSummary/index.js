import "./styles.sass";
const PurchaseSummary = ({ courses }) => {
  return (
    <>
      <h1 className="summary-tittle">Resumen de compra</h1>
      <div className="top">
        {courses.map((course) => (
          <div className="summary-course-container">
            <p className="summary-course-name">{course.name}</p>
            <p className="summary-course-price">S/{course.price}</p>
          </div>
        ))}
      </div>
      <div className="summary-separator"></div>
      <div className="bot">
        <p className="summary-total-tittle">Total</p>
        <p className="summary-total">
          S/{courses.reduce((a, b) => Number(a) + Number(b.price), 0)}
        </p>
      </div>
      <div className="summary-separator"></div>
    </>
  );
};

export default PurchaseSummary;
