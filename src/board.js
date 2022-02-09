import React from "react";
import PropTypes from "prop-types";
import Field from "./sudokuField";
import { connect } from "react-redux";
import { SetMove, SetIsWon, SetGrid } from "./state/action";
import { arrayCopy, checkBoard, isPlayerWon } from "./helper";
function Board(props) {
  const { onChange, grid, clickValue, setMove, setWon, setGrid } = props;

  const onClickBoard = (row, column, readOnly, value) => {
    if (readOnly) {
      return;
    }
    let newValue = value ? value : clickValue;
    if (newValue !== 0) setMove((moves) => moves + 1);

    let newGrid = arrayCopy(grid);
    newGrid[row][column].value = newValue;

    checkBoard(newGrid);
    let isWon = isPlayerWon(newGrid);
    if (isWon) {
      setWon(isWon);
    }
    setGrid(newGrid);
  };
  return (
    <div className="card-game tw_mt-5">
      {grid?.map((row) => (
        <div className="row" key={row.index}>
          {row.map((field) => (
            <Field
              onCallback={onClickBoard}
              field={field}
              key={field.col}
              onChange={onChange}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

Board.propTypes = {
  grid: PropTypes.array,
  clickValue: PropTypes.number,
  setMove: PropTypes.func,
  setWon: PropTypes.func,
  setGrid: PropTypes.func,
};
const mapStateToProps = ({ sudoku }) => ({
  grid: sudoku.grid,
  clickValue: sudoku.clickValue,
});

const mapDispatchToProps = (dispatch) => ({
  setMove: (value) => dispatch(SetMove(value)),
  setWon: (value) => dispatch(SetIsWon(value)),
  setGrid: (data) => dispatch(SetGrid(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
