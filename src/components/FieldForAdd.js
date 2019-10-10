import React, { useCallback, useRef } from "react";

function FieldForAdd(props) {
    const inputEl = useRef(null);
    const onAdd = useCallback((e) => {
        props.handleSubmit(e, inputEl.current.value);
        inputEl.current.value = "";
    }, []);

    return(
        <form className="current-task" onSubmit={onAdd}>
            <input className="current-task__name" ref={inputEl} />
            <button className="current-task__add" type="submit">Add</button>
        </form>
    );
}

export default FieldForAdd;