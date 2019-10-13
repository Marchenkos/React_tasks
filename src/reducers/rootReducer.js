import { REMOVE_TASK } from "../actions/removeItemInList";
import { ADD_NEW_TASK } from "../actions/addItemInList";

export const defaultState = {
    list: []
};

export const rootReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_NEW_TASK:
            return {
                ...state,
                list: [...state.list, action.payload]
            };

        case REMOVE_TASK:
            return {
                ...state,
                list: action.payload
            };

        default:
            return state;
    }
};