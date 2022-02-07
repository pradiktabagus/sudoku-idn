import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App tw_relative tw_h-screen">
      <div className="inner-sudoku tw_block">
        <div className="wrap-top tw_w-full">
          <div className="title tw_w-full tw_flex tw_justify-center tw_pt-4 lg:tw_justify-start lg:tw_px-5">
            SUDOKU
          </div>
        </div>
        <div className="tw_w-6/12 tw_p-10 tw_px-24 tw_relative">
          <div className="inner-sidebar tw_hidden lg:tw_block">
            <div className="tw_text-5xl tw_font-bold tw_mt-16">
              Play <br /> Sudoku!
            </div>
            <div className="tw_mt-9 tw_text-base tw_max-w-xs">
              You can complete this sudoku with your abilities or click the
              button bellow to finish it automatically
            </div>
            <button
              className="btn-solve tw_w-96 tw_h-11 tw_rounded tw_mt-3"
              type="button"
            >
              Solve Me!
            </button>
          </div>
        </div>
        <div className="main-game">
          <div className="header-game tw_flex tw_justify-between tw_items-start">
            <button type="button" className="btn-new">
              + New Game
            </button>
            <div className="time">
              <h4>Time Remaining</h4>
              <time>05:00:00</time>
            </div>
          </div>
          <div className="card-game tw_mt-5"></div>
        </div>
      </div>
      <div className="footer tw_absolute tw_bottom-0 tw_w-full lg:tw_hidden">
        <button>Solve Me</button>
      </div>
    </div>
  );
}

export default App;
