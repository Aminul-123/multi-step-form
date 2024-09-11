import { useForm } from "./FormContext";



 export default function ChoosePlan({ option }) {
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
            <img src={option.emoji} alt="emoji" />
          </div>
          <div>
            <p className="plan"> {option.plan} </p>
            <p className="price"> {option.price} </p>
          </div>
        </div>
      </>
    );
  }