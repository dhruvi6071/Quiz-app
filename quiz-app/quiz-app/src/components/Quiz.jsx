import { useState } from "react";
import QUESTIONS from '../questions.js';

export default function Quiz() {
//    const[currentQuestion, setCurrentQuestion] = useState(0); //To manage the data which questions are displayed
// we can simply derive currentQuestion index using number of elements inserted into array of givenAnswers. therefore above line is not needed.   

const[givenAnswer, setGivenAnswer] = useState([]); // To keep track for given answers from the user.
const currentQuestionIndex = givenAnswer.length;

function handleSelectAnswer(selectedAnswer) {
    setGivenAnswer((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
    });
}
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