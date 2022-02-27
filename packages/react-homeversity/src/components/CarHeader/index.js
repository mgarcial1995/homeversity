import "./styles.sass";
const CarHeader = (props) => {
  const headers = props.headers;
  return (
    <div className="course-header">
      {headers.map((header,i) => (
        <p className={header} key={i}>{header} </p>
      ))}
    </div>
  );
};

export default CarHeader;
