import "./style.css";
import Button from "./Button";

function Buttons(props: {
  dispatch: React.Dispatch<{
    type: string;
    payload: string;
  }>;
}) {
  return (
    <div className="button-grid">
      <Button text={"AC"} type={"deleteAll"} dispatch={props.dispatch} clas={"span-two-column"} />
      <Button text={"DEL"} type={"delete"} dispatch={props.dispatch} />
      <Button text={"+"} type={"operand"} dispatch={props.dispatch} />

      <Button text={"1"} type={"number"} dispatch={props.dispatch} />
      <Button text={"2"} type={"number"} dispatch={props.dispatch} />
      <Button text={"3"} type={"number"}  dispatch={props.dispatch}/>
      <Button text={"-"} type={"operand"}  dispatch={props.dispatch}/>

      <Button text={"4"} type={"number"}  dispatch={props.dispatch}/>
      <Button text={"5"} type={"number"}   dispatch={props.dispatch} />
      <Button text={"6"} type={"number"}   dispatch={props.dispatch} />
      <Button text={"*"} type={"operand"}  dispatch={props.dispatch} />

      <Button text={"7"} type={"number"}   dispatch={props.dispatch} />
      <Button text={"8"} type={"number"}   dispatch={props.dispatch} />
      <Button text={"9"} type={"number"}   dispatch={props.dispatch} />
      <Button text={"/"} type={"operand"}   dispatch={props.dispatch} />

      <Button text={"."} type={"number"}   dispatch={props.dispatch} />
      <Button text={"0"} type={"number"}   dispatch={props.dispatch} />
      <Button text={"="} type={"operand"}   dispatch={props.dispatch} clas={"span-two-column"} />
    </div>
  );
}

export default Buttons;
