import React, { useCallback } from "react";

function FieldForAdd(props) {
    let inputElement;
    const onAdd = useCallback((e) => props.handleSubmit(e, inputElement.value), []);

    return(
        <form className="current-task" onSubmit={onAdd}>
            <input className="current-task__name" ref={(input) => inputElement = input} />
            <button className="current-task__add" type="submit">Add</button>
        </form>
    );
}

export default FieldForAdd;