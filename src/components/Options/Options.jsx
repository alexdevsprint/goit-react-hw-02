import css from "./Options.module.css";
function Options({ feedback, updateFeedback, resetFeedback, totalFeedback}) {
  return (
    <div className={css.optionsContainer}>
      <button
        className={css.optionsBtn}
        onClick={() => updateFeedback("good")}
        type="button"
      >
        Good
      </button>
      <button
        className={css.optionsBtn}
        onClick={() => updateFeedback("neutral")}
        type="button"
      >
        Neutral
      </button>
      <button
        className={css.optionsBtn}
        onClick={() => updateFeedback("bad")}
        type="button"
      >
        Bad
      </button>

      {(totalFeedback > 0) && (
          <button className={css.optionsBtn} onClick={() => resetFeedback()} type="button">
            Reset
          </button>
        )}
    </div>
  );
}

export default Options;
