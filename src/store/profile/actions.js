import {CHANGE_NAME} from "./constants"

export const changeName = (newName) => ({
    type: CHANGE_NAME,
    payload: newName
})