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
              id: `${Date.now().toString()}`,
              date: getDate()[0] + ", " + getDate()[1],
              message: action.message,
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