export const REMOVE_TASK = "REMOVE_TASK";

export const removeItemInList = list => ({
    type: REMOVE_TASK,
    payload: list
});