import {ADD_MESSAGE, CHANGE_MESSAGES, REMOVE_MESSAGES} from "./constants"
import {getDate, getNewId, getTime} from "../../utils";
import removeByKey from "./utils";

const initialState = {
    messageList: {},
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const currentList = state.messageList[action.chatId] || [];
            const setDate = action.style === "Robot" ? "From Robot" : getDate() + ", " + getTime();
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.chatId]: [
                        ...currentList,
                        {
                            id: getNewId(),
                            date: setDate,
                            message: action.message,
                            style: action.style,
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
        case CHANGE_MESSAGES: {
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.chatId]: action.messages
                }
            }
        }
        default:
            return state;
    };
};

export default messagesReducer;