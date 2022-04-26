import Mentores from "../../components/Mentores";
import Header from "../../components/Header";
import Increase from "../../components/Increase";
import courses_home from "../../courses_home";
import Coursess from "../../components/Coursess";
import IntroducerCourse from "../../components/IntroducerCourse";
import React, { useState, useContext, useEffect } from "react";
import {CardShopModal} from "../../App"

export const OpenIntroCourse = React.createContext({})
import "./styles.sass";

function Home() {
  
  const [showIntroCourse, setShowIntroCourse] = useState(false)
  const [dataCourse, setDataCourse] = useState({})
  const [listCourses, setListCourses] = useState([])
  const {modalCard, setModalCard} = useContext(CardShopModal)
 
  
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
        setListCourses(response.courses)})
  }, []);
  
  let displayDataCourse = (id) =>{
    let courseSelect = listCourses.find(el=> id === el._id)
    setDataCourse(courseSelect)
    setShowIntroCourse(true)
  }

  return (
    <div>
      <Header />
        <OpenIntroCourse.Provider value={{showIntroCourse, setShowIntroCourse}}>
          {showIntroCourse == true ? <IntroducerCourse courseData={dataCourse}/> : ""}
          <main className='box1'>
            <div className='box2'>
              <strong>NUESTROS CURSOS</strong>
            </div>
              <section className='courses' id='courses'>
                {listCourses.map((elem,i) => {
                  return <div key={i} onClick={()=>displayDataCourse(elem._id)}>
                    <Coursess key={elem._id} data={elem} />
                    </div>
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