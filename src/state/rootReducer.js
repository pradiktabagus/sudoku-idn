import { combineReducers } from "redux";

import sudoku from "./reducer";
const rootReducer = combineReducers({
  sudoku,
});
export default rootReducer;
