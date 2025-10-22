import { useState } from "react";

export default function Player({ playerName, symbol, isActive, onChangeName }) {
  const [initalPlayer, setPlayerName] = useState(playerName);
  const [isEditing, setIsEditing] = useState(false);

  function editButton() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, initalPlayer);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  let btnCaption = isEditing ? "Save" : "Edit";

  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {!isEditing ? (
            <span className="player-name">{initalPlayer}</span>
          ) : (
            <input
              type="text"
              required
              value={initalPlayer}
              onChange={handleChange}
            />
          )}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={editButton}>{btnCaption}</button>
      </li>
    </>
  );
}
