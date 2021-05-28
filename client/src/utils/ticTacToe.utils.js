export function checkTicTacToeWin(board, turn) {
    const firstRow = board[0];
    const secondRow = board[1];
    const thirdRow = board[2];

    /* Comprobamos las filas */
    if (firstRow[0] === turn && firstRow[1] === turn && firstRow[2] === turn) {
      return true;
    } else if (
      secondRow[0] === turn &&
      secondRow[1] === turn &&
      secondRow[2] === turn
    ) {
      return true;
    } else if (
      thirdRow[0] === turn &&
      thirdRow[1] === turn &&
      thirdRow[2] === turn
    ) {
      return true;
    } /* Comprobamos la primera columna */ else if (
      firstRow[0] === turn &&
      secondRow[0] === turn &&
      thirdRow[0] === turn
    ) {
      return true;
    } else if (
      firstRow[1] === turn &&
      secondRow[1] === turn &&
      thirdRow[1] === turn
    ) {
      return true;
    } else if (
      firstRow[2] === turn &&
      secondRow[2] === turn &&
      thirdRow[2] === turn
    ) {
      return true;
    } else if (
      firstRow[0] === turn &&
      secondRow[1] === turn &&
      thirdRow[2] === turn
    ) {
      return true;
    } else if (
      firstRow[2] === turn &&
      secondRow[1] === turn &&
      thirdRow[0] === turn
    ) {
      return true;
    } else {
      return false;
    }
}