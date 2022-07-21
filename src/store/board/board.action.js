import { createAction } from "../utils/reducer.utils";
import { BOARD_ACTION_TYPES } from "./boards.types";
import { useDispatch, useSelector } from "react-redux";

export const setCurrentBoard = (value) => {
  return (dispatch) => {
    dispatch({
      type: BOARD_ACTION_TYPES.SET_CURRENT_BOARD,
      payload: value,
    });
  };
};

export const countQueens = (num) => {
  return (dispatch) => {
    dispatch({
      type: BOARD_ACTION_TYPES.COUNT_QUEENS,
      payload: num,
    });
  };
};
