import classnames from 'classnames'
import LinkArrow from '../../public/images/icons/link_arrow.svg'

import styles from './index.module.scss'

export const ArrowLink = ({ position, children }) => {
    return (
        <div className={styles.arrow_link}>
            <a
                href="#"
                className={classnames(
                    styles.arrow_link__href,
                    position === 'before' && styles.arrow_link__href_orange
                )}
            >
                {position === 'before' && (
                    <LinkArrow
                        className={styles.arrow_link__icon_before}
                        fill="#85868a"
                    />
                )}
                {children}
            </a>
            {position === 'after' && (
                <LinkArrow
                    className={styles.arrow_link__icon_after}
                    fill="#85868a"
                />
            )}
        </div>
    )
}
