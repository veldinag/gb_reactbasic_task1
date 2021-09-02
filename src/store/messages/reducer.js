import {ADD_MESSAGE} from "./constants"
import getDate from "../../utils";

const initialState = {
  messageList: {},
}

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const currentList = state.messageList[action.chatId] || []
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [action.chatId]: [
            ...currentList,
            {
              ...action.message,
              id: `${Date.now().toString()}`,
              date: getDate()[0] + ", " + getDate()[1],
            }
          ]
        }
      }
    }
    default:
      return state
  }
}

export default messagesReducer