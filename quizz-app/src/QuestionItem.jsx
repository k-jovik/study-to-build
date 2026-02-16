import React from "react";

function QuestionItem({ answer, index, question }) {
  let cssClass = "";
  if (answer === question.correctAnswer) {
    cssClass = "text-[#14521f] font-bold";
  } else if (answer !== question.correctAnswer) {
    cssClass = "text-[#730b4b] font-bold";
  }

  return (
    <ol>
      <div className="flex flex-col gap-4 items-center">
        <span className="flex justify-center items-center w-8 h-8 bg-black rounded-full text-white">
          {index + 1}
        </span>
        <p>{question.text}</p>
        <p className={cssClass}>{answer}</p>
      </div>
    </ol>
  );
}

export default QuestionItem;
