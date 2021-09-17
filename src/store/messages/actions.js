import firebase from "firebase";
import {ADD_MESSAGE, CHANGE_MESSAGES, REMOVE_MESSAGES} from "./constants"
import {getDate, getTime} from "../../utils";

export const addMessageAction = (chatId, message, style) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
  style,
});

export const removeMessagesAction = (chatId) => ({
  type: REMOVE_MESSAGES,
  chatId,
});

export const changeMessagesAction = (chatId, messages) => ({
  type: CHANGE_MESSAGES,
  chatId,
  messages
});

export const addMessageFromRobot = (chatId, message, style) => (dispatch) => {
  dispatch(addMessageAction(chatId, message, style))
  const botMessage = "Thank you for the message!"
  const setStyle = "Robot"
  setTimeout(() => dispatch(addMessageAction(chatId, botMessage, setStyle)), 1500)
};

export const addNewMessageToFirebaseMessagesAction = (chatId, message, style) => async () => {
  const date = getDate() + ", " + getTime();
  await firebase
    .database()
    .ref("messages")
    .child(chatId)
    .push({message:message, style: style, date: date});
};

export const removeMessagesFromFirebaseMessagesAction = (chatId) => async () => {
  await firebase
    .database()
    .ref("messages")
    .child(chatId)
    .remove();
}

export const initMessagesTrackingAction = (chatId) => async (dispatch) => {

  await firebase
    .database()
    .ref("messages")
    .child(chatId)
    .on("value", (snapshot) => {
      const newMessages = [];
      snapshot.forEach((item) => {
        newMessages.push({
          id: item.ref.key,
          message: item.val().message,
          date: item.val().date,
          style: item.val().style
        });
      });
      dispatch(changeMessagesAction(chatId, newMessages));
    });
};