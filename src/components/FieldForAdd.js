import React, { Component } from "react";

function FieldForAdd(props) {
    return(
        <div className="current-task">
            <input className="current-task__name" ref={props.inputRef} />
            <button className="current-task__add" onClick={props.onClick}>Add</button>
        </div>
    );
}
export default FieldForAdd;