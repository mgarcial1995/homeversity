import "./styles.sass";
import Step from "../Step";

const ProgressBar = ({ steps }) => {
  return (
    <div className="progress_bar">
      {steps.map((step, i) => (
        <Step key={i} index={i} step={step}></Step>
      ))} 
    </div>
  );
};

export default ProgressBar;
