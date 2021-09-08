import {GET_EXCHANGE_FAILURE,
        GET_EXCHANGE_REQUEST,
        GET_EXCHANGE_SUCCESS,
        STATUSES} from "./constants";

const initialState = {
  data: { },
  request: STATUSES.IDLE,
  error: null,
};

const exchangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXCHANGE_REQUEST:
      return {
        ...state,
        request: STATUSES.REQUEST,
      };
    case GET_EXCHANGE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        request: STATUSES.SUCCESS,
      };
    case GET_EXCHANGE_FAILURE:
      return {
        ...state,
        error: action.payload,
        request: STATUSES.FAILURE,
      };
    default:
      return state;
  };
};

export default exchangeReducer;

