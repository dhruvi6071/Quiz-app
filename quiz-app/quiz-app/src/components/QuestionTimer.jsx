import { useState,useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout}) {
const [remainingTime, setRemainngTime] = useState(timeout);

useEffect(() => {
    setTimeout(onTimeout, timeout);
}, []);
   
useEffect(() => {
    //If we set only setInterval then it call function and can generate infinite loop again and again therefore use hook "useEffect"/
    setInterval(() => {
        setRemainngTime((prevRemaingTime) => prevRemaingTime -100);
    }, 100); // To remind user that how much time is left.
}, []); 

return <progress id="question-time" max={timeout} value={remainingTime} />;

}
