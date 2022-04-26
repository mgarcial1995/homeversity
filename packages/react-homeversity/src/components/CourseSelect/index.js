import React, { useContext } from "react";
import "./styles.sass";
import { CardShopModal } from "../../App";
import { UserEnterContext } from "../../App";

function CourseSelect(props) {
  const { modalCard, setModalCard } = useContext(CardShopModal);
  const { userLogged, setUserLogged } = useContext(UserEnterContext);
  console.log(userLogged.typeUser.userID)
  const deleteCourse =async () =>{
    let copyModal = [...modalCard];
    copyModal.splice(props.indexArray, 1)
    setModalCard(copyModal);
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
  }

  return (
    <div className="container1-modal">
      <hr color="#2A3558" size="20" />
      <div className="close">
        <button className="deleteCourse" onClick={()=>deleteCourse()}>X</button>
      </div>
      <div className="container1-modal-photo">
        <img src={props.val.photo} width={"150px"} height={"100px"} />
        <div className="container1-modal-photo-teacher">
          <h1 className="container1-modal-photo-teacher-name">{props.val.name}</h1>
          <h2 className="container1-modal-photo-teacher-info">{props.val.teacher.name}</h2>
        </div>
      </div>
      <div className="container1-modal-price">
        <h3 className="container1-modal-price-text">{props.val.price}</h3>
      </div>

    </div>
  );
}

export default CourseSelect;
