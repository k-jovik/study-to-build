export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, index) => (
        <li key={index}>
          Player: {turn.player} Selected Row: {turn.square.row + 1} Selected
          Col: {turn.square.col + 1}
        </li>
      ))}
    </ol>
  );
}
