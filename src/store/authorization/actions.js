import {
  AUTH_FAILURE,
  AUTH_REQUEST, AUTH_RESET,
  AUTH_SUCCESS,
  SET_AUTH_STATUS_AUTHED,
  SET_AUTH_STATUS_NOT_AUTHED
} from "./constants";
import firebase from "firebase";

export const setAuthStatusAuthedAction = () => ({
  type: SET_AUTH_STATUS_AUTHED,
});

export const setAuthStatusNotAuthedAction = () => ({
  type: SET_AUTH_STATUS_NOT_AUTHED,
});

export const authRequestAction = () => ({
  type: AUTH_REQUEST,
});

export const authSuccessAction = (data) => ({
  type: AUTH_SUCCESS,
  payload: data,
});

export const authFailureAction = (err) => ({
  type: AUTH_FAILURE,
  payload: err,
});

export const setAuthResetAction = () => ({
  type: AUTH_RESET,
});

export const signUpAction = (login, pass) => async (dispatch) => {
  dispatch(authRequestAction());
  try {
    await firebase.auth().createUserWithEmailAndPassword(login, pass);
    dispatch(authSuccessAction("signed-up"));
  } catch (err) {
    dispatch(authFailureAction(err.message));
  };
};

export const signInAction = (login, pass) => async (dispatch) => {
  dispatch(authRequestAction());
  try {
    await firebase.auth().signInWithEmailAndPassword(login, pass);
    dispatch(authSuccessAction("signed-in"));
  } catch (err) {
    dispatch(authFailureAction(err.message));
  };
};

export const signOutAction = () => async (dispatch) => {
  dispatch(authRequestAction());
  try {
    await firebase.auth().signOut();
    dispatch(authSuccessAction("signed-out"));
  } catch (err) {
    dispatch(authFailureAction(err.message));
  };
};

export const getAuthStateFromFirebaseAction = () => (dispatch) =>{
  firebase.auth().onAuthStateChanged((user) => {
    (user)
        ? dispatch(setAuthStatusAuthedAction())
        : dispatch(setAuthStatusNotAuthedAction())
  });
}


