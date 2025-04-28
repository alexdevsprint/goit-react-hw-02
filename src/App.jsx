import css from "./App.module.css";

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

import { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const PositiveFeedback = Math.round((feedback.good / totalFeedback) * 100)

  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };
  const resetFeedback = () => {
    setFeedback(
      {
        good: 0,
        neutral: 0,
        bad: 0,
      }
    );
  }

  return (
    <div className={css.container}>
      <Description />
      <Options feedback={feedback} updateFeedback={updateFeedback} resetFeedback={resetFeedback}/>
      {feedback.good > 0 || feedback.neutral > 0 || feedback.bad > 0 ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} PositiveFeedback={PositiveFeedback}/>
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
