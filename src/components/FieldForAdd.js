import React from "react";

function FieldForAdd(props) {
    let inputElement;

    return(
        <form className="current-task" onSubmit={(e) => {
            e.preventDefault();
            props.handleSubmit(inputElement.value);
            inputElement.value = "";}
        }>
            <input className="current-task__name" ref={(input) => inputElement = input} />
            <button className="current-task__add" type="submit">Add</button>
        </form>
    );
}

export default FieldForAdd;