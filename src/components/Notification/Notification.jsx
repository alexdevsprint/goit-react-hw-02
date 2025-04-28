import css from "./Notification.module.css"
function Notification () {
    return (
        <div>
            <p className={css.notificationText}>No feedback yet</p>
        </div>
    )
}

export default Notification;