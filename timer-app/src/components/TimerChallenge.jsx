import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timeout, setTimeoutExpired] = useState(false);

  const timer = useRef();
  const dialog = useRef();

  function startButton() {
    setTimerStarted(true);
    setTimeoutExpired(false);
    timer.current = setTimeout(() => {
      setTimeoutExpired(true);
      setTimerStarted(false);
      dialog.current.open();
    }, targetTime * 1000);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimerStarted(false);
    setTimeoutExpired(false);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime}  result='You lost'/>
      <section className="challenge">
        <h2> {title} </h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : startButton}>
            {timerStarted ? "Stop Challenge" : "Start Challenge"}
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Timer is running" : "Timer is inavtive"}
        </p>
      </section>
    </>
  );
}
