import classnames from 'classnames'
import styles from './index.module.scss'

export const Menu = () => {
    return (
        <nav className={styles.nav}>
            <div className={classnames(styles.nav__link, styles.nav__open)}>
                <div className={styles.nav__relative}>
                    <div className={styles.nav__submenu}>
                        <div className={styles.nav__submenu__line}></div>
                        <ul className={styles.nav__submenu__list}>
                            <li className={styles.nav__submenu__list_item}>
                                <a
                                    href="#"
                                    className={styles.nav__submenu__link}
                                >
                                    Devops
                                </a>
                            </li>
                            <li className={styles.nav__submenu__list_item}>
                                <a
                                    href="#"
                                    className={styles.nav__submenu__link}
                                >
                                    Business Intelligence
                                </a>
                            </li>
                            <li className={styles.nav__submenu__list_item}>
                                <a
                                    href="#"
                                    className={styles.nav__submenu__link}
                                >
                                    Scouting
                                </a>
                            </li>
                            <li className={styles.nav__submenu__list_item}>
                                <a
                                    href="#"
                                    className={styles.nav__submenu__link}
                                >
                                    Education
                                </a>
                            </li>
                            <li className={styles.nav__submenu__list_item}>
                                <a
                                    href="#"
                                    className={styles.nav__submenu__link}
                                >
                                    Innolab
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a href="#" className={styles.nav__open__link}>
                        Streams
                    </a>
                </div>
            </div>

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
