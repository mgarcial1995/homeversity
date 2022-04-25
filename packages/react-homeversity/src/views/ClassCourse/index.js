import "./styles.sass";
import {useState} from "react"
import {useParams} from "react-router-dom"
import play from "../../assets/img/play-button.png"

function ClassCourse() {
  return (
    <div className="class">
      <p className="class_title">Nombre de curso</p>
      <div className="class_container">
        <div className="class_container_video"></div>
        <div className="class_container_modules">
          <div className="class_container_modules_module">
            <div>Nombre de clase</div>
            <img src={play} alt="play" ></img>
            {/* <div>Play</div> */}
          </div>
        </div>
      </div>
      <hr />
      {/* <div className="class_subtitle">Descripción </div>
      <hr /> */}
      <div>
        <p className="class_subtitle">Descripción del curso</p>
        <p>Descripcion</p>
      </div>
      <div>
        <p className="class_subtitle">A quien va dirigido</p>
        <ul>
          <li>Estudiantes</li>
          <li>Emprendedores</li>
          <li>Empresarios</li>
        </ul>
      </div>
      <div>
        <p className="class_subtitle">Requisitos</p>
        <p>¡Ninguno! El nivel de conocimientos que obtendrás es elevado, pero no es necesario tener conocimientos técnicos previos</p>
      </div>
      <div className="class_teacher">
        <p className="class_subtitle">Sobre el docente</p>
        <div className="class_teacher_info">
          <div className="class_teacher_info_avatar">Photo teacher</div>
          <div className="class_teacher_info_text">
            <div className="class_teacher_info_text_name">name teacher</div>
            <div className="class_teacher_info_text_job">coment teacher</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassCourse;