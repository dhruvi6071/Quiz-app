import { useState,useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout}) {
const [remainingTime, setRemainngTime] = useState(timeout);

useEffect(() => {
    console.log("time out");
    const timer = setTimeout(onTimeout, timeout);

    return() => {
        clearTimeout(timer);
    };
}, [timeout, onTimeout]);
   
useEffect(() => {
    console.log("set time inteerval");
    //If we set only setInterval then it call function and can generate infinite loop again and again therefore use hook "useEffect"/
    const interval = setInterval(() => {
        setRemainngTime((prevRemaingTime) => prevRemaingTime -100);
    }, 100); // To remind user that how much time is left.

    // So that timeline won't be executed twice and work properly according to time. this is also known as clean up function.
  return () => {
    clearInterval(interval);
  }
}, []); 

return <progress id="question-time" max={timeout} value={remainingTime} />;

}
