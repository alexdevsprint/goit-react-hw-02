import css from "./Feedback.module.css";
function Feedback({ feedback, totalFeedback, PositiveFeedback }) {
  return (
    <div>
      <ul>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {PositiveFeedback}%</li>
      </ul>
    </div>
  );
}

export default Feedback;
