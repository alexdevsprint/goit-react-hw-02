import css from "./App.module.css";

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

function App() {
  return (
    <div className={css.container}>
      <Description />
      <Options />
      <Feedback />
    </div>
  );
}

export default App;
