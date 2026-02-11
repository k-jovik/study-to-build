import React from "react";

function Anwsers({ answers,onSelect }) {
  return (
    <div>
      <ul className="flex flex-col gap-8">
        {answers.map((anwser) => {
          return (
            <li className="text-center">
              <button className="p-4 bg-blue-400 rounded-2xl" onClick={onSelect}>{anwser}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Anwsers;
