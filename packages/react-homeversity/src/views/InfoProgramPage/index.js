import InfoTag from "../../components/InfoTag";
import "./styles.sass";
function InfoProgramPage() {
  return (
    <div className="program-page">
      <header className="program-page-banner">
        <img
          className="program-page-banner-photo"
          src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ></img>
        {/* <button className="program-page-banner-button"></button> */}
      </header>
      <main className="program-page-main">
        <section className="program-page-main-section">
          <article className="program-page-main-section-about">
            <h1 className="program-page-main-section-about-tittle">
              Acerca del programa
            </h1>
            <p className="program-page-main-section-about-body">
              {" "}
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur,
            </p>
          </article>
          <article className="program-page-main-section-learning">
            <h1 className="program-page-main-section-learning-tittle">
              Aprendizaje esperado
            </h1>
          </article>
          <article className="program-page-main-section-courses">
            <h1 className="program-page-main-section-courses-tittle">
                Contenido
          </h1>
          </article> 
        </section>
        <aside className="program-page-main-tags">
          <InfoTag></InfoTag>
        </aside>
      </main>
    </div>
  );
}

export default InfoProgramPage;
