import AddOns from "./AddOns";
import { useForm } from "./FormContext";
import PersonalInfo from "./PersonalInfo";
import Plans from "./Plans";
import Summary from './Summary'
import ConfirmMessage from './ConfirmMessage';
import Steps from "./Steps";

export default function Main() {
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