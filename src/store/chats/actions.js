import { ADD_CHAT, REMOVE_CHAT } from "./constants"

export const addChat = (name) => ({
  type: ADD_CHAT,
  name,
})

export const removeChat = (id) => ({
  type: REMOVE_CHAT,
  id,
})