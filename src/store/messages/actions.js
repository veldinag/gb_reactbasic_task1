import {ADD_MESSAGE, REMOVE_MESSAGES} from "./constants"

export const addMessage = (chatId, message, style) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
  style,
})

export const removeMessages = (chatId) => ({
  type: REMOVE_MESSAGES,
  chatId,
})

export const addMessageFromRobot = (chatId, message, style) => (dispatch) => {
  dispatch(addMessage(chatId, message, style))
  const botMessage = "Thank you for the message!"
  const setStyle = "Robot"
  setTimeout(() => dispatch(addMessage(chatId, botMessage, setStyle)), 1500)
}