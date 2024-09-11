import { useForm } from "./FormContext";

export default function AllSteps({ step }) {
    const { statusId } = useForm();
    // console.log(statusId);
    return (
      <>
        <div className="singleStep">
          <div className={` num ${step.id === statusId ? "active" : ""} `}>
            {" "}
            {step.id}{" "}
          </div>
          <div className="texts">
            <p className="step-num"> STEP {step.id} </p>
            <p className="step-details"> {step.stepDetails} </p>
          </div>
        </div>
      </>
    );
  }