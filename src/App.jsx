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

  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  return (
    <div className={css.container}>
      <Description />
      <Options feedback={feedback} updateFeedback={updateFeedback} />
      {feedback.good > 0 || feedback.neutral > 0 || feedback.bad > 0 ? (
        <Feedback feedback={feedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
