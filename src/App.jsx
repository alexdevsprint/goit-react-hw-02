import css from "./App.module.css";

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

import { useState } from 'react';

function App() {
  const [ clicks, setClicks ] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const updateFeedback = feedbackType => {
    // Тут використовуй сеттер, щоб оновити стан
    console.log(feedbackType)
    setClicks ({...clicks, 
      [feedbackType]: clicks[feedbackType] + 1,
  });
   }

  return (
    <div className={css.container}>
      <Description />
      <Options onUpdate={updateFeedback}/>
      <Feedback />
    </div>
  );
}

export default App;
