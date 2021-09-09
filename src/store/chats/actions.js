import {ADD_CHAT, CHANGE_LAST_CHAT_ID, REMOVE_CHAT} from "./constants"

export const addChatAction = (name) => ({
  type: ADD_CHAT,
  name,
})

export const removeChatAction = (id) => ({
  type: REMOVE_CHAT,
  id,
})

export const changeLastChatIdAction = (id) => ({
  type: CHANGE_LAST_CHAT_ID,
  id,
})