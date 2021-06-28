import { Menu } from './menu'

import styles from './index.module.scss'

export const Header = () => {
    return (
        <section className={styles.header} id="top">
            <a href="#" className={styles.logo}></a>
            <div className={styles.container}>
                <header className={styles.header__inner}>
                    <Menu />
                    <a href="#" className={styles.header__btn}>
                        Get In Touch
                    </a>
                </header>
            </div>
        </section>
    )
}
