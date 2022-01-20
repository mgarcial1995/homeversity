import React from "react";
import "./styles.sass";

function Increase() {
  //   const data = [
  //     {
  //       img: "./imgs/img1.jpg",
  //       title: "Clases Online Grabadas",
  //       description:
  //         "Todas las clases son grabadas para que puedas verlas en el momento que prefieras",
  //     },
  //     {
  //       img: "./imgs/img2.jpg",
  //       title: "Acceso total a tu cuenta",
  //       description:
  //         "Por la compra de uno de nuestros cursos o programas, tendrás el acceso a este contenido para siempre",
  //     },
  //     {
  //       img: "./imgs/img3.jpg",
  //       title: "Obtén tu certificado al terminar tus cursos",
  //       description:
  //         "Tendrás la opción de descargar un certificado por cada curso que concluyas en nuestra plataforma",
  //     },
  //   ];

  return (
    <div className="increase">
      <hr className="increase_line" />
      <div className="increase_title">
        <h1>Aumenta tu crecimiento</h1>
        <h1>Profesional</h1>
      </div>

      <div className="increase_benefit">
        <img
          className="increase_benefit_img_left"
          src="./increase1.jpg"
          alt=""
          width={"550px"}
          height={"300px"}
        />
        <div className="increase_benefit_content_right">
          <h3 className="increase_benefit_content_right_title">
            Clases Online Grabadas
          </h3>
          <p className="increase_benefit_content_right_description">
            Todas las clases son grabadas para que puedas verlas en el momento
            que prefieras
          </p>
        </div>
      </div>

      <div className="increase_benefit">
        <div className="increase_benefit_content_left">
          <h3 className="increase_benefit_content_left_title">
            Clases Online Grabadas
          </h3>
          <p className="increase_benefit_content_left_description">
            Todas las clases son grabadas para que puedas verlas en el momento
            que prefieras
          </p>
        </div>
        <img
          className="increase_benefit_img_right"
          src="./increase2.png"
          alt=""
          width={"550px"}
          height={"300px"}
        />
      </div>

      <div className="increase_benefit">
        <img
          className="increase_benefit_img_left"
          src="./increase3.jpg"
          alt=""
          width={"700px"}
          height={"300px"}
        />
        <div className="increase_benefit_content_right">
          <h3 className="increase_benefit_content_right_title">
            Clases Online Grabadas
          </h3>
          <p className="increase_benefit_content_right_description">
            Todas las clases son grabadas para que puedas verlas en el momento
            que prefieras
          </p>
        </div>
      </div>
    </div>
  );
}

export default Increase;

// <img src="" />
//       <h1>Aumenta tu crecimiento Profesional</h1>
//       <div>
//         {data.map((data, index) => {
//           if ((index + 1) % 2 == 0) {
//             return (
//               <div key={index} className="Right">
//                 <div className="increase_content">
//                   <h1 className="increase_content_title">{data.title}</h1>
//                   <p className="increase_content_description">
//                     {data.description}
//                   </p>
//                 </div>
//                 <img className="increase_img" src={data.img} />
//               </div>
//             );
//           }
//           return (
//             <div key={index} className="Left">
//               <img className="increase_img" src={data.img} />
//               <div className="increase_content">
//                 <h1 className="increase_content_title">{data.title}</h1>
//                 <p className="increase_content_description">
//                   {data.description}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
