import React from "react";
import QUESTIONS from "./questions.js";

function Summary({ userAnwsers = [] }) {
  const skippedAnswers = userAnwsers.filter((answer) => answer === null);
  const correctAnswers = userAnwsers.filter(
    (answer, index) => QUESTIONS[index].correctAnswer === answer,
  );
  const incorrectAnswers = userAnwsers.filter(
    (answer, index) =>
      QUESTIONS[index].correctAnswer !== answer && answer !== null,
  );

  const total = userAnwsers.length || 1; // Prevent division by zero
  //Percentages
  const skippedShare = ((skippedAnswers.length / total) * 100).toFixed(0);
  const correctShare = ((correctAnswers.length / total) * 100).toFixed(0);
  const incorrectShare = ((incorrectAnswers.length / total) * 100).toFixed(0);

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col gap-6 max-w-2xl items-center p-10 w-full bg-purple-800 ">
        <h1 className="text-6xl uppercase py-4 text-[#30273a]">QUIZ COMPLETED!</h1>
        
        {/* CHANGED: Removed w-full, added pb-8 and specific border color */}
        <div className="flex justify-center gap-10 text-[#30273a] border-b-2 border-[#30273a] pb-8">
          <div className="flex flex-col gap-2 items-center text-center">
            <span className="text-4xl">{skippedShare}%</span>
            <span className="text-[18px] opacity-60">SKIPPED</span>
          </div>
          <div className="flex flex-col gap-2 items-center text-center">
            <span className="text-4xl">{correctShare}%</span>
            <span className="text-[18px] opacity-60">
              ANSWERED
              <br />
              CORRECTLY
            </span>
          </div>
          <div className="flex flex-col gap-2 items-center text-center">
            <span className="text-4xl">{incorrectShare}%</span>
            <span className="text-[18px] opacity-60">
              ANSWERED
              <br />
              INCORRECTLY
            </span>
          </div>
        </div>
        <div className="pt-8">
          <ol>
            
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Summary;