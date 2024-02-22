import { useState,useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout}) {
const [remainingTime, setRemainngTime] = useState(timeout);

useEffect(() => {
    console.log("time out");
    setTimeout(onTimeout, timeout);
}, [timeout, onTimeout]);
   
useEffect(() => {
    console.log("set time");
    //If we set only setInterval then it call function and can generate infinite loop again and again therefore use hook "useEffect"/
    setInterval(() => {
        setRemainngTime((prevRemaingTime) => prevRemaingTime -100);
    }, 100); // To remind user that how much time is left.
}, []); 

return <progress id="question-time" max={timeout} value={remainingTime} />;

}
