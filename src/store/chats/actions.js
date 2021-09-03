import {ADD_CHAT, CHANGE_LAST_CHAT_ID, REMOVE_CHAT} from "./constants"

export const addChat = (name) => ({
  type: ADD_CHAT,
  name,
})

export const removeChat = (id) => ({
  type: REMOVE_CHAT,
  id,
})

export const changeLastChatId = (id) => ({
  type: CHANGE_LAST_CHAT_ID,
  id,
})