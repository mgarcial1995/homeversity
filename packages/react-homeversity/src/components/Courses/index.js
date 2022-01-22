import React from "react";
import "./styles.sass";

const Courses = ({ data }) => {
  return (
    // {console.log(data)}
    <div>
      <div className="box-main">
        <div className="box-main_box-child-1"> 
        <img className="box-main_box-child-1_img" src = {data.img}/>
        </div>
        <h4 className="box-main_box-child-1_h4 "> {data.name} </h4>
        <p className="box-main_box-child-1_p "> {data.teacher} </p>
        <p className="box-main_box-child-1_p"> {data.about} </p>
        <p className="box-main_box-child-1_p"> starts : {data.stars} </p>
        <div className="box-main_box-child-1_price">
          <p className="box-main_box-child-1_price_value"><span>S./ </span>{data.price} </p>
        </div>
        
      </div>
      
    </div>
  );
};

export default Courses;
