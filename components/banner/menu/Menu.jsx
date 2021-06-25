import styles from './index.module.scss'

export const Menu = () => {
    return (
        <nav className={styles.nav}>
            <a href="#" className={styles.nav__link}>
                Streams
            </a>
            <a href="#" className={styles.nav__link}>
                Projects
            </a>
            <a href="#" className={styles.nav__link}>
                About Us
            </a>
            <a href="#" className={styles.nav__link}>
                Careers
            </a>
            <a href="#" className={styles.nav__link}>
                News
            </a>
        </nav>
    )
}
