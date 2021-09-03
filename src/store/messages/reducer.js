import {ADD_MESSAGE, REMOVE_MESSAGES} from "./constants"
import getDate from "../../utils";
import removeByKey from "./utils";

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
        case REMOVE_MESSAGES: {
            return {
                ...state,
                messageList: removeByKey(state.messageList, action.chatId)
            }
        }
        default:
            return state
    }
}

export default messagesReducer