import React from "react";
import PropTypes from "prop-types";
import Field from "./sudokuField";
function Board(props) {
  const { sudoku } = props;
  return (
    <React.Fragment>
      {sudoku.rows?.map((row) => (
        <div className="row" key={row.index}>
          {row.cols.map((field) => (
            <Field field={field} key={field.col} />
          ))}
        </div>
      ))}
    </React.Fragment>
  );
}

Board.propTypes = {};

export default Board;
