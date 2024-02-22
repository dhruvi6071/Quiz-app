import { useState } from "react";
import QUESTIONS from '../questions.js';
import image from '../assets/quiz-complete.png';

export default function Quiz() {
// const[currentQuestion, setCurrentQuestion] = useState(0); //To manage the data which questions are displayed
// we can simply derive currentQuestion index using number of elements inserted into array of givenAnswers. therefore above line is not needed.   

const[givenAnswer, setGivenAnswer] = useState([]); // To keep track for given answers from the user.
const currentQuestionIndex = givenAnswer.length;
const quizIsComplete = currentQuestionIndex === QUESTIONS.length; // To make sure that number of questions does not exceed the limit. (On finish point it finishes smoothly without causing the site break) 


function handleSelectAnswer(selectedAnswer) {
    setGivenAnswer((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
    });
}

if(quizIsComplete){
    return (<div id="summary">
        <img src={image} alt="Winning-trophy-image"/>
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
        <h2>{QUESTIONS[currentQuestionIndex].text}</h2>
        <ul id="answers">
            {QUESTIONS[currentQuestionIndex].answers.map(answer => (
                <li key={answer} className="answer">
                    <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                </li>
            ))}
        </ul>
    </div>
    </div>
   );
}