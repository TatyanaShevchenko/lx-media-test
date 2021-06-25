import styles from './index.module.scss'

export const Career = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.career}>
                <div className={styles.career__info}>
                    <p className={styles.career__title}>
                        Want To Join Our Team?
                    </p>
                    <div className={styles.career__content}>
                        <p className={styles.career__content__text}>
                            We are always looking for the best minds - looking
                            to the future. No business suits, but racing suits.
                            No boredom, just short distances.
                        </p>
                        <a href="#" className={styles.career__content__link}>
                            Careers at KTM
                        </a>
                    </div>
                    <p className={styles.career__slogan}>
                        <span className={styles.career__slogan_bold}>You.</span>{' '}
                        It’s your time.
                    </p>
                    <p className={styles.career__text}>
                        Our employees are like our motorcycles: It is not the
                        year of construction, the mileage or the preferred
                        terrain that counts, what matters is the drive. We are
                        looking for employees who work, think along, live with
                        us.
                    </p>
                </div>
                <img
                    className={styles.career__image}
                    alt="Career"
                    src="/images/career.png"
                />
            </div>
        </section>
    )
}
