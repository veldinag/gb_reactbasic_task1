import {ADD_MESSAGE, REMOVE_MESSAGES} from "./constants"
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
                            id: "id",//getNewId(),
                            date: "date",//setDate,
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
        default:
            return state;
    };
};

export default messagesReducer;