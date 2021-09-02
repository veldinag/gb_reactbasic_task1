import {ADD_MESSAGE} from "./constants"

export const addMessage = (chatId, message, date) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
})