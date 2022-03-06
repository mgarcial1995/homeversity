import "./styles.sass";
import CarHeader from "../CarHeader";
const CoursesOnCar = (props) => {
  const { name, price, photo, amount, total } = props.course;

  return (
      <div className="course">
        <div className="product">
          <img className="course-photo" src={photo}></img>
          <div className="course-primary-info">
            <h1 className="course-name">{name}</h1>
            <p className="course-price">S/{price}</p>
          </div>
        </div>
        <div className="separator-1"></div>
        <p className="course-amount">{amount} </p>
        <div className="separator-2"></div>
        <p className="course-delete-button">X</p>
        <div className="separator-3"></div>
        <p className="course-total">{total}</p>
      </div>
  );
};

export default CoursesOnCar;
