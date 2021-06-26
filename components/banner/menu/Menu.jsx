import classnames from 'classnames'

import Arrow from '../../../public/images/icons/menu_arrow.svg'
import styles from './index.module.scss'

export const Menu = () => {
    return (
        <div className={styles.container}>
            <div className={styles.mobile__burger}>
                <div className={styles.mobile__burger__line}></div>
                <div className={styles.mobile__burger__line}></div>
                <div className={styles.mobile__burger__line}></div>
            </div>
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
                        <div className={styles.icon__link}>
                            <a href="#" className={styles.nav__open__link}>
                                Streams
                            </a>
                            <Arrow className={styles.arrow} />
                        </div>
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
        </div>
    )
}
