export const ADD_NEW_TASK = "ADD_NEW_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

export const removeItemInList = list => {
    return {
        type: REMOVE_TASK,
        payload: list
    };
}

export const addItemInList = id => {
    return {
        type: ADD_NEW_TASK,
        payload: id
    };
}