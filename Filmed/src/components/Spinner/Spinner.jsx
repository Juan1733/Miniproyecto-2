import styles from './Spinner.module.css'

export function Spinner() {
    return (
        <div className={`d-flex justify-content-center align-items-center ${styles.container}`}>

            <div className={`spinner-grow ${styles.green} me-4 ${styles.spinner}`} role="status"></div>

            <div className={`spinner-grow text-secondary me-4 ${styles.spinner}`} role="status"></div>

            <div className={`spinner-grow ${styles.green} ${styles.spinner}`} role="status"></div>

        </div>
    );
}