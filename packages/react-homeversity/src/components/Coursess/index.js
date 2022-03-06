import "./styles.sass";
import Carshop from "../../assets/img/shopcart.png";
import React, { useState, useContext } from "react";

let cutString = (str) =>{
  let newstring = str.slice(0, 195)
  return newstring+'...'
}
const Coursess = ({ data }) => {
  let star = [];
  let val = data.valoration ? data.valoration : data.stars
  if (val == 1) star = [1];
  if (val == 2) star = [1, 1];
  if (val == 3) star = [1, 1, 1];
  if (val == 4) star = [1, 1, 1, 1];
  if (val == 5) star = [1, 1, 1, 1, 1];
  return (
    <div>
      <div className="box-main">
        <div className="box-main_box-child-1">
          <img className="box-main_box-child-1_img" src={data.photo ? data.photo : data.img} />
        </div>
        <h2 className="box-main_box-child-1_h4 ">{data.name} </h2>
        <p className="box-main_box-child-1_p ">Por {data.teacher} </p>
        <p className="box-main_box-child-1_p"> {data.description ? data.description.length > 195 ? cutString(data.description) :data.description : data.about} </p>
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
          /> <strong>S/.{data.price}</strong>
          </p>
        </div>
      </div>
    </div>
  )
};

export default Coursess;
