import { useState } from "react";

export default function Quiz() {
   const[currentQuestion, setCurrentQuestion] = useState(0); //To manage the data which questions are displayed
   const[givenAnswer, setGivenAnswer] = useState([]); // To keep track for given answers from the user.

   return <p>Question on Display</p>
}