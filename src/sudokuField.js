import React from "react";
import PropTypes from "prop-types";

function SudokuField(props) {
  const { field, onCallback } = props;
  const bgColor = (field.col + field.row) % 2 === 0 ? "genap" : "ganjil";

  const handleChange = (e) => {
    const { value } = e.target;
    if (parseInt(value) > 9) {
      return;
    }
    onCallback(field.row, field.col, field.readOnly, parseInt(value));
  };
  return (
    <input
      className={`field ${bgColor}`}
      value={field.value || ""}
      readOnly={field.readOnly}
      onChange={handleChange}
      onClick={() => onCallback(field.row, field.col, field.readOnly)}
    />
  );
}

SudokuField.propTypes = {
  field: PropTypes.object,
  onCallback: PropTypes.func,
};

export default SudokuField;
