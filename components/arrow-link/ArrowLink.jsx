import classnames from 'classnames'

import LinkArrow from '../../public/images/icons/link_arrow.svg'

import styles from './index.module.scss'

export const ArrowLink = ({
    position,
    color,
    mobileColor = 'grey',
    scroll,
    classname,
    children,
}) => {
    const whiteColor = '#ffffff'
    const orangeColor = '#ff6600'
    const greyColor = '#85868a'

    let componentColor = greyColor
    let componentMobileColor
    let width

    // need to check because of SSR
    if (typeof window !== 'undefined') {
        width = window.innerWidth
        console.log('width', width)
    }

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

    switch (mobileColor) {
        case 'white':
            componentMobileColor = whiteColor
            break
        case 'grey':
            componentMobileColor = greyColor
            break
        case 'orange':
            componentMobileColor = orangeColor
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
                            fill={
                                width > 480
                                    ? componentColor
                                    : componentMobileColor
                            }
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
                        color === 'orange' && styles.arrow_link__href__orange,
                        (mobileColor =
                            'orange' && styles.arrow_link__href__mobile_orange)
                    )}
                >
                    {position === 'before' && (
                        <LinkArrow
                            className={styles.arrow_link__icon_before}
                            fill={
                                width > 480
                                    ? componentColor
                                    : componentMobileColor
                            }
                        />
                    )}
                    {children}
                </a>
            )}
            {position === 'after' && (
                <LinkArrow
                    className={styles.arrow_link__icon_after}
                    fill={width > 480 ? componentColor : componentMobileColor}
                />
            )}
        </div>
    )
}
