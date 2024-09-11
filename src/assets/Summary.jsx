import { useForm } from "./FormContext";


export default function Summary () {
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
  