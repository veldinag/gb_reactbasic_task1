import firebase from "firebase";
import {CHANGE_NAME} from "./constants"

export const changeNameAction = (newName) => ({
    type: CHANGE_NAME,
    payload: newName
});

export const getNameFromFirebaseProfileAction = () => (dispatch) => {
    const uid = firebase.auth().currentUser.uid;
    firebase
        .database()
        .ref("profile")
        .child(uid)
        .child("name")
        .on('value', (snapshot) => {
            dispatch(changeNameAction(snapshot.val()));
        });
}

export const setNameInFirebaseProfileAction = () => (dispatch, getState) => {
    const uid = firebase.auth().currentUser.uid;
    const state = getState();
    console.log(state);
    firebase
        .database()
        .ref("profile")
        .child(uid)
        .child("name")
        .set(state.profile.name);
}