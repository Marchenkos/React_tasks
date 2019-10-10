import React from "react";
import "../style/assessment-field.css"

function Assessment(props) {
    return (
        <div className="assessment-field">
            <button className="assessment-field__change-button" onClick={() => props.onClick(props.type)}>{props.type}</button>
            <div className="assessment-field__count">{props.count}</div>
        </div>
    );
}

export default Assessment;