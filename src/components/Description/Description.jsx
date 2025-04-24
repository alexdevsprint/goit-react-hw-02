import css from './Description.module.css'
function Description() {
    return (
        <div className={css.descriptionContainer}>
            <h1 className={css.descriptionTitle}>Sip Happens Café</h1>
            <p className={css.descriptionDesc}>Please leave your feedback about our service by selecting one of the options below.</p>
        </div>

    );
}

export default Description;