import {
  CURRENT_GRID,
  START_GRID,
  CLICK_VALUE,
  MOVE,
  WON,
  NEW_GAME,
} from "./types";

export function SetGrid(data) {
  return { type: CURRENT_GRID, payload: data };
}
export function SetStartGrid(data) {
  return { type: START_GRID, payload: data };
}
export function SetClickValue(value) {
  return { type: CLICK_VALUE, payload: value };
}
export function SetMove(value) {
  return { type: MOVE, payload: value };
}
export function SetIsWon(value) {
  return { type: WON, payload: value };
}
export function NewGame(data) {
  return { type: NEW_GAME, payload: data };
}
