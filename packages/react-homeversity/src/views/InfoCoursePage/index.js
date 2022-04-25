import { useParams } from "react-router-dom";
import InfoTag from "../../components/InfoTag";
import Learning from "../../components/Learning";
import ProgramCourse from "../../components/ProgramCourse";
import courses_home from "../../allCourses";
import "./styles.sass";
// import { useEffect } from "react";

function InfoCoursePage(props) {
  const { id } = useParams();

  let datos = courses_home.find((elem) => elem.name == id);

  return (
    <div className="course-page">
      <header className="course-page-banner">
        <h1 className="course-page-name">
          Curso de {datos ? datos.name : ""}
        </h1>
        <img
          className="course-page-banner-photo"
          src={datos ? datos.img : ""}
        />
        {/* <button className="program-page-banner-button"></button> */}
      </header>
      <main className="course-page-main">
        <section className="course-page-main-section">
          <article className="course-page-main-section-about">
            <h1 className="course-page-main-section-about-tittle">
              Descripcion del curso online
            </h1>
            <p className="course-page-main-section-about-body">
              {" "}
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur,
            </p>
          </article>
          <article className="course-page-main-section-learning">
            <h1 className="course-page-main-section-learning-tittle">
              ¿Qué voy a aprender?
            </h1>
            <Learning />
          </article>
          <article className="course-page-main-section-requirements">
            <h1 className="course-page-main-section-learning-tittle">
              ¿A quiénes está dirigido?
            </h1>
            <p className="course-page-main-section-about-body">
              Público en general
            </p>
            <h1 className="course-page-main-section-learning-tittle">
              Requisitos
            </h1>
            <p className="course-page-main-section-about-body">Ninguno</p>
          </article>
          <article className="course-page-main-section-courses">
            <h1 className="course-page-main-section-courses-tittle">
              Contenido
            </h1>
            <ProgramCourse />
          </article>
          <article className="course-page-main-section-requirements">
            <h1 className="teacher">Sobre nuestro experto</h1>
            <h2 className="teacher-name">{datos ? datos.teacher : ""}</h2>
            <p className="teacher-name-detail">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis"</p>
          </article>
        </section>

        {/* <aside className="course-page-main-tags">
          <InfoTag></InfoTag>
        </aside> */}
      </main>
    </div>
  );
}

export default InfoCoursePage;
