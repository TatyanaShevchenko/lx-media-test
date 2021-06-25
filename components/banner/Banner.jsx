import { Menu } from './menu'

import styles from './index.module.scss'

export const Banner = () => {
    return (
        <section className={styles.banner}>
            <a href="#" className={styles.logo}>
                <img src="/images/logo.png" alt="company logo" />
            </a>
            <div className={styles.container}>
                <header className={styles.header}>
                    <Menu />
                    <a href="#" className={styles.header__btn}>
                        Get In Touch
                    </a>
                </header>
                <div className={styles.content}>
                    <p className={styles.content__title}>
                        What makes companies creative and competitive?
                    </p>
                    <p className={styles.content__text}>
                        Interdisciplinary work and thinking outside the box are
                        the recipes for working in the future.
                    </p>
                    <div className={styles.content__line}></div>
                </div>
            </div>
        </section>
    )
}
