import {SET_PAGE} from "./constants";

export const setPageAction = (newPage) => ({
  type: SET_PAGE,
  newPage,
});