import {GET_EXCHANGE_FAILURE, GET_EXCHANGE_REQUEST, GET_EXCHANGE_SUCCESS, STATUSES} from "./constants"

const initialState = {
  currExchRates: {},
  request: STATUSES.IDLE,
  loading: false,
  error: null,
}

const exchangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXCHANGE_REQUEST:
      return {
        ...state,
        request: STATUSES.REQUEST,
        loading: true,
      }
    case GET_EXCHANGE_SUCCESS:
      return {
        ...state,
        currExchRates: action.payload,
        request: STATUSES.SUCCESS,
        loading: false,
      }
    case GET_EXCHANGE_FAILURE:
      return {
        ...state,
        error: action.payload,
        request: STATUSES.FAILURE,
        loading: false,
      }
    default:
      return state
  }
}

export default exchangeReducer

