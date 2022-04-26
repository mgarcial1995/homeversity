import "./styles.sass";
const ProgramCourse = ({course , index}) => {
  return (
    <div className="programcourse">
      <img className="programcourse-photo" src={course.photo}></img>
      <div className="programcourse-info">
        <h1 className="programcourse-info-tittle">Curso {index+1}: {course.name}</h1>
        <div className="programcourse-info-separator"></div>
        <p className="programcourse-info-description">
          {course.description}
        </p>
      </div>
    </div>
  );
};

export default ProgramCourse;
