import css from "./App.module.css";

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

import { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    // Тут використовуй сеттер, щоб оновити стан

    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
    console.log(feedback);
  };

  return (
    <div className={css.container}>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback feedback={feedback} />
    </div>
  );
}

export default App;
