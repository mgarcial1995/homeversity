import Mentores from "../../components/Mentores";
import Header from "../../components/Header";
import Increase from "../../components/Increase";
import courses_home from "../../courses_home";
import Coursess from "../../components/Coursess";
import IntroducerCourse from "../../components/IntroducerCourse";
import React, { useState, useContext } from "react";

export const OpenIntroCourse = React.createContext({})
import "./styles.sass";

function Home() {
  
  const [showIntroCourse, setShowIntroCourse] = useState(false)
  return (
    <div>
      <Header />
        <OpenIntroCourse.Provider value={{showIntroCourse, setShowIntroCourse }}>
          {showIntroCourse == true ? <IntroducerCourse /> : ""}
          <main className='box1'>
            <div className='box2'>
              <strong>NUESTROS CURSOS</strong>
            </div>
              <section className='courses' id='courses'>
                {courses_home.map((elem,i) => {
                  return <Coursess key={elem.id} data={elem} />;
                })}
              </section>
          </main>
        </OpenIntroCourse.Provider>
      <Increase />
      <Mentores />
    </div>
  );
}

export default Home;