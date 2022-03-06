import "./styles.sass";
import Carshop from "../../assets/img/shopcart.png";
import React, { useState, useContext } from "react";
import { OpenIntroCourse } from '../../views/Home';

const Coursess = ({ data }) => {
  let star = [];
  if (data.stars == 1) star = [1];
  if (data.stars == 2) star = [1, 1];
  if (data.stars == 3) star = [1, 1, 1];
  if (data.stars == 4) star = [1, 1, 1, 1];
  if (data.stars == 5) star = [1, 1, 1, 1, 1];
  const { showIntroCourse, setShowIntroCourse } = useContext(OpenIntroCourse);
  return (
    <div onClick={() => setShowIntroCourse(true)}>
      <div className="box-main">
        <div className="box-main_box-child-1">
          <img className="box-main_box-child-1_img" src={data.img} />
        </div>
        <h2 className="box-main_box-child-1_h4 ">{data.name} </h2>
        <p className="box-main_box-child-1_p ">Por {data.teacher} </p>
        <p className="box-main_box-child-1_p"> {data.about} </p>
        <div className="box-main_box-child-1_star">
          {star.map((el, i) => (
            <img key={i} src="./star.png" width={"10px"} height={"10px"} />
          ))}
        </div>
        <div className="box-main_box-child-1_price">
          <p className="box-main_box-child-1_price_value">
          <img
            className="box-main_box-child-1_price_value_carshop"
            width="15"
            src={Carshop}
            alt="Comprar"
          /> <strong>{data.price}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coursess;
