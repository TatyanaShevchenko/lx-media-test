import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import classnames from 'classnames'

import 'swiper/swiper.min.css'

import styles from './index.module.scss'

import SwiperCore, { Navigation } from 'swiper/core'

// configure Swiper to use modules
SwiperCore.use([Navigation])

let bg = 'white'
let image = ''

export const Slider = () => {
    // need setState to re-render component
    const [activeSlide, setActiveSlide] = useState(0)

    // set slider background and background-image depending on the active slide

    function setBackgroundColor(activeIndex) {
        switch (activeIndex) {
            case 0:
                bg = 'white'
                image = ''
                break
            case 1:
                bg = '#85868a'
                image = '/images/slides/slide_2.svg'
                break
            case 2:
                bg = '#ff6600'
                image = '/images/slides/slide_3.svg'
                break
            case 3:
                bg = '#000000'
                image = '/images/slides/slide_2.svg'
                break
            default:
                bg = 'white'
        }
    }

    return (
        <div className={styles.wrapper}>
            <div
                className={styles.back}
                style={{
                    backgroundColor: `${bg}`,
                }}
            >
                <div
                    className={styles.back__image}
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                ></div>
            </div>
            <Swiper
                navigation
                slidesPerView={2}
                spaceBetween={0}
                centeredSlides={true}
                className={styles.slider}
                onSwiper={(swiper) => console.log('swiper', swiper)}
                onSlideChange={(index) => setBackgroundColor(index.activeIndex)}
            >
                <SwiperSlide className={styles.slide}>
                    {({ isActive }) => {
                        if (isActive) {
                            setActiveSlide(0)
                        }

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
                        if (isActive) {
                            setActiveSlide(1)
                        }
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
                                    <a
                                        className={classnames(
                                            styles.slide__link,
                                            isActive &&
                                                styles.slide__link_active
                                        )}
                                        href="#"
                                    >
                                        Learn more
                                    </a>
                                </div>
                            </div>
                        )
                    }}
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    {({ isActive }) => {
                        if (isActive) {
                            setActiveSlide(2)
                        }
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
                                    <a
                                        className={classnames(
                                            styles.slide__link,
                                            isActive &&
                                                styles.slide__link_active
                                        )}
                                        href="#"
                                    >
                                        Learn more
                                    </a>
                                </div>
                            </div>
                        )
                    }}
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    {({ isActive }) => {
                        if (isActive) {
                            setActiveSlide(3)
                        }
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
                                    <a
                                        className={classnames(
                                            styles.slide__link,
                                            isActive &&
                                                styles.slide__link_active
                                        )}
                                        href="#"
                                    >
                                        Learn more
                                    </a>
                                </div>
                            </div>
                        )
                    }}
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
