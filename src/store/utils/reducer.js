import {CHANGE_CURRENT_CHAT_ID} from "./constants"

const initialState = {
    settings: {
        currentChatId: ''
    }
}

const utilsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENT_CHAT_ID:
            return {
                ...state,
                settings: {
                    ...state.settings,
                    currentChatId: action.id
                }
            }

        default: return state
    }
}

export default utilsReducer