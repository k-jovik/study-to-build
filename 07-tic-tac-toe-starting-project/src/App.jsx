import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

import { useState } from "react";

import Log from "./components/Log.jsx";

import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2"
}

const initalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function activePlayerFunc(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function deriveGameBoard(gameTurns) {
    let gameBoard = [...initalGameBoard.map((innerArr) => [...innerArr])];
    for (const turn of gameTurns) {
      const { square, player } = turn;
      const { row, col } = square;
      gameBoard[row][col] = player;
    }
    return gameBoard;
  }

  function deriveWinner(gameBoard, players) {
    let winner;
    for (const combination of WINNING_COMBINATIONS) {
      const firstSquareSymbol =
        gameBoard[combination[0].row][combination[0].column];
      const secondSquareSymbol =
        gameBoard[combination[1].row][combination[1].column];
      const thirdSquareSymbol =
        gameBoard[combination[2].row][combination[2].column];

      if (
        firstSquareSymbol &&
        firstSquareSymbol === secondSquareSymbol &&
        firstSquareSymbol === thirdSquareSymbol
      ) {
        winner = players[firstSquareSymbol];
      }

      // if (gameTurns.length === 9 && winner === null) {
      //   draw = true;
      // }
    }
    return winner;
  }

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const [players, setPlayer] = useState(PLAYERS);



// Constants from derived functions
  const activePlayer = activePlayerFunc(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const draw = gameTurns.length === 9 && !winner



//Derived functions

  function stateChange(rowIndex, colIndex) {
    setGameTurns((prevGameTurns) => {
      let localPlayer = activePlayerFunc(prevGameTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: localPlayer },
        ...prevGameTurns,
      ];
      return updatedTurns;
    });
  }

  function changePlayerName(symbol, newName) {
    setPlayer((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            playerName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={changePlayerName}
          />
          <Player
            playerName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={changePlayerName}
          />
        </ol>
        {(winner || draw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={stateChange} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
