import React from "react";
import PropTypes from "prop-types";

function SudokuField(props) {
  const { field, onChange } = props;
  const bgColor = (field.col + field.row) % 2 === 0 ? "genap" : "ganjil";

  const handleChange = (e) => {
    const value = value === "" ? "" : parseInt(e.target.value, 10);
    onChange({ ...field, value: value });
  };
  return (
    <input
      className={`field ${bgColor}`}
      value={field.value || ""}
      readOnly={field.readOnly}
      onChange={handleChange}
    />
  );
}

SudokuField.propTypes = {};

export default SudokuField;
