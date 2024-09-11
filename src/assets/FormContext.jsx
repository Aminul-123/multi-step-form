import { createContext, useContext, useReducer } from "react";

const FormContext = createContext();
const initialState = {
  name: "",
  email: "",
  phone: "",
  status: "PERSONAL_INFO",
  statusId: 1,
  selectedOption: "Archade",
  firstOpt: 0,
  secOpt: 0,
  thirdOpt: 0,
  firstOptTitle: "Online service",
  secOptTitle: "Larger storage",
  thirdOptTitle: "Customizable Profile",
};

function reducer(state, action) {
  switch (action.type) {
    case "form/name":
      return {
        ...state,
        name: action.payload,
      };
    case "form/email":
      return {
        ...state,
        email: action.payload,
      };
    case "form/phone":
      return {
        ...state,
        phone: action.payload,
      };
    case "form/submit":
      action.payload.preventDefault();
      if (!state.name || !state.email || !state.phone)
        return {
          ...state,
          status: state.status,
        };
      return {
        ...state,
        status: "PLANS",
        statusId: state.statusId + 1,
      };

    case "option/selected":
      if (!action.payload)
        return {
          ...state,
          status: state.status,
        };
      return {
        ...state,
        selectedOption: action.payload,
      };
    case "plan/selected":
      return {
        ...state,
        status: "ADD_ONS",
        statusId: state.statusId + 1,
      };
    case "prev":
      action.payload.preventDefault();
      return {
        ...state,
        status: initialState.status,
        statusId: state.statusId - 1,
      };
    case "addOns/prev":
      action.payload.preventDefault();
      return {
        ...state,
        status: "PLANS",
        statusId: state.statusId - 1,
      };
    case "summary":
      action.payload.preventDefault();
      return {
        ...state,
        status: "SUMMARY",
        statusId: state.statusId + 1,
      };
    case "change":
      return {
        ...state,
        status: "PLANS",
        statusId: state.statusId - 2,
      };
    case "summary/prev":
      return {
        ...state,
        status: "ADD_ONS",
        statusId: state.statusId - 1,
      };
    case "first/opt":
      return {
        ...state,
        firstOpt: action.payload,
      };
    case "sec/opt":
      return {
        ...state,
        secOpt: action.payload,
      };
    case "third/opt":
      return {
        ...state,
        thirdOpt: action.payload,
      };
    case "finish":
      return {
        ...state,
        status: "FINISH",
      };
  }
}

function FormProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    name,
    email,
    phone,
    status,
    statusId,
    selectedOption,
    firstOpt,
    secOpt,
    thirdOpt,
  } = state;

  return (
    <FormContext.Provider
      value={{
        name,
        email,
        phone,
        dispatch,
        status,
        statusId,
        selectedOption,
        firstOpt,
        secOpt,
        thirdOpt,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

function useForm() {
  const context = useContext(FormContext);
  if (context === undefined)
    throw new Error("context was used outside FormProvider");
  return context;
}
export { useForm, FormProvider };
