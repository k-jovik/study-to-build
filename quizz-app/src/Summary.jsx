import React from "react";
import QUESTIONS from "./questions.js";
function Summary({ userAnwsers = [] }) {
  const skippedAnswers = userAnwsers.filter((answer) => answer === null);
  const correctAnswers = userAnwsers.filter(
    (answer, index) => QUESTIONS[index].correctAnswer === answer,
  );
  const incorrectAnswers = userAnwsers.filter(
    (answer, index) => QUESTIONS[index].correctAnswer === answer,
  );
  return (
    <div>
      <h1>QUIZ COMPLETED</h1>
      <div className="flex gap-8"></div>
    </div>
  );
}

export default Summary;
