export default function Answers() {
  return (
    <>
      <ul id="answers">
        {shuffledAnswers.current.map((answer) => {
          const isSelected = selectedAnswer === answer;
          let cssClass = "";

          if (answerState === "answered" && isSelected) {
            cssClass = "selected";
          }

          if (
            (answerState === "correct" || answerState === "wrong") &&
            isSelected
          ) {
            cssClass = answerState;
          }

          return (
            <li key={answer} className="answer">
              <button
                onClick={() => onSelect(answer)}
                className={cssClass}
                disabled={answerState !== ""}
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
