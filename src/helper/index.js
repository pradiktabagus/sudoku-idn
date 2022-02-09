const arrayCopy = (arr) => {
  let newArray = JSON.parse(JSON.stringify(arr));
  return newArray;
};

const getWrongLines = (board, type) => {
  let wrongLines = new Set();

  for (let i = 0; i < 9; i++) {
    let dict = {};

    for (let j = 0; j < 9; j++) {
      let key;
      if (type === "horizontal") key = board[i][j].value;
      else key = board[j][i].value;

      if (key === 0) continue;

      if (Object.hasOwnProperty.call(dict, key)) {
        dict[key] += 1;
        if (dict[key] > 1) {
          wrongLines.add(i);
          break;
        }
      } else dict[key] = 1;
    }
  }
  return wrongLines;
};

const isBoxValid = (board, x0, y0) => {
  let dict = {};

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let key = board[x0 + i][y0 + j].value;
      if (key === 0) continue;

      if (Object.hasOwnProperty.call(dict, key)) {
        dict[key] += 1;
        if (dict[key] > 1) {
          console.log(x0, y0);
          return false;
        }
      } else dict[key] = 1;
    }
  }
  return true;
};

const getWrongBoxes = (board) => {
  let wrongBoxes = new Set();
  let boxValues = {
    0: { x: 0, y: 0 },
    1: { x: 0, y: 3 },
    2: { x: 0, y: 6 },
    3: { x: 3, y: 0 },
    4: { x: 3, y: 3 },
    5: { x: 3, y: 6 },
    6: { x: 6, y: 0 },
    7: { x: 6, y: 3 },
    8: { x: 6, y: 6 },
  };

  for (let box = 0; box < 9; box++) {
    let x0 = boxValues[box].x;
    let y0 = boxValues[box].y;

    if (!isBoxValid(board, x0, y0)) {
      wrongBoxes.add(box);
    }
  }

  return wrongBoxes;
};

const getBoxNumber = (x, y) => {
  let x0 = Math.floor(x / 3);
  let y0 = Math.floor(y / 3);
  let BoxNumber = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ][x0][y0];
  return BoxNumber;
};

const checkBoard = (board) => {
  let wrongHorizontal = getWrongLines(board, "horizontal");
  let wrongVertical = getWrongLines(board, "vertical");
  let wrongBoxes = getWrongBoxes(board);

  console.log(getBoxNumber(1, 5));
  console.log(wrongBoxes);

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (
        wrongHorizontal.has(i) ||
        wrongVertical.has(j) ||
        wrongBoxes.has(getBoxNumber(i, j))
      ) {
        board[i][j].isValid = false;
      } else {
        board[i][j].isValid = true;
      }
    }
  }
};

const isPlayerWon = (board) => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j].value === 0 || board[i][j].isValid === false) {
        return false;
      }
    }
  }
  return true;
};

const isValidNode = (row, col, value, board) => {
  const cellValue = value;

  //horizontal
  for (let i = 0; i < 9; i++) {
    if (board[row][i].value === cellValue) return false;
  }

  //Vertucal
  for (let i = 0; i < 9; i++) {
    if (board[i][col].value === cellValue) return false;
  }

  let x0 = Math.floor(row / 3) * 3;
  let y0 = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[x0 + i][y0 + j].value === cellValue) return false;
    }
  }

  return true;
};

const solveGrid = (board) => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j].value === null) {
        for (let k = 1; k <= 9; k++) {
          if (isValidNode(i, j, k, board)) {
            board[i][j].value = k;
            if (solveGrid(board)) return true;
            board[i][j].value = null;
          }
        }
        return false;
      }
    }
  }
  return true;
};

export { arrayCopy, checkBoard, isPlayerWon, solveGrid };
