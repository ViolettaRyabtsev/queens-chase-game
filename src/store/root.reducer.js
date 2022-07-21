import { combineReducers } from "redux";
import { BoardReducer } from "./board/board.reducer";
import { CountQueensReducer } from "./board/queens.reducer";
export const rootReducer = combineReducers({
  board: BoardReducer,
  count: CountQueensReducer,
});
