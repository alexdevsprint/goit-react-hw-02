import css from './Options.module.css'     
function Options({updateFeedback}) {
    return (
        <div className={css.optionsContainer}>
            <button className={css.optionsBtn} onClick={() => updateFeedback('good')} type="button">Good</button>
            <button className={css.optionsBtn} onClick={() => updateFeedback('neutral')} type="button">Neutral</button>
            <button className={css.optionsBtn} onClick={() => updateFeedback('bad')} type="button">Bad</button>
            <button className={css.optionsBtn} type="button">Reset</button>
        </div>
    )
}

export default Options;