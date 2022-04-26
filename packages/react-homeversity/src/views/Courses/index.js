import React, {useState, useEffect} from "react";
import "./styles.sass";
import Coursess from "../../components/Coursess";
import allCourses from "../../allCourses";


function Courses() {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/api/courses/', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => {
        return res.json();
      })
      .then(response =>  {
        console.log(response.courses)
        setCourses(response.courses)})
  }, [])
  return (
    <div>
    
      <div className="box2">
        <div className="seeker">
          <p className="text0">
            <strong> Search in Homeversity </strong>
            <img className="lupa" src="./lupa.png" />
          </p>
        </div>
        <div className="text1">
          <h1>Contenido Homeversity</h1>
        </div>
      </div>
    <hr color= "black" size= "1"/>
      <div className="container-ppal">
        <div className="container">
          <div className="container_text2">
            <h2>
              Ver todo
              <img className="arrow" src="./arrow_down.png" />
            </h2>
          </div>
        </div>
        <div className="container_text3">
          <h2>
            <strong> Restablecer filtros</strong>
          </h2>
        </div>
      </div>
    <hr color= "black" size= "1"/>
    <section className="box_box2">
          {courses.map((course) => {
            return <Coursess key={course.id} data={course} />;
          })}
    </section>
  </div>
  );
}

export default Courses;
