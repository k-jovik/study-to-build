import Timer from "./Timer";
import QUESTIONS from "./questions.js";
import Question from "./Question";
import { useState, React } from "react";
import Anwsers from "./Anwsers.jsx";
import { useCallback } from "react";

function Quiz() {
  const [userAnwsers, setUserAnwsers] = useState([]);
  const [select, setSelectedAnwser] = useState("");
  
  

  let timerDuration = 10000;
  if (select === "buttonClicked") {
    timerDuration = 1000;
  } else if (select === "correct" || select === "wrong") {
    timerDuration = 2000;
  }

  const currentIndex = userAnwsers.length;
  console.log("questions" ,QUESTIONS[currentIndex]);

  const handleSelectUser = useCallback(
    function handleSelectUser(anwser) {
      if (anwser === null) {
        setUserAnwsers((prevAnwsers) => {
          return [...prevAnwsers, null];
        });
        return;
      }

      setSelectedAnwser("buttonClicked");

      setTimeout(() => {
        if (anwser === QUESTIONS[currentIndex].answers[0]) {
          setSelectedAnwser("correct");
        } else {
          setSelectedAnwser("wrong");
        }

        setTimeout(() => {
          setUserAnwsers((prevSelected) => {
            return [...prevSelected, anwser];
          });
          setSelectedAnwser("");
        }, 2000);
      }, 1000);
    },
    [currentIndex],
  );

  const updateTime = useCallback(
    function updateTime() {
      handleSelectUser(null);
    },
    [handleSelectUser],
  );

  const quizComplete = currentIndex === QUESTIONS.length;
  if (quizComplete){
    return (
      <div>
        <p>Quiz complete</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-5 h-full w-full min-h-screen pt-10 items-center">
      <h1 className="text-center ">REACT QUIZ</h1>
      <div className="bg-purple-950 w-3/4 min-h-100 flex flex-col items-center gap-3 p-8">
        <Timer color={select} time={timerDuration} onTimeout={updateTime} />
        <Question text={QUESTIONS[currentIndex].text} />
        <Anwsers
          onSelect={handleSelectUser}
          answers={QUESTIONS[currentIndex].answers}
        />
      </div>
    </div>
  );
}

export default Quiz;
