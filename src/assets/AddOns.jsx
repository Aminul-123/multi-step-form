import { useForm } from "./FormContext";


export default function AddOns () {
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