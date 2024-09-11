import { useState } from "react";
import { useForm } from "./FormContext";
import ChoosePlan from "./ChoosePlan";

 export default function Plans() {
    const [month, setMonth] = useState(true);
    const [year, setYear] = useState(false);
    const {dispatch , statusId} = useForm();
     const options = [
      {
        plan: "Archade",
        price: "$9/mo",
        emoji: "",
      },
      {
        plan: "Advanced",
        price: "$12/mo",
        emoji: "",
      },
      {
        plan: "Pro",
        price: "$15/mo",
        emoji: "",
      },
    ];
    function handleYearly() {
      setMonth((t) => !t);
      setYear((t) => !t);
    }
    function handleMonth() {
      setMonth((t) => !t);
      setYear((t) => !t);
    }
  
    return (
      <>
        <div className="plans">
          <div className="planTexts">
            <h2>Select your plan</h2>
            <p>You have the option of mothly or yearly billing.</p>
          </div>
  
          {options.map((option) => {
            return <ChoosePlan key={option.plan} option={option} />;
          })}
  
          <div className="choose">
            <span className={`${month ? "bold" : ""}`} onClick={handleMonth}>
              {" "}
              Monthly{" "}
            </span>{" "}
            /{" "}
            <span className={`${year ? "bold" : ""}`} onClick={handleYearly}>
              Yearly
            </span>
          </div>
          <div className="btns">
            {/* will work on previous btn later. */}
              <button className="nextBtn" onClick={(e) => dispatch({type : 'prev', payload : e})} >
                Previous
              </button>
  
              <button
              className="nextBtn"
              onClick={() => dispatch({ type: "plan/selected"  })}
            >
              Next step
            </button>
  
            </div>
        </div>
      </>
    );
  }
  