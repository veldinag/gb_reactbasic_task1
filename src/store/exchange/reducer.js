import {GET_EXCHANGE_FAILURE,
        GET_EXCHANGE_REQUEST,
        GET_EXCHANGE_SUCCESS} from "./constants";

const initialState = {
  data: {},
  loading: true,
  error: undefined,
};

const exchangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXCHANGE_REQUEST:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case GET_EXCHANGE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case GET_EXCHANGE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  };
};

export default exchangeReducer;

