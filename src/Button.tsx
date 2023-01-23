import React from "react";
import "./style.css";

function Button(props: {
  text: string;
  type: string;
  clas?: string;
  dispatch: React.Dispatch<{
    type: string;
    payload: string;
  }>;
}) {
  if (props.type === "number") {
    return (
      <button
        className={props.clas}
        onClick={() => {
          props.dispatch({ type: "append", payload: props.text });
        }}
      >
        {props.text}
      </button>
    );
  } else if (props.type === "delete") {
    return (
      <button
        className={props.clas}
        onClick={() => {
          props.dispatch({ type: "delete", payload: "" });
        }}
      >
        {props.text}
      </button>
    );
  } else if (props.type === "deleteAll") {
    return (
      <button
        className={props.clas}
        onClick={() => {
          props.dispatch({ type: "deleteAll", payload: "" });
        }}
      >
        {props.text}
      </button>
    );
  } else if (props.type === "operand") {
    return (
      <button
        className={props.clas}
        onClick={() => {
          props.dispatch({ type: "operation", payload: props.text });
        }}
      >
        {props.text}
      </button>
    );
  } else {
    return (
      <button
        className={props.clas}
        onClick={() => {
          props.dispatch({ type: "delete", payload: "" });
        }}
      >
        {props.text}
      </button>
    );
  }
}

export default Button;
