import React from "react";
import "./style.css"

function Screen ( props : {upper:string, operand: string, lower:string}) {
    return (
        <div className="container">
            <div className="upperScreen">{props.upper}</div>
            <div className="operand">{props.operand}</div>
            <div className="lowerScreen">{props.lower}</div>
        </div>
    )
}

export default Screen