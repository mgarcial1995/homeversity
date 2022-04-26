import React, { useContext } from "react";
import { StepContext } from "../../views/Carshop";
import "./styles.sass";

const Step = (props) => {
  const { currentStep, lastStep } = useContext(StepContext);
  return (
    <div className={"step" + (currentStep===props.index+1 ? "-selected" : "")}>
      <div className="step-circle">{props.index + 1}</div>
      <div className="step-label">{props.step}</div>
    </div>
  );
};

export default Step;
