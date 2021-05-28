import { useState, useEffect } from "react";

import { checkTicTacToeWin } from "../../utils/ticTacToe.utils";

import "./styles.scss";

function TicTacBoard() {
  const [game, setGame] = useState(false);
  const [turn, setTurn] = useState("X");
  const [isWinner, setIsWinner] = useState(false);

  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  function changeTurnAndBoard(rowIndex, cellIndex) {
    const newBoard = [...board];
    newBoard[rowIndex][cellIndex] = turn;
    setBoard(newBoard);

    if (checkTicTacToeWin(newBoard, turn)) {
      setIsWinner(true);
    } else {
      setTurn(turn === "X" ? "O" : "X");
    }
  }

  useEffect(() => {
    if (isWinner) {
      setTimeout(() => {
        setIsWinner(false);
        setBoard([
          [null, null, null],
          [null, null, null],
          [null, null, null],
        ]);
      }, 1500);
    }
  }, [isWinner, turn]);

  const playerWin = `${turn + " Wins!! "}`;

  return (
    <div className="TicTacBoard">
      <p
        className={
          isWinner === false
            ? "TicTacBoard__message--off"
            : "TicTacBoard__message--on"
        }
      >
        {playerWin}
      </p>
      <button
        className={!game ? "TicTacBoard__btn" : "TicTacBoard__btn--off"}
        onClick={() => {
          setGame(!game);
        }}
      >
        {!game ? <p>Start the game</p> : <p>Close the game</p>}
      </button>
      {game ? (
        <div className="TicTacBoard__board">
          <p className="TicTacBoard__turn">It's the turn of {turn}</p>
          {board.map((row, rowIndex) => {
            return (
              <div key={rowIndex} className="TicTacBoard__row">
                {row.map((cell, cellIndex) => {
                  return (
                    <button
                      key={cellIndex}
                      onClick={() => {
                        if (!cell) {
                          changeTurnAndBoard(rowIndex, cellIndex);
                        }
                      }}
                      className={`TicTacBoard__cell--btn ${
                        cell === "X" ? "X-turn" : ""
                      }`}
                    >
                      {cell}
                    </button>
                  );
                })}
              </div>
            );
          })}
          {board.filter((board) => board[0] || board[1] || board[2] !== null)
            .length
            ? (console.log(board),
              (
                <button
                  className="TicTacBoard__btn TicTacBoard__re-start-btn"
                  onClick={() => {
                    setBoard([
                      [null, null, null],
                      [null, null, null],
                      [null, null, null],
                    ]);
                    setIsWinner(false);
                  }}
                >
                  Re start the game
                </button>
              ))
            : null}
        </div>
      ) : null}
    </div>
  );
}
export default TicTacBoard;
