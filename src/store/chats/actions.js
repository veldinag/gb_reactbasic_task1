import {ADD_CHAT, CHANGE_CHATS, CHANGE_LAST_CHAT_ID, REMOVE_CHAT} from "./constants";
import firebase from "firebase";

export const addChatAction = (id, name) => ({
  type: ADD_CHAT,
  id,
  name,
});

export const removeChatAction = (id) => ({
  type: REMOVE_CHAT,
  id,
});

export const changeChatsAction = (chats) => ({
  type: CHANGE_CHATS,
  chats,
});

export const changeLastChatIdAction = (id) => ({
  type: CHANGE_LAST_CHAT_ID,
  id,
});

export const addNewChatToFirebaseChatsAction = (chatsName) => async () => {
  await firebase
    .database()
    .ref("chats")
    .push({name: chatsName});
};

export const removeChatFromFirebaseChatsAction = (chatId) => async () => {
  await firebase.database().ref("chats").child(chatId).remove();
}

export const initChatsTrackingAction = () => async (dispatch) => {

  await firebase
    .database()
    .ref("chats")
    .on("value", (snapshot) => {
      const newChats = [];
      snapshot.forEach((item) => {
        newChats.push({id: item.ref.key, name: item.val().name});
      });
      dispatch(changeChatsAction(newChats));
    });
};