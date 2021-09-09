import {GET_EXCHANGE_FAILURE,
        GET_EXCHANGE_REQUEST,
        GET_EXCHANGE_SUCCESS} from "./constants";
import {API_URL} from "../../constants";

export const getExchangeRequestAction = () => ({
  type: GET_EXCHANGE_REQUEST
});

export const getExchangeSuccessAction = (data) => ({
  type: GET_EXCHANGE_SUCCESS,
  payload: data,
});

export const getExchangeFailureAction = (err) => ({
  type: GET_EXCHANGE_FAILURE,
  payload: err,
});

export const getExchangeRatesAction = () => async (dispatch, getState) => {
  dispatch(getExchangeRequestAction());
  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    };
    const result = await res.json();
    dispatch(getExchangeSuccessAction(result));
  } catch (err) {
    dispatch(getExchangeFailureAction(err.message));
  };
};