import {ADD_CHAT, CHANGE_LAST_CHAT_ID, REMOVE_CHAT} from "./constants"

const initialState = {
  chatList: [],
  lastChatId: "",
}

const chatsReducer = (state = initialState, action) => {
  const id = `id${Date.now().toString()}`
  switch (action.type) {
    case ADD_CHAT:
      return {
        ...state,
        chatList: [
          ...state.chatList,
          {
            id: id,
            name: action.name,
          }
        ],
        lastChatId: id,
      }
    case REMOVE_CHAT:
      const newChats = state.chatList.filter(item => item.id !== action.id)
      const chatId = (newChats.length > 0) ? newChats[newChats.length - 1].id : ""
      return {
        ...state,
        chatList: newChats,
        lastChatId: chatId,
      }
    case CHANGE_LAST_CHAT_ID:
      return {
        ...state,
        lastChatId: action.id
      }
    default:
      return state
  }
}

export default chatsReducer