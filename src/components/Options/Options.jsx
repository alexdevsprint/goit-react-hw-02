import css from './Options.module.css'
function Options() {
    return (
        <div className={css.optionsContainer}>
            <button className={css.optionsBtn} type="button">Good</button>
            <button className={css.optionsBtn} type="button">Neutral</button>
            <button className={css.optionsBtn} type="button">Bad</button>
            <button className={css.optionsBtn} type="button">Reset</button>
        </div>
    )
}

export default Options;