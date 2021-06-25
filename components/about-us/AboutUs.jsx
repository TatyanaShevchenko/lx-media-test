import { ArrowLink } from '../arrow-link'
import styles from './index.module.scss'

export const AboutUs = () => {
    return (
        <section className={styles.about}>
            <p className={styles.about__title}>Working in the future</p>
            <div className={styles.about__content}>
                <p className={styles.about__text}>
                    Big data, artificial intelligence, blockchain or machine
                    learning are the terms of the hour - this is where growth is
                    generated and developed. KTM Innovation GmbH is a technology
                    consultant and developer with software expertise in these
                    fields.
                </p>
                <ArrowLink position="after">About us</ArrowLink>
            </div>
        </section>
    )
}
