import { useRef, useImperativeHandle, forwardRef } from "react";
import { createPortal } from "react-dom";
import {} from "react-dom";
export default function ResultModal({
  ref,
  remainingTimeProp,
  targetTime,
  onReset,
}) {
  const dialog = useRef();

  const noTimeLeft = remainingTimeProp <= 0;
  const formattedResultTime = (remainingTimeProp / 1000).toFixed(2);

  const score = Math.round((1 - remainingTimeProp / (targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {noTimeLeft ? <h2>You lost</h2> : <h2>Your score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedResultTime} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
