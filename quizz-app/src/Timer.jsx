import { useState, useEffect } from "react";
function Timer({ time, color, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(time);
  useEffect(() => {
    setRemainingTime(time);

    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    const timerSet = setTimeout(() => {
      onTimeout();
    }, time);

    return () => {
      clearInterval(interval);
      clearTimeout(timerSet);
    };
  }, [time,onTimeout]);

  let colorType = "";
  if (color === "buttonClicked") {
    colorType = "[&::-webkit-progress-value]:bg-yellow-500";
  } else if (color === "correct") {
    colorType = "[&::-webkit-progress-value]:bg-green-500";
  } else if (color === "wrong") {
    colorType = "[&::-webkit-progress-value]:bg-red-500";
  }

  return (
    <div className="w-full">
      <progress
        className={"w-3/4 h-2 block mx-auto " + colorType}
        value={remainingTime}
        max={time}
      />
    </div>
  );
}

export default Timer;
