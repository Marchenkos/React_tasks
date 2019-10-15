import { REMOVE_TASK, ADD_NEW_TASK } from "../actions/changeList";

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
                list: state.list.filter(item => item != action.payload)
            };

        default:
            return state;
    }
};