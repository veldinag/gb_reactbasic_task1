import {SET_SIGNED_IN, SET_SIGNED_OUT} from "./constants";

const initialState = {
    authorized: false,
};

const authorizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SIGNED_IN:
            return {
                ...state,
                authorized: true,
            }
        case SET_SIGNED_OUT:
            return {
                ...state,
                authorized: false,
            }
        default:
            return state
    }
};

export default authorizationReducer;