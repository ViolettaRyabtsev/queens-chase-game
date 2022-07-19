import { createAction } from "../utils/reducer.utils";
import { BOARD_ACTION_TYPES } from "./boards.types";

export const setCurrentBoard = (value) => {
  return (dispatch) => {
    dispatch({
      type: BOARD_ACTION_TYPES.SET_CURRENT_BOARD,
      payload: value,
    });
  };
};
