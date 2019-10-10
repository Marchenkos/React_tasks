import React, { useCallback } from "react";
import "../style/task.css";

function Task(props) {
    const changeValue = useCallback(() => props.onComplete(props.value), [props.value]);

    return(
        <li className="task">
            <button className="task__isReady-button" onClick={changeValue}>ready</button>
            <div className="task__name">{props.value}</div>
        </li>
    );
}

export default Task;