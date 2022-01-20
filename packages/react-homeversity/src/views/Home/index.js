import courses_home from "../../courses_home";
import React from "react";
import Courses from "../../components/Courses";
import "./styles.sass"

function Home() {
  
  return (
    <div>
      {/* NAVBAR */}

      {/* NAVBAR */}

      {/* HEADER */}

      {/* HEADER */}

      {/* NUESTROS CURSOS */}

      <main className="box1">
       
        
        <div className="box2"> <strong>NUESTROS CURSOS</strong></div>
       
        <section className="courses" id="courses">
       
          {courses_home.map((elem) => {
            
            return <Courses key = {elem.id} data={elem} />
          
          })
          }
        </section>
        </main>
      


      {/* NUESTROS CURSOS */}

      {/* CRECIMIENTO PROFESIONAL */}

      {/* CRECIMIENTO PROFESIONAL */}

      {/* APRENDE DE LA MANO */}

      {/* APRENDE DE LA MANO */}

      {/* FOOTER */}

      {/* FOOTER */}
    </div>
  );
}

export default Home;
