import "./styles.sass";
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import play from "../../assets/img/play-button.png"



function ClassCourse() {
  const [courseData, setCourseData] = useState({})
  const [urlCourse, setUrlCourse] = useState(null)
  const [loader, setLoader] = useState(true)
  const { id } = useParams();

  let getId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11)
      ? match[2]
      : null;
  }

  useEffect(async ()=>{
    await fetch('http://localhost:3001/api/courses/'+id, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => {
        return res.json();
      })
      .then(response =>  {
        console.log(response.data)
        setCourseData(response.data)
        let newlink=`//www.youtube.com/embed/${getId(response.data.class[0].link_video)}`
        setUrlCourse(newlink)
        setLoader(false)
      })
  },[])
  let changeLink =(link)=>{
    let newLink = `//www.youtube.com/embed/${getId(link)}`
    setUrlCourse(newLink)
    console.log(newLink)
  }
  return (
    
    <div className="class">
      { loader?
        <div>Cargando...</div>
        :
        <div>
          <p className="class_title">{courseData.name}</p>
          <div className="class_container">
            <div className="class_container_video">
              <iframe className='introducer_course_video_video' src={urlCourse} title="Curso" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
            <div className="class_container_modules">
            {courseData.class.map(el=>{
              return <div className="class_container_modules_module">
                <div>{el.title}</div>
                <div onClick={()=>changeLink(el.link_video)} ><img src={play} alt="play"></img></div>
                {/* <div>Play</div> */}
              </div>
            })}
          
          </div>
        </div>
        <hr />
          
          <div>
            <p className="class_subtitle">Descripción del curso</p>
            <p>{courseData.description}</p>
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
              <div className="class_teacher_info_avatar">
                <img className="class_teacher_info_avatar_img" src={courseData.teacher.photo}></img>
              </div>
              <div className="class_teacher_info_text">
                <div className="class_teacher_info_text_name">{courseData.teacher.name}</div>
                <div className="class_teacher_info_text_job">{courseData.teacher.description}</div>
              </div>
            </div>
          </div>
        </div>
      }
      
    </div>
  );
}

export default ClassCourse;