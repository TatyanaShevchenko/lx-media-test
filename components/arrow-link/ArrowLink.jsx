import classnames from 'classnames'

import LinkArrow from '../../public/images/icons/link_arrow.svg'

import styles from './index.module.scss'

export const ArrowLink = ({ position, scroll, children }) => {
    return (
        <div className={styles.arrow_link}>
            {/* if scroll function is in props, render a with scroll method, called on click */}
            {scroll && (
                <a
                    onClick={() => scroll.scrollToTop()}
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
            )}
            {/* if scroll is not in props, render usual a цшер ркуа */}
            {!scroll && (
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
            )}
            {position === 'after' && (
                <LinkArrow
                    className={styles.arrow_link__icon_after}
                    fill="#85868a"
                />
            )}
        </div>
    )
}
