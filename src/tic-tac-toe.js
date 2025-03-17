// tic-tac-toe.js
function repeat(initVal, length) {
  return Array(length).fill(initVal);
}

function generateBoard(rows, cols, initialValue) {
  const blankValue = initialValue || " ";
  return repeat(blankValue, rows * cols);
}

export {
  generateBoard
};


function boardFromString(s) {
  const length = s.length;
  const size = Math.sqrt(length);
  if (!Number.isInteger(size)) {
      return null;
  }
  for (const char of s) {
      if (char !== ' ' && char !== 'X' && char !== 'O') {
          return null;
      }
  }
  return s.split('');
}
export { boardFromString };



function rowColToIndex(board, row, col) {
  const size = Math.sqrt(board.length);
  return row * size + col; 
}
export { rowColToIndex };



function indexToRowCol(board, i) {
  const size = Math.sqrt(board.length);
  return {
      row: Math.floor(i / size),
      col: i % size
  };
}
export { indexToRowCol };



function setBoardCell(board, letter, row, col) {
  const newBoard = board.slice(); 
  const index = rowColToIndex(board, row, col); 
  newBoard[index] = letter;
  return newBoard;
}
export { setBoardCell };



function algebraicToRowCol(algebraicNotation) {
  if (typeof algebraicNotation !== 'string' || algebraicNotation.length < 2) {
      return undefined;
  }
  const rowChar = algebraicNotation[0];
  const colStr = algebraicNotation.slice(1);
  if (!/^[A-Z]$/.test(rowChar)) {
      return undefined;
  }
  if (!/^[1-9][0-9]*$/.test(colStr)) {
      return undefined;
  }
  const row = rowChar.charCodeAt(0) - 'A'.charCodeAt(0);
  const col = parseInt(colStr, 10) - 1;
  return { row, col };
}
export { algebraicToRowCol };



function placeLetter(board, letter, algebraicNotation) {
  const position = algebraicToRowCol(algebraicNotation);
  if (!position){
    return board;
  }
  return setBoardCell(board, letter, position.row, position.col);
}
export { placeLetter };



function getWinner(board) {
  const size = Math.sqrt(board.length);
  const lines = [];

  for (let i = 0; i < size; i++) {
      lines.push(board.slice(i * size, (i + 1) * size));
      lines.push(board.filter((_, index) => index % size === i));
  }
 
  lines.push(board.filter((_, index) => index % (size + 1) === 0));
  lines.push(board.filter((_, index) => index % (size - 1) === 0 && index !== 0 && index !== board.length - 1));

  for (const line of lines) {
      if (line.every(cell => cell === 'X')){
        return 'X';
      }
      if (line.every(cell => cell === 'O')){
        return 'O';
      }
  }
  return undefined;
}
export { getWinner };


function isBoardFull(board) {
  return !board.includes(" ");
}
export { isBoardFull };


function isValidMove(board, algebraicNotation) {
  const position = algebraicToRowCol(algebraicNotation);
  if (!position){
    return false;
  }
  
  const size = Math.sqrt(board.length);
  if (position.row < 0 || position.row >= size || position.col < 0 || position.col >= size) {
      return false;
  }
  
  const index = rowColToIndex(board, position.row, position.col);
  return board[index] === " ";
}
export { isValidMove };