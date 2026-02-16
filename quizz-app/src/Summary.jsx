import React from "react";
import QUESTIONS from "./questions.js";
import StatsComponent from "./StatsComponent.jsx";
import QuestionItem from "./QuestionItem.jsx";
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
      <div className="flex flex-col gap-6 max-w-2xl items-center p-10 w-full bg-purple-300 ">
        <h1 className="text-6xl uppercase py-4 text-[#30273a]">
          QUIZ COMPLETED!
        </h1>

        <StatsComponent
          skippedShare={skippedShare}
          correctShare={correctShare}
          incorrectShare={incorrectShare}
        />
        {userAnwsers.map((answer, index) => (
          <QuestionItem
            className="pt-8"
            answer={answer}
            index={index}
            key={index}
            question={QUESTIONS[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default Summary;
