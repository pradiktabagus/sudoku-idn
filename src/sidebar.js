import React from "react";
import PropTypes from "prop-types";

function Sidebar(props) {
  const { handleSolve } = props;
  return (
    <div className="tw_w-6/12 tw_p-10 tw_px-24 tw_relative">
      <div className="inner-sidebar tw_hidden lg:tw_block">
        <div className="tw_text-5xl tw_font-bold tw_mt-16">
          Play <br /> Sudoku!
        </div>
        <div className="tw_mt-9 tw_text-base tw_max-w-xs">
          You can complete this sudoku with your abilities or click the button
          bellow to finish it automatically
        </div>
        <button
          onClick={handleSolve}
          className="btn-solve tw_w-96 tw_h-11 tw_rounded tw_mt-3"
          type="button"
        >
          Solve Me!
        </button>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  handleNewGame: PropTypes.func,
};

export default Sidebar;
