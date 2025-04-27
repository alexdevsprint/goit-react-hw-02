import css from './Options.module.css'     
function Options({onUpdate}) {
    return (
        <div className={css.optionsContainer}>
            <button className={css.optionsBtn} onClick={() => onUpdate('good')} type="button">Good</button>
            <button className={css.optionsBtn} onClick={() => onUpdate('neutral')} type="button">Neutral</button>
            <button className={css.optionsBtn} onClick={() => onUpdate('bad')} type="button">Bad</button>
            <button className={css.optionsBtn} type="button">Reset</button>
        </div>
    )
}

export default Options;