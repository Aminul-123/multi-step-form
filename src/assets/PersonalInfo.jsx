import { useForm } from "./FormContext";

 export default function PersonalInfo() {
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