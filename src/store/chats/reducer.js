import {ADD_CHAT, REMOVE_CHAT} from "./constants"

const initialState = {
  chatList: [
    { id: "id001", name: "Alex" },
    { id: "id002", name: "Mark" },
    { id: "id003", name: "Anna" },
    { id: "id004", name: "Stefan" },
  ],
}

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return {
        ...state,
        chatList: [
          ...state.chatList,
          {
            id: `id${Date.now().toString()}`,
            name: action.name,
          }
        ]
      }
    case REMOVE_CHAT:
      return {
        ...state,
        chatList: state.chatList.filter(item => item.id !== action.id)
      }
    default:
      return state
  }
}

export default chatsReducer