import css from "./Feedback.module.css";
function Feedback({feedback}) {
    console.log(feedback.good)
  return (
    <div>
      <ul>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total:</li>
        <li>Positive:</li>
      </ul>
    </div>
  );
}

export default Feedback;
