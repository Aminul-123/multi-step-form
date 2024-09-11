import { FormProvider} from "./assets/FormContext";
import Main from "./assets/Main";

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

// function Button({ children }) {
//   return children;
// }
