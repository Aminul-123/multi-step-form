import { useState } from "react";
import { FormProvider, useForm } from "./assets/FormContext";

export default function App() {
  return (
    <>
      <div className="main">
        <FormProvider>
          <Main />
        </FormProvider>
      </div>
    </>
  );
}
function Main() {
  const { status } = useForm();
  return (
    <>
      <div className="main-cont">
        <Steps />

       <div className="multi-steps">

             {status === "PERSONAL_INFO" && <PersonalInfo />}
             {status === "PLANS" && <Plans />}
             {status === 'ADD_ONS' && <AddOns />}
             {status === 'SUMMARY' && <Summary /> }
             {status === 'FINISH' && <ConfirmMessage />}
             
        </div>
      </div>
    </>
  );
}
function Steps() {
  const steps = [
    {
      id: 1,
      stepDetails: "YOUR INFO",
    },
    {
      id: 2,
      stepDetails: "SELECT PLAN",
    },
    {
      id: 3,
      stepDetails: "ADD-ONS",
    },
    {
      id: 4,
      stepDetails: "SUMMARY",
    },
  ];
  return (
    <>
      <div className="steps">
        {steps.map((step) => {
          return (
            <div className="allSteps" key={step.id}>
              <AllSteps step={step} />
            </div>
          );
        })}
      </div>
    </>
  );
}
function AllSteps({ step }) {
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

function PersonalInfo() {
  const { name, email, phone, dispatch , statusId } = useForm();
  return (
    <>
      <div className="form-details">
        <div className="infoTexts">
          <h2>Personal Info</h2>
          <p>Please provide your name, email address and phone number</p>
        </div>

        <form>
          <div className="name">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="e.g. Stephen King"
              value={name}
              onChange={(e) =>
                dispatch({ type: "form/name", payload: e.target.value })
              }
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="e.g. stephenking@lorem.com"
              value={email}
              onChange={(e) =>
                dispatch({ type: "form/email", payload: e.target.value })
              }
            />
          </div>
          <div className="phone">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              id="phone"
              placeholder="e.g. +1 234 567 890"
              value={phone}
              onChange={(e) =>
                dispatch({ type: "form/phone", payload: e.target.value })
              }
            />
          </div>

          <div className="btns">
            <button className="nextBtn" disabled={`${statusId === 1 ? true : false}`}>
              Previous
            </button>

            <button
            className="nextBtn"
            onClick={(e) => dispatch({ type: "form/submit", payload: e })}
          >
            Next step
          </button>

          </div>


        </form>
      </div>
    </>
  );
}
function Plans() {
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

function ChoosePlan({ option }) {
  const { selectedOption, dispatch } = useForm();
  // function handleSelectedOption () {
  //   dispatch({type : 'option/selected'})
  // }
  return (
    <>
      <div
        className={` singleOption ${
          selectedOption === option.plan ? "selected" : ""
        } `}
        onClick={() =>
          dispatch({ type: "option/selected", payload: option.plan })
        }
      >
        <div className="emoji">
          <img src="" alt="emoji" />
        </div>
        <div>
          <p className="plan"> {option.plan} </p>
          <p className="price"> {option.price} </p>
        </div>
      </div>
    </>
  );
}
// function Button({ children }) {
//   return children;
// }

function AddOns () {
  const {dispatch} = useForm();
  
 
  return (
    <>
    <div className="add-ons">
      <div className="addOns-title">
        <h2>Pick Add-Ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div className="three-option">
        <div className="add-ons-option">
          <input type="checkbox" id="first"  onChange={() => dispatch({type : 'first/opt', payload : 1})} />
            <div className="flex">
              <div>
                <h4>Online service</h4>
                <p>Access to multiplayer games</p>
              </div>
              <div>
                <span> +$1/mo </span>
              </div>
            </div>
        </div>
        <div className="add-ons-option">
          <input type="checkbox" id="first" onChange={() => dispatch({type : 'sec/opt', payload : 2})} />
            <div className="flex">
              <div>
                <h4>Larger storage</h4>
                <p>Extra 1TB of cloud save</p>
              </div>
              <div>
                <span> +$2/mo </span>
              </div>
            </div>
        </div>
        <div className="add-ons-option">
          <input type="checkbox" id="first" onChange ={() => dispatch({type : 'third/opt', payload : 2})} />
            <div className="flex">
              <div>
                <h4>Customizable Profile</h4>
                <p>Custom theme on your Profile</p>
              </div>
              <div>
                <span> +$2/mo </span>
              </div>
            </div>
        </div>
       
      </div>
      <div className="btns addOns-btn">
            <button className="nextBtn prevBtn" onClick={(e) => dispatch({type : 'addOns/prev', payload : e})} >
              Previous
            </button>

            <button
            className="nextBtn"
           onClick={(e) => dispatch({type : 'summary', payload : e})}
          >
            Next step
          </button>

          </div>
    </div>
    </>
  )
}
function Summary () {
  const {selectedOption , dispatch , firstOpt, secOpt, thirdOpt} = useForm();

  const total = firstOpt + secOpt + thirdOpt + 9
  return (
    <>
    <div className="summary">
      <div className="summary-title">
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className="allSummary">
        <div className="summary-div">
          <div>
            <h4> {selectedOption} (Monthly) </h4>
            <span className="change" onClick={() => dispatch({type : 'change'})}> change </span>
          </div>
          <div>
            <span> $9/mo </span>
          </div>
        </div>

        <div className="summary-div">
          <h5>Online service</h5>
          <span> +{firstOpt}$/mo </span>
        </div>

        <div className="summary-div">
          <h5> Larger storage </h5>
           <span> +${secOpt}/mo </span>
        </div>

        <div className="summary-div">
          <h5> Customizable Profile </h5>
           <span> +${thirdOpt}/mo </span>
        </div>

        <div className="summary-div">
          <h5> Total (per month)</h5>
          <span> +${total}/mo </span>
        </div>
      </div>

      <div className="btns addOns-btn">
            <button className="nextBtn prevBtn" onClick={(e) => dispatch({type : 'summary/prev', payload : e })}  >
              Previous
            </button>

            <button
            className="nextBtn"
          onClick={(e) => dispatch({type : 'finish', payload : e})}
          >
            Confirm
          </button>

       </div>
    </div>
    </>
  )
}

function ConfirmMessage () {
  return (
    <>
    <h3 className="confirm">
      <center>Thank You</center>
      <span>Thanks for confirming your submission. </span>
    </h3>
    </>
  )
}
