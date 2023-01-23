import { useReducer } from "react";
import Screen from "./Screen";
import Buttons from "./Buttons";
import "./style.css";

function App() {
  const initialState = {
    upper: "",
    operand: "",
    lower: "0",
  };

  function reducer(
    state: typeof initialState,
    action: { type: string; payload: string }
  ) {
    switch (action.type) {
      case "append":
        if (action.payload === "." && state.lower.includes(".")) {
          return state;
        } else if (action.payload === "." ){
          return { ...state, lower: state.lower.concat(action.payload) };
        }
         else if (state.lower !== "0") {
          return { ...state, lower: state.lower.concat(action.payload) };
        } else {
          return { ...state, lower: action.payload };
        }

      case "delete":
        if ( state.lower.length >= 2) {
          return { ...state, lower: state.lower.slice(-0, -1) };
        } else  {
          return { ...state, lower: "0" };
        }

      case "deleteAll":
        return { lower: "0", operand: "", upper: "" };

      case "operation":
        // if (state.upper === "" && state.lower !== "") {
        if (state.upper === "" ) {
          return {
            ...state,
            lower: "0",
            operand: action.payload,
            upper: state.lower,
          };
        } else if (state.upper !== "" && state.lower !== "0") {
          return {
            ...state,
            lower: "0",
            operand: action.payload,
            upper: eval(`${state.upper} ${state.operand} ${state.lower}`),
          };
        } else {

          return {...state, operand:action.payload};
        }

      default:
        return state;
    }
  }

  const [{ upper, operand, lower }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <div className="main-container">
      <Screen upper={upper} lower={lower} operand={operand} />
      <Buttons dispatch={dispatch} />
    </div>
  );
}

export default App;
