import {ADD_CHAT, CHANGE_CHATS, CHANGE_LAST_CHAT_ID, REMOVE_CHAT} from "./constants"
import {getNewId} from "../../utils";

const initialState = {
  chatList: [],
  lastChatId: "",
};

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return {
        ...state,
        chatList: [
          ...state.chatList,
          {
            id: action.id,
            name: action.name,
          }
        ],
        lastChatId: action.id,
      }
    case REMOVE_CHAT:
      let newChats = state.chatList.filter(item => item.id !== action.id);
      let chatId = (newChats.length > 0)
        ? newChats[newChats.length - 1].id
        : "";
      return {
        ...state,
        chatList: [...newChats],
        lastChatId: chatId,
      }
    case CHANGE_CHATS:
      return {
        ...state,
        chatList: action.chats,
        lastChatId: (action.chats.length > 0)
          ? action.chats[action.chats.length - 1].id
          : "",
      }
    case CHANGE_LAST_CHAT_ID:
      return {
        ...state,
        lastChatId: action.id
      }
    default:
      return state
  }
};

export default chatsReducer;