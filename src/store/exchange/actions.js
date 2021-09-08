import {GET_EXCHANGE_FAILURE,
        GET_EXCHANGE_REQUEST,
        GET_EXCHANGE_SUCCESS} from "./constants";
import {API_URL} from "../../constants";

export const getExchangeRequest = () => ({
  type: GET_EXCHANGE_REQUEST
});

export const getExchangeSuccess = (data) => ({
  type: GET_EXCHANGE_SUCCESS,
  payload: data,
});

export const getExchangeFailure = (err) => ({
  type: GET_EXCHANGE_FAILURE,
  payload: err,
});

export const getExchangeRates = () => async (dispatch, getState) => {
  dispatch(getExchangeRequest());
  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    };
    const result = await res.json();
    dispatch(getExchangeSuccess(result));
  } catch (err) {
    dispatch(getExchangeFailure(err.message));
  };
};