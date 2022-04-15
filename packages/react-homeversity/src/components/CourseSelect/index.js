import React, {useContext} from "react";
import "./styles.sass";
import { CardShopModal } from "../../App";

function CourseSelect(props) {
  const { modalCard, setModalCard } = useContext(CardShopModal);

  const deleteCourse = () =>{
    let copyModal = [...modalCard];
    copyModal.splice(props.indexArray, 1)
    setModalCard(copyModal);
  
  }

  return (
    <div className="container1-modal">
      <hr color="#050530" size="20" />
      <div className="close">
        <button className="deleteCourse" onClick={()=>deleteCourse()}>X</button>
      </div>
      <div className="container1-modal-photo">
        <img src={props.val.img} width={"150px"} height={"100px"} />
        <div className="container1-modal-photo-teacher">
          <h1>{props.val.name}</h1>
          <h2>{props.val.teacher}</h2>
        </div>
      </div>
      <div className="container1-modal-photo-teacher-price">
        <h3>{props.val.price}</h3>
      </div>
    </div>
  );
}

export default CourseSelect;
