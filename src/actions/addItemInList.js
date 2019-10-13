export const ADD_NEW_TASK = "ADD_NEW_TASK";

export const addItemInList = task => {
    return ({
        type: ADD_NEW_TASK,
        payload: task
    });
}