import classnames from 'classnames'

import LinkArrow from '../../public/images/icons/link_arrow.svg'

import styles from './index.module.scss'

export const ArrowLink = ({ position, color, scroll, classname, children }) => {
    const whiteColor = '#ffffff'
    const orangeColor = '#ff6600'
    const greyColor = '#85868a'

    let componentColor = greyColor

    switch (color) {
        case 'white':
            componentColor = whiteColor
            break
        case 'grey':
            componentColor = greyColor
            break
        case 'orange':
            componentColor = orangeColor
            break
    }

    return (
        <div className={classnames(classname, styles.arrow_link)}>
            {/* if scroll function is in props, render a with scroll method, called on click */}
            {scroll && (
                <a
                    onClick={() => scroll.scrollToTop()}
                    className={classnames(
                        styles.arrow_link__href,
                        color === 'white' && styles.arrow_link__href__white,
                        color === 'grey' && styles.arrow_link__href__grey,
                        color === 'orange' && styles.arrow_link__href__orange
                    )}
                >
                    {position === 'before' && (
                        <LinkArrow
                            className={styles.arrow_link__icon_before}
                            fill={componentColor}
                        />
                    )}
                    {children}
                </a>
            )}
            {/* if scroll is not in props, render usual a with href */}
            {!scroll && (
                <a
                    href="#"
                    className={classnames(
                        styles.arrow_link__href,
                        color === 'white' && styles.arrow_link__href__white,
                        color === 'grey' && styles.arrow_link__href__grey,
                        color === 'orange' && styles.arrow_link__href__orange
                    )}
                >
                    {position === 'before' && (
                        <LinkArrow
                            className={styles.arrow_link__icon_before}
                            fill={componentColor}
                        />
                    )}
                    {children}
                </a>
            )}
            {position === 'after' && (
                <LinkArrow
                    className={styles.arrow_link__icon_after}
                    fill={componentColor}
                />
            )}
        </div>
    )
}
