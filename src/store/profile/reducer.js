import { CHANGE_PROFILE_CHECKBOX } from "./constants";

const initialState = {
    isChecked: false,
    message: "Switch is checked"
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PROFILE_CHECKBOX:
            return {
                ...state,
                isChecked: !state.isChecked
            }
        default:
            return state
    }
}