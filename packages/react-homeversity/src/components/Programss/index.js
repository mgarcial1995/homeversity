import "./styles.sass";
import Carshop from "../../assets/img/shopcart.png";
import React, { useState, useContext } from "react";

const Programss = ({}) => {
  return (
    <>
      <div className="program-card">
        <div className="photo-card-photo">
        <img
          className="program-card-photo-src"
          src={
            "https://d2qc4bb64nav1a.cloudfront.net/cdn/13/images/curso-online-electricidad-y-electronica_l_primaria_1_1527681570.jpg"
          }
        />
        </div>
        <div className="program-card-info">
          <h2 className="program-card-info-name"> Excel avanzado </h2>
          <div className="program-card-info-separator"></div>
          <p className="program-card-info-duration">
            <strong className="program-card-info-duration-tittle">Duración: </strong> 1 Mes y medio (Dedicacion 5 horas por semana)
          </p>
          <p className="program-card-info-include">
            <strong className="program-card-info-include-tittle">Incluye: </strong>4 cursos
          </p>
        </div>
      </div>
    </>
  );
};

export default Programss;
