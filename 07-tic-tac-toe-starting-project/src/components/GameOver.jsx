export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game over!</h2>
      {winner && <p>{winner} Won!</p>}
      {winner === null && <p>Its a draw!</p>}
      <button onClick={onRestart}>Rematch!</button>
    </div>
  );
}
