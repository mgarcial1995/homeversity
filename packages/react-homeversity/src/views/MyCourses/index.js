import "./styles.sass";
import download from '../../assets/img/download.png'
import {useState, useContext, useEffect} from "react"
import { UserEnterContext } from '../../App'

let allcourses = [
  {
    photo: "https://www.cocinayvino.com/wp-content/uploads/2020/04/123864572_m-e1588006506154.jpg",
    name:"Manual del aprendiz de cocinero",
    teacher: "Ulric Nielsen",
    to: ""
  },
  {
    photo: "https://www.cocinayvino.com/wp-content/uploads/2020/04/123864572_m-e1588006506154.jpg",
    name:"Manual del aprendiz de cocinero",
    teacher: "Ulric Nielsen",
    to: ""
  },
  {
    photo: "https://www.cocinayvino.com/wp-content/uploads/2020/04/123864572_m-e1588006506154.jpg",
    name:"Manual del aprendiz de cocinero",
    teacher: "Ulric Nielsen",
    to: ""
  },
  {
    photo: "https://www.cocinayvino.com/wp-content/uploads/2020/04/123864572_m-e1588006506154.jpg",
    name:"Manual del aprendiz de cocinero",
    teacher: "Ulric Nielsen",
    to: ""
  },
  {
    photo: "https://www.cocinayvino.com/wp-content/uploads/2020/04/123864572_m-e1588006506154.jpg",
    name:"Manual del aprendiz de cocinero",
    teacher: "Ulric Nielsen",
    to: ""
  },
]
function MyCourses() {
  const { userLogged, setUserLogged } = useContext(UserEnterContext)
  const [courses, setCourses] = useState([])
  useEffect(()=>{
    let sessionID = JSON.parse(localStorage.getItem("idSession"));
    if(sessionID){
      fetch(`http://localhost:3001/api/users/${sessionID}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }})
        .then(response => response.json())
        .then(data => {
          setCourses(data.userdata.typeUser.courses)
          console.log(data.userdata)
        })
        .catch(err=>{
          console.log(err)
        })
    }
    // setCourses(userLogged.typeUser.courses)
  },[])
  return (
    <div className="myCourses">
      <p className="myCourses_title">Mis cursos</p>
      <hr></hr>
      <div className="myCourses_container">
        <div className="myCourses_container_nav">
          <div className="myCourses_container_nav_item">Curso</div>
          <div className="myCourses_container_nav_item">Acceso</div>
          <div className="myCourses_container_nav_item">Progreso</div>
          <div className="myCourses_container_nav_item">Certificado</div>
          <div className="myCourses_container_nav_item"></div>
        </div>
        {courses.map(coursedata => {
          return (
          <div key={coursedata._id} className="myCourses_container_info">
            <div className="myCourses_container_info_name">
              <div className="myCourses_container_info_name_photo">
                <img className="myCourses_container_info_name_photo_img" src={coursedata.photo} alt="Cambio" ></img>
              </div>
              <div className="myCourses_container_info_name_text">
                <div className="myCourses_container_info_name_text_name">{coursedata.name}</div>
                <div className="myCourses_container_info_name_text_teacher">Profesor: {coursedata.teacher.name}</div>
              </div>
            </div>
            <div className="myCourses_container_info_access">Obtenido</div>
            <div className="myCourses_container_info_progress">0% visto</div>
            <div className="myCourses_container_info_certificate">
              <img src={download} alt="Cambio" ></img>
            </div>
            <div className="myCourses_container_info_viewcourse">
              Ver curso
            </div>
          </div>
          )
        })}
        

      </div>
    </div>
  );
}

export default MyCourses;