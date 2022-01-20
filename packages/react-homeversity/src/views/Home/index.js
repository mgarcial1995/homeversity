import Mentores from '../../components/Mentores'
import Header from '../../components/Header';
import Increase from "../../components/Increase";
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
    <Header/>
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
      <Increase />
      {/* CRECIMIENTO PROFESIONAL */}

      {/* APRENDE DE LA MANO */}

      {/* APRENDE DE LA MANO */}

    <Mentores />

      {/* FOOTER */}
    </div>
  );
}

export default Home;
