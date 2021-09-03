import {ADD_MESSAGE, REMOVE_MESSAGES} from "./constants"

export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
})

export const removeMessages = (chatId) => ({
  type: REMOVE_MESSAGES,
  chatId,
})