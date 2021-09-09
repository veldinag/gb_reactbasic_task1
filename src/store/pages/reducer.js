import {SET_PAGE} from "./constants";

const initialState = {
  page: "",
}

const pagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.newPage,
      }
    default:
      return state
  }
}

export default pagesReducer;