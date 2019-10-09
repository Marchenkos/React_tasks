import React, { Component } from "react";
import "../style/task.css";

function Task(props) {
    return(
        <li className="task">
            <button className="task__isReady-button" onClick={() => {props.onComplete(props.value)}}>ready</button>
            <div className="task__name">{props.value}</div>
        </li>
    );
}
export default Task;