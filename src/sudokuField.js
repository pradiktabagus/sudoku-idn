import React from "react";
import PropTypes from "prop-types";

function SudokuField(props) {
  const { field } = props;
  const bgColor = (field.col + field.row) % 2 === 0 ? "genap" : "ganjil";
  return <input className={`field ${bgColor}`} value={field.value} />;
}

SudokuField.propTypes = {};

export default SudokuField;
