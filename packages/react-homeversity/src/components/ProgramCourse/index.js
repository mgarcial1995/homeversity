import "./styles.sass";
const ProgramCourse = () => {
  return (
    <div className="programcourse">
      <img className="programcourse-photo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzmyLjORKt3NzRGN6b2r3NPs_jvMkh_Wa9Ep2Kt4ex27YpwakbMK5MeiWquDATLa0diyM&usqp=CAU"></img>
      <div className="programcourse-info">
        <h1 className="programcourse-info-tittle">Curso 1: Lorem Ipsum</h1>
        <div className="programcourse-info-separator"></div>
        <p className="programcourse-info-description">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard{" "}
        </p>
      </div>
    </div>
  );
};

export default ProgramCourse;
