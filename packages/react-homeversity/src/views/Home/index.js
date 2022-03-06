import Mentores from "../../components/Mentores";
import Header from "../../components/Header";
import Increase from "../../components/Increase";
import courses_home from "../../courses_home";
import React from "react";
import Courses from "../../components/Courses";
import IntroducerCourse from "../../components/IntroducerCourse";

import "./styles.sass";

function Home() {
  return (
    <div>
      <Header />
      {/* <IntroducerCourse /> */}
      <main className='box1'>
        <div className='box2'>
          <strong>NUESTROS CURSOS</strong>
        </div>
        <section className='courses' id='courses'>
          {courses_home.map((elem) => {
            return <Courses key={elem.id} data={elem} />;
          })}
        </section>
      </main>
      <Increase />
      <Mentores />
    </div>
  );
}

export default Home;
