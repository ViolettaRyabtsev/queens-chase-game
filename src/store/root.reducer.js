import { combineReducers } from "redux";
import { BoardReducer } from "./board/board.reducer";

export const rootReducer = combineReducers({
  board: BoardReducer,
});
