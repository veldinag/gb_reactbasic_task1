import {SET_SIGNED_IN, SET_SIGNED_OUT} from "./constants";

export const setSignedInAction = () => ({
    type: SET_SIGNED_IN,
});

export const setSignedOutAction = () => ({
    type: SET_SIGNED_OUT,
});
