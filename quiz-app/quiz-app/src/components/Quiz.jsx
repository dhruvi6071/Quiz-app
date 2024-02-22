import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import image from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
  // const[currentQuestion, setCurrentQuestion] = useState(0); //To manage the data which questions are displayed
  // we can simply derive currentQuestion index using number of elements inserted into array of givenAnswers. therefore above line is not needed.

  const [givenAnswer, setGivenAnswer] = useState([]); // To keep track for given answers from the user.
  const currentQuestionIndex = givenAnswer.length;
  const quizIsComplete = currentQuestionIndex === QUESTIONS.length; // To make sure that number of questions does not exceed the limit. (On finish point it finishes smoothly without causing the site break)
 const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
        setGivenAnswer((prevUserAnswers) => {
          return [...prevUserAnswers, selectedAnswer];
        });
      }, []);
  

  const handleSkipQuestion = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={image} alt="Winning-trophy-image" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  // const currentQuestionIndex = givenAnswer.length;
  const shuffleAnswer = [...QUESTIONS[currentQuestionIndex].answers];
  shuffleAnswer.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="questions">
        <QuestionTimer
        //  key is used because question is not reset anymore and it can't be changed after time finishes.
        key={currentQuestionIndex}  
        timeout={10000}
          onTimeout={handleSkipQuestion}
        />
        {/*Here null tells that no answer is chosen therefore answer is null*/}
        <h2>{QUESTIONS[currentQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffleAnswer.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
