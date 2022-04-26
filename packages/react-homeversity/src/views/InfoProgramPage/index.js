import InfoTag from "../../components/InfoTag";
import Learning from "../../components/Learning";
import ProgramCourse from "../../components/ProgramCourse";
import { useParams } from "react-router-dom";
import {useEffect, useState } from "react";
import "./styles.sass";


function InfoProgramPage() {
  const [Program, setProgram] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  console.log(id)
  useEffect(() => {
    fetch(`http://localhost:3001/api/programs/${id}`, {
      method: 'GET'
    })
      .then(res => {
        return res.json();
      })
      .then(response => {
        setProgram(response.data)
        setIsLoading(false)
      })
  }, []);
  const learning = Program.learning;
  const courses = Program.courses;
  const tags = [Program.category, Program.duration]

  return (
    <div className="program-page">
      <header className="program-page-banner">
        <img
          className="program-page-banner-photo"
          src={Program.photo}
        ></img>
        {/* <button className="program-page-banner-button"></button> */}
      </header>
      <main className="program-page-main">
        <section className="program-page-main-section">
          <h1 className="program-page-main-section-tittle">Programa: {Program.name}</h1> 
          <article className="program-page-main-section-about">
            <h1 className="program-page-main-section-about-tittle">
              Acerca del programa
            </h1>
            <p className="program-page-main-section-about-body">
              {Program.description}
            </p>
          </article>
          <article className="program-page-main-section-learning">
            <h1 className="program-page-main-section-learning-tittle">
              Aprendizaje esperado
            </h1>
            <div className="program-page-main-section-learning-learn">  
            {!isLoading && learning.length > 0 ? (learning.map((learn , i)=> (
              <Learning key={i} learn={learn} index={i} />
            ))) : "" }
            </div>
          </article>
          <article className="program-page-main-section-courses">
            <h1 className="program-page-main-section-courses-tittle">
              Contenido
            </h1>
            {!isLoading && courses.length > 0 ? (courses.map((course , i)=> (
              <ProgramCourse key={i} course={course} index={i} />
            ))) : "" }
          </article>
        </section>
        <aside className="program-page-main-tags">
            {!isLoading && tags.length > 0 ? (tags.map((tag , i)=> (
                  <InfoTag key={i} tag={tag} index={i} />
                ))) : "" }
        </aside>
      </main>
    </div>
  );
}

export default InfoProgramPage;
