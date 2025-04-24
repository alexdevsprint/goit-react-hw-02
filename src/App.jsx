import css from "./App.module.css";

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";

function App() {
  return (
    <div className={css.container}>
      <Description />
      <Options />
    </div>
  );
}

export default App;
