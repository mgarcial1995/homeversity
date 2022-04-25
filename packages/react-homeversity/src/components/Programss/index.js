import "./styles.sass";
import Carshop from "../../assets/img/shopcart.png";
import React, { useState, useContext } from "react";

const Programss = ({program}) => {
  console.log(program)
  return (
    <>
      <div className="program-card">
        <div className="photo-card-photo">
        <img
          className="program-card-photo-src"
          src={program.photo}
        />
        </div>
        <div className="program-card-info">
          <h2 className="program-card-info-name"> {program.name} </h2>
          <div className="program-card-info-separator"></div>
          <p className="program-card-info-duration">
            <strong className="program-card-info-duration-tittle">Duración: </strong> {program.duration}
          </p>
          <p className="program-card-info-include">
            <strong className="program-card-info-include-tittle">Incluye: </strong> {program.courses.length} cursos
          </p>
        </div>
      </div>
    </>
  );
};

export default Programss;
