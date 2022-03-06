import React from "react";
import "./styles.sass";
import Coursess from "../../components/Coursess";
import allCourses from "../../allCourses";

function Courses() {
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
          {allCourses.map((course) => {
            return <Coursess key={course.id} data={course} />;
          })}
    </section>
  </div>
  );
}

export default Courses;
