import "./App.css";
import PropTypes from "prop-types";
import generator from "sudoku";
import { useEffect } from "react";
import Board from "./board";
import {
  SetGrid,
  SetClickValue,
  SetMove,
  SetIsWon,
  NewGame,
} from "./state/action";
import { connect } from "react-redux";
import { arrayCopy, solveGrid } from "./helper";
import useStopwatch from "./component/stopwatch";
import Number from "./number";
import Sidebar from "./sidebar";

function App(props) {
  const { setGrid, setWon, grid, newGame } = props;
  const { Time } = useStopwatch();

  useEffect(() => {
    let mount = true;
    if (mount) {
      let sudoku = generatorSudoku();
      setGrid(sudoku);
    }
    return () => {
      mount = false;
    };
  }, []);

  const generatorSudoku = () => {
    const raw = generator.makepuzzle().map((e) => (e !== null ? e + 1 : null));
    const results = [];

    for (let i = 0; i < 9; i++) {
      const row = [];
      for (let j = 0; j < 9; j++) {
        const value = raw[i * 9 + j];
        const col = {
          row: i,
          col: j,
          value: value,
          readOnly: value !== null,
          isValid: true,
        };
        row.push(col);
      }
      results.push(row);
    }
    return results;
  };

  const handleNewGame = (e) => {
    e.preventDefault();
    let sudoku = generatorSudoku();
    newGame(sudoku);
  };

  const handleSolve = (e) => {
    e.preventDefault();
    let newBoard = arrayCopy(grid);
    let isSolved = solveGrid(newBoard);

    if (!isSolved) {
      return;
    }
    setWon(true);
    setGrid(newBoard);
  };
  return (
    <div className="App tw_relative tw_h-screen">
      <div className="inner-sudoku tw_block">
        <div className="wrap-top tw_w-full">
          <div className="title tw_w-full tw_flex tw_justify-center tw_pt-4 lg:tw_justify-start lg:tw_px-5">
            SUDOKU
          </div>
        </div>
        <Sidebar handleSolve={handleSolve} />
        <div className="main-game">
          <div className="header-game tw_flex tw_justify-between tw_items-start">
            <button type="button" className="btn-new" onClick={handleNewGame}>
              + New Game
            </button>
            <div className="time">
              <h4>Time Remaining</h4>
              <time>{Time}</time>
            </div>
          </div>
          <Board />
          <Number />
        </div>
      </div>
      <div className="footer tw_absolute tw_bottom-0 tw_w-full lg:tw_hidden">
        <button onClick={handleSolve}>Solve Me</button>
      </div>
    </div>
  );
}

Board.propTypes = {
  grid: PropTypes.array,
  clickValue: PropTypes.number,
  setGrid: PropTypes.func,
  setClickValue: PropTypes.func,
  setMove: PropTypes.func,
  setWon: PropTypes.func,
  newGame: PropTypes.func,
};

const mapStateToProps = ({ sudoku }) => ({
  grid: sudoku.grid,
  clickValue: sudoku.clickValue,
});
const mapDispatchToProps = (dispatch) => ({
  setGrid: (data) => dispatch(SetGrid(data)),
  setClickValue: (value) => dispatch(SetClickValue(value)),
  setMove: (value) => dispatch(SetMove(value)),
  setWon: (value) => dispatch(SetIsWon(value)),
  newGame: (data) => dispatch(NewGame(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
