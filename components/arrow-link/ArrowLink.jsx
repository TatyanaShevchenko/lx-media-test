import classnames from 'classnames'

import LinkArrow from '../../public/images/icons/link_arrow.svg'
import { useWindowSize } from '../../utils/windowSize'
import styles from './index.module.scss'

export const ArrowLink = ({
    position,
    color,
    mobileColor,
    scroll,
    classname,
    children,
}) => {
    const size = useWindowSize()
    const whiteColor = '#ffffff'
    const orangeColor = '#ff6600'
    const greyColor = '#85868a'

    let componentColor = greyColor
    let mobileComponentColor = orangeColor

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
            mobileComponentColor = whiteColor
            break
        case 'grey':
            mobileComponentColor = greyColor
            break
        case 'orange':
            mobileComponentColor = orangeColor
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
                                size.width > 480
                                    ? componentColor
                                    : mobileComponentColor
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
                        size.width <= 480 &&
                            mobileColor === 'orange' &&
                            styles.arrow_link__href__orange
                    )}
                >
                    {position === 'before' && (
                        <LinkArrow
                            className={styles.arrow_link__icon_before}
                            fill={
                                size.width > 480
                                    ? componentColor
                                    : mobileComponentColor
                            }
                        />
                    )}
                    {children}
                </a>
            )}
            {position === 'after' && (
                <LinkArrow
                    className={styles.arrow_link__icon_after}
                    fill={
                        size.width > 480 ? componentColor : mobileComponentColor
                    }
                />
            )}
        </div>
    )
}
