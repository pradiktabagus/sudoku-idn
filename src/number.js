import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SetClickValue } from "./state/action";
function Number(props) {
  const { clickValue, setClickValue } = props;
  const row = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="card-btn">
      {row.map((item) => {
        let classStyle = item === clickValue ? "selected" : "not-selected";
        return (
          <button className={classStyle} onClick={() => setClickValue(item)}>
            {item}
          </button>
        );
      })}
    </div>
  );
}

Number.propTypes = {
  clickValue: PropTypes.number,
  setClickValue: PropTypes.func,
};
const mapStateToProps = ({ sudoku }) => ({
  clickValue: sudoku.clickValue,
});
const mapDispatchToProps = (dispatch) => ({
  setClickValue: (value) => dispatch(SetClickValue(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Number);
