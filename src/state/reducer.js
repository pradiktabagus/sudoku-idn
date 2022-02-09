import {
  CURRENT_GRID,
  START_GRID,
  CLICK_VALUE,
  MOVE,
  WON,
  NEW_GAME,
} from "./types";
let InitialState = {
  grid: [],
  clickValue: 1,
  onSolve: false,
  time: Date().toLocaleString(),
  move: 0,
  isWon: false,
};

const Sudoku = (state = InitialState, action) => {
  switch (action.type) {
    case CURRENT_GRID:
      return {
        ...state,
        grid: action.payload,
      };
    case CLICK_VALUE:
      return {
        ...state,
        clickValue: action.payload,
      };
    case MOVE:
      return {
        ...state,
        move: action.payload,
      };
    case WON:
      return {
        ...state,
        isWon: action.payload,
      };
    case NEW_GAME:
      return {
        ...state,
        grid: action.payload,
        clickValue: 1,
        onSolve: false,
        startGrid: action.payload,
        time: Date().toLocaleString(),
        move: 0,
        isWon: false,
      };
    default:
      return state;
  }
};

export default Sudoku;
