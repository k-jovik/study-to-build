import React from "react";
import Timer from "./Timer";
import QUESTIONS from './questions.js'
import Question from "./Question";
function Quiz() {
  return (
    <div className="flex flex-col gap-5 h-full w-full min-h-screen pt-10 items-center">
      <h1 className="text-center ">REACT QUIZ</h1>
      <div className="bg-purple-950 w-3/4 min-h-100 flex flex-col items-center">
        <Timer/>
        <Question/>
      </div>
    </div>
  );
}

export default Quiz;
