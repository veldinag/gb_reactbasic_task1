import { CHANGE_CURRENT_CHAT_ID } from "./constants"

export const changeCurrentChatId = (id) => ({
    type: CHANGE_CURRENT_CHAT_ID,
    id,
})