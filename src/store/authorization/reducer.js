import {
    AUTH_FAILURE,
    AUTH_REQUEST, AUTH_RESET,
    AUTH_SUCCESS,
    SET_AUTH_STATUS_AUTHED,
    SET_AUTH_STATUS_NOT_AUTHED
} from "./constants";

const initialState = {
    authorized: false,
    loading: false,
    error: undefined,
    status: "",
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_STATUS_AUTHED:
            return {
                ...state,
                authorized: true,
                loading: false,
                error: undefined,
                status: undefined,
            };
        case SET_AUTH_STATUS_NOT_AUTHED:
            return {
                ...state,
                authorized: false,
                loading: false,
                error: undefined,
                status: undefined,
            };
        case AUTH_REQUEST:
            return {
                ...state,
                loading: true,
                error: undefined,
            };
        case AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                status: action.payload,
            };
        case AUTH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case AUTH_RESET:
            return {
                ...state,
                loading: false,
                error: undefined,
                status: undefined,
            };
        default:
            return state;
    }
};

export default authReducer;