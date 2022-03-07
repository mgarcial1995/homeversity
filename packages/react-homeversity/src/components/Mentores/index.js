import React from "react";
import "./styles.sass";

function Mentores() {
  const mentors = [
    {
      src: "./perfil_1.png",
      work: "CARPINTERIA AVANZADA",
    },
    {
      src: "./perfil_2.png",
      work: "PINTURA ARTÍSTICA",
    },
    {
      src: "./perfil_4.png",
      work: "ESCULTURA EN BARRO",
    },
  ];
  return (
    <div className='mentors'>
      <h1 className='mentors_title'>
        APRENDE DE LA MANO CON <br /> LOS MEJORES MENTORES
      </h1>
      <div className='mentors_section'>
        {mentors.map((mentor,i) => {
          return <div key={i} className='mentors_section_mentor'>
            <div className='mentors_section_mentor_img'>
              <img src={mentor.src} alt={mentor.work} />
            </div>
            <h3 className='mentors_section_mentor_title'>
              {mentor.work}
            </h3>
          </div>;
        })}
      </div>
      <div></div>
    </div>
  );
}

export default Mentores;
