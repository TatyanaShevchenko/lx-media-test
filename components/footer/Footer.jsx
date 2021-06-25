import { animateScroll as scroll } from 'react-scroll'

import { ArrowLink } from '../arrow-link'
import styles from './index.module.scss'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__content}>
                <div className={styles.footer__text}>
                    <p className={styles.footer__title}>KTM Innovation GmbH</p>
                    <p className={styles.footer__description}>
                        Technology consultant and developer&nbsp;with software
                        expertise in&nbsp;Big Data, AI and&nbsp;Blockchain.
                    </p>
                </div>
                <div className={styles.footer__rotate}>
                    <ArrowLink position="before">Back to the top</ArrowLink>
                </div>
            </div>
            <div className={styles.footer__bottom}>
                <p className={styles.footer__copyright}>
                    KTM Innovation. All the rights reserved, 2020.
                </p>
                <div className={styles.footer__links}>
                    <a href="#" className={styles.footer__link}>
                        Imprint
                    </a>
                    <a href="#" className={styles.footer__link}>
                        Privacy Policy
                    </a>
                </div>
            </div>
        </footer>
    )
}
