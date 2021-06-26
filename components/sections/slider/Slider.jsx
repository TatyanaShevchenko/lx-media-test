import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper/core'
import classnames from 'classnames'

import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'

import { ArrowLink } from '../../arrow-link'
import LinkArrow from '../../../public/images/icons/link_arrow.svg'
import styles from './index.module.scss'

// configure Swiper to use modules
SwiperCore.use([Navigation])

let bg = 'white'
let image = '/images/slides/init.svg'

export const Slider = () => {
    // need setState to re-render component
    const [activeSlide, setActiveSlide] = useState(5)

    // set slider background and background-image depending on the active slide
    let colors_array = ['white', '#85868a', '#ff6600', '#000000']
    function setBackgroundColor(activeIndex) {
        let num = activeIndex % 4
        bg = colors_array[num]
        switch (num) {
            case 0:
                image = '/images/slides/init.svg'
                setActiveSlide(0)
                break
            case 1:
                image = '/images/slides/slide_2.svg'
                setActiveSlide(1)
                break
            case 2:
                image = '/images/slides/slide_3.svg'
                setActiveSlide(2)
                break
            case 3:
                image = '/images/slides/slide_2.svg'
                setActiveSlide(3)
                break
            default:
                image = ''
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.mobile__prev}>
                <LinkArrow fill="#85868a" />
            </div>
            <div className={styles.mobile__next}>
                <LinkArrow fill="#85868a" />
            </div>
            <p className={styles.mobile__title}>
                Slide to{' '}
                <span className={styles.mobile__title_bold}>discover</span>
            </p>
            <div
                className={styles.back}
                style={{
                    transition: 'all .3s linear',
                    backgroundColor: `${bg}`,
                }}
            >
                <div
                    className={styles.back__image}
                    style={{
                        transition: 'all .3s ease-in',
                        backgroundImage: `url(${image})`,
                    }}
                ></div>
                <div
                    className={styles.desktop__navigation}
                    style={{
                        position: 'absolute',
                        bottom: '71px',
                        left: '75px',
                    }}
                >
                    <ArrowLink
                        position="before"
                        color="white"
                        mobileColor="white"
                    >
                        Previous
                    </ArrowLink>
                </div>
            </div>
            <Swiper
                navigation
                slidesPerView={2}
                spaceBetween={0}
                // centeredSlides={true}
                className={styles.slider}
                onSlideChange={(index) => setBackgroundColor(index.activeIndex)}
                breakpoints={{
                    375: {
                        slidesPerView: 1,
                    },
                    481: {
                        slidesPerView: 2,
                    },
                }}
            >
                <SwiperSlide className={styles.slide}>
                    {({ isActive }) => {
                        return (
                            <div
                                className={classnames(
                                    styles.slide__first,
                                    isActive && styles.slide__first_visible
                                )}
                            >
                                <div className={styles.slide__first__col}>
                                    <div
                                        className={classnames(
                                            styles.slide__first__row,
                                            styles.slide__first__image
                                        )}
                                    ></div>
                                    <div className={styles.slide__first__row}>
                                        <p
                                            className={
                                                styles.slide__first__title
                                            }
                                        >
                                            Streams
                                        </p>
                                        <p
                                            className={
                                                styles.slide__first__text
                                            }
                                        >
                                            Antectiur? Sant et qui cum aut
                                            magnate prae nusdam, que vel modi
                                            nulpa dolorpost pra velia am,
                                            incient autem estis qui aut que
                                            sinienem. Et quae porem apienia
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.slide__first__col}>
                                    <p className={styles.slide__first__slogan}>
                                        Drag to&nbsp;
                                        <span
                                            className={
                                                styles.slide__first__slogan_bold
                                            }
                                        >
                                            discover
                                        </span>
                                    </p>
                                </div>
                            </div>
                        )
                    }}
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    {({ isActive }) => {
                        return (
                            <div
                                className={classnames(
                                    styles.slide__inner,
                                    isActive && styles.slide__active
                                )}
                            >
                                <div
                                    className={classnames(
                                        styles.slide__inner__content,
                                        styles.slide__inner__content_whitebg
                                    )}
                                >
                                    <p className={styles.slide__description}>
                                        Success in five phases
                                    </p>
                                    <p className={styles.slide__title}>
                                        Devops
                                    </p>

                                    <ArrowLink
                                        position="after"
                                        color="white"
                                        mobileColor="white"
                                        classname={classnames(
                                            styles.slide__link,
                                            isActive &&
                                                styles.slide__link_active
                                        )}
                                    >
                                        Learn more
                                    </ArrowLink>
                                </div>
                            </div>
                        )
                    }}
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    {({ isActive }) => {
                        return (
                            <div
                                className={classnames(
                                    styles.slide__inner,
                                    isActive && styles.slide__active
                                )}
                            >
                                <div className={styles.slide__inner__content}>
                                    <p className={styles.slide__description}>
                                        Making data usable efficiently
                                    </p>
                                    <p className={styles.slide__title}>
                                        Business Intelligence
                                    </p>
                                    <ArrowLink
                                        position="after"
                                        color="white"
                                        mobileColor="white"
                                        classname={classnames(
                                            styles.slide__link,
                                            isActive &&
                                                styles.slide__link_active
                                        )}
                                    >
                                        Learn more
                                    </ArrowLink>
                                </div>
                            </div>
                        )
                    }}
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    {({ isActive }) => {
                        return (
                            <div
                                className={classnames(
                                    styles.slide__inner,
                                    isActive && styles.slide__active
                                )}
                            >
                                <div className={styles.slide__inner__content}>
                                    <p className={styles.slide__description}>
                                        Search for new technologies and business
                                        models worldwide
                                    </p>
                                    <p className={styles.slide__title}>
                                        Scouting
                                    </p>
                                    <ArrowLink
                                        position="after"
                                        color="white"
                                        mobileColor="white"
                                        classname={classnames(
                                            styles.slide__link,
                                            isActive &&
                                                styles.slide__link_active
                                        )}
                                    >
                                        Learn more
                                    </ArrowLink>
                                </div>
                            </div>
                        )
                    }}
                </SwiperSlide>
                {/* add more slides for checking automate background color */}
                <SwiperSlide className={styles.slide}>
                    {({ isActive }) => {
                        return (
                            <div
                                className={classnames(
                                    styles.slide__inner,
                                    isActive && styles.slide__active
                                )}
                            >
                                <div className={styles.slide__inner__content}>
                                    <p className={styles.slide__description}>
                                        Search for new technologies and business
                                        models worldwide
                                    </p>
                                    <p className={styles.slide__title}>
                                        Scouting
                                    </p>
                                    <ArrowLink
                                        position="after"
                                        color="white"
                                        mobileColor="white"
                                        classname={classnames(
                                            styles.slide__link,
                                            isActive &&
                                                styles.slide__link_active
                                        )}
                                    >
                                        Learn more
                                    </ArrowLink>
                                </div>
                            </div>
                        )
                    }}
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    {({ isActive }) => {
                        return (
                            <div
                                className={classnames(
                                    styles.slide__inner,
                                    isActive && styles.slide__active
                                )}
                            >
                                <div className={styles.slide__inner__content}>
                                    <p className={styles.slide__description}>
                                        Search for new technologies and business
                                        models worldwide
                                    </p>
                                    <p className={styles.slide__title}>
                                        Scouting
                                    </p>
                                    <ArrowLink
                                        position="after"
                                        color="white"
                                        mobileColor="white"
                                        classname={classnames(
                                            styles.slide__link,
                                            isActive &&
                                                styles.slide__link_active
                                        )}
                                    >
                                        Learn more
                                    </ArrowLink>
                                </div>
                            </div>
                        )
                    }}
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    {({ isActive }) => {
                        return (
                            <div
                                className={classnames(
                                    styles.slide__inner,
                                    isActive && styles.slide__active
                                )}
                            >
                                <div className={styles.slide__inner__content}>
                                    <p className={styles.slide__description}>
                                        Search for new technologies and business
                                        models worldwide
                                    </p>
                                    <p className={styles.slide__title}>
                                        Scouting
                                    </p>
                                    <ArrowLink
                                        position="after"
                                        color="white"
                                        mobileColor="white"
                                        classname={classnames(
                                            styles.slide__link,
                                            isActive &&
                                                styles.slide__link_active
                                        )}
                                    >
                                        Learn more
                                    </ArrowLink>
                                </div>
                            </div>
                        )
                    }}
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    {({ isActive }) => {
                        return (
                            <div
                                className={classnames(
                                    styles.slide__inner,
                                    isActive && styles.slide__active
                                )}
                            >
                                <div className={styles.slide__inner__content}>
                                    <p className={styles.slide__description}>
                                        Search for new technologies and business
                                        models worldwide
                                    </p>
                                    <p className={styles.slide__title}>
                                        Scouting
                                    </p>
                                    <ArrowLink
                                        position="after"
                                        color="white"
                                        mobileColor="white"
                                        classname={classnames(
                                            styles.slide__link,
                                            isActive &&
                                                styles.slide__link_active
                                        )}
                                    >
                                        Learn more
                                    </ArrowLink>
                                </div>
                            </div>
                        )
                    }}
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
