import React, { useContext } from "react";
import "./styles.sass";
import { CardShopModal } from "../../App";

function CourseSelect(props) {
  const { modalCard, setModalCard } = useContext(CardShopModal);

  const deleteCourse = () => {
    let copyModal = [...modalCard];
    copyModal.splice(props.indexArray, 1)
    setModalCard(copyModal);

  }

  return (
    <div className="container1-modal">
      <hr color="#050530" size="20" />
      <div className="container1-modal-close">
        <button className="container-modal-close-button" onClick={() => deleteCourse()}>X</button>
      </div>
      <div className="container1-modal-photo">
        <img src={props.val.img} width={"150px"} height={"100px"} />
        <div className="container1-modal-photo-teacher">
          <h1 className="container1-modal-photo-teacher-name">{props.val.name}</h1>
          <h2 className="container1-modal-photo-teacher-info">{props.val.teacher}</h2>
        </div>
      </div>
      <div className="container1-modal-price">
        <h3 className="container1-modal-price-text">{props.val.price}</h3>
      </div>

    </div>
  );
}

export default CourseSelect;
