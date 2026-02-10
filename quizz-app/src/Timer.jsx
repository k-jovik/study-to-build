import React from "react";
import { useState, useEffect } from "react";
function Timer({ time }) {
  const [remainingTime, setRemainingTime] = useState(3000);
  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);
  }, []);

  return (
    <div className="pt-8 w-full">
      <progress
        className="w-3/4 h-2 block mx-auto"
        value={remainingTime}
        max={3000}
      />
    </div>
  );
}

export default Timer;
