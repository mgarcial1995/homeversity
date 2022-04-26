import "./styles.sass";
import Carshop from "../../assets/img/shopcart.png";
import React, { useState, useContext } from "react";
import { CardShopModal } from "../../App";
import { UserEnterContext } from "../../App";
import { Link } from "react-router-dom";
import InfoCoursePage from "../../views/InfoCoursePage"


let cutString = (str) => {
  let newstring = str.slice(0, 195);
  return newstring + "...";
};

const Coursess = ({ data }) => {
  const { modalCard, setModalCard } = useContext(CardShopModal);
  const { userLogged, setUserLogged } = useContext(UserEnterContext);
  let star = [];
  let val = data.valoration ? data.valoration : data.stars;
  if (val == 1) star = [1];
  if (val == 2) star = [1, 1];
  if (val == 3) star = [1, 1, 1];
  if (val == 4) star = [1, 1, 1, 1];
  if (val == 5) star = [1, 1, 1, 1, 1];

  const addCourseButton = async (data) => {
    let copyModal = [...modalCard];
    copyModal.push(data);
    setModalCard(copyModal);
    // console.log(userLogged.typeUser._id)
    const config = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(copyModal)
    };
    await fetch('http://localhost:3001/api/students/updatecarshop/'+userLogged.typeUser.userID, config)
      .then(res => {
        return res.json();
      })
      .then(response =>  {
        console.log(response.data)
      })
  };

  return (
    <div>
    
        <div className="box-main">
          <div className="box-main_box-child-1">
            <Link to={`/infocourse/${data.name}`}>
              <img
                className="box-main_box-child-1_img"
                src={data.photo ? data.photo : data.photo}
              />
            <InfoCoursePage datacourse={data}/>
            </Link>
          </div>
          <h2 className="box-main_box-child-1_h4 ">{data.name} </h2>
          <p className="box-main_box-child-1_p ">Por {data.teacher ? data.teacher.name : ""} </p>
          <p className="box-main_box-child-1_p">
            {" "}
            {data.description
              ? data.description.length > 195
                ? cutString(data.description)
                : data.description
              : data.about}{" "}
          </p>
          <div className="box-main_box-child-1_star">
            {star.map((el, i) => (
              <img key={i} src="./star.png" width={"10px"} height={"10px"} />
            ))}
          </div>

          <button
            className="box-main_box-child-1_price"
            onClick={() => addCourseButton(data)}
          >
            <p className="box-main_box-child-1_price_value">
              <img
                className="box-main_box-child-1_price_value_carshop"
                width="15"
                src={Carshop}
                alt="Comprar"
              />{" "}
              <strong>{data.price}</strong>
            </p>
          </button>
        </div>
      
    </div>
  );
};

export default Coursess;
