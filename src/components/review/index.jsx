import Container from '../../layout/container'
import review from '../../images/revies.png'
import prev from '../../images/prev.png'
import next from '../../images/next.png'
import video from '../../videos/video1.mp4'
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation,Mousewheel, Keyboard } from "swiper";
import styles from './review.module.scss'
function Review() {
    const [swiper, setSwiper] = useState(null);

    const goPrev = () => {
        if (swiper) {
            swiper.slidePrev();
        }
    };

    const goNext = () => {
        if (swiper) {
            swiper.slideNext();
        }
    };
    return (
        <div className={styles.review}>
            <Container>
                <p className="component__text">Client</p>
                <h2 className="component__title">reviews</h2>
                <Swiper
                    cssMode={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Mousewheel, Keyboard]}
                    onSwiper={setSwiper}
                    spaceBetween={30}
                    navigation={false}
                    className="mySwiper"
                >
                    <SwiperSlide className={styles.review__slide}>
                        <div className={styles.review__block}>
                            <h2 className={styles.review__slide_title}>«Fantom helps us to show us from our best side»</h2>
                            <p className={styles.review__slide_text}>We really enjoy working with Fantom, they always deliver on time and help us to get our products faster to market. They are very professional and the render quality is amazing.</p>
                            <p className={styles.review__author}>
                                <span>Robert Fox</span> Marketing Coordinator
                            </p>
                            <h2 className={styles.review__company}>Nintendo Company</h2>
                        </div>
                        <div className={styles.review__video}>
                            <video src={video} poster={review} controls></video>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.review__slide}>
                        <div className={styles.review__block}>
                            <h2 className={styles.review__slide_title}>«Fantom helps us to show us from our best side»</h2>
                            <p className={styles.review__slide_text}>We really enjoy working with Fantom, they always deliver on time and help us to get our products faster to market. They are very professional and the render quality is amazing.</p>
                            <p className={styles.review__author}>
                                <span>Robert Fox</span> Marketing Coordinator
                            </p>
                            <h2 className={styles.review__company}>Nintendo Company</h2>
                        </div>
                        <div className={styles.review__video}>
                            <video src={video} poster={review} controls></video>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.review__slide}>
                        <div className={styles.review__block}>
                            <h2 className={styles.review__slide_title}>«Fantom helps us to show us from our best side»</h2>
                            <p className={styles.review__slide_text}>We really enjoy working with Fantom, they always deliver on time and help us to get our products faster to market. They are very professional and the render quality is amazing.</p>
                            <p className={styles.review__author}>
                                <span>Robert Fox</span> Marketing Coordinator
                            </p>
                            <h2 className={styles.review__company}>Nintendo Company</h2>
                        </div>
                        <div className={styles.review__video}>
                            <video src={video} poster={review} controls></video>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.review__slide}>
                        <div className={styles.review__block}>
                            <h2 className={styles.review__slide_title}>«Fantom helps us to show us from our best side»</h2>
                            <p className={styles.review__slide_text}>We really enjoy working with Fantom, they always deliver on time and help us to get our products faster to market. They are very professional and the render quality is amazing.</p>
                            <p className={styles.review__author}>
                                <span>Robert Fox</span> Marketing Coordinator
                            </p>
                            <h2 className={styles.review__company}>Nintendo Company</h2>
                        </div>
                        <div className={styles.review__video}>
                            <video src={video} poster={review} controls></video>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.review__slide}>
                        <div className={styles.review__block}>
                            <h2 className={styles.review__slide_title}>«Fantom helps us to show us from our best side»</h2>
                            <p className={styles.review__slide_text}>We really enjoy working with Fantom, they always deliver on time and help us to get our products faster to market. They are very professional and the render quality is amazing.</p>
                            <p className={styles.review__author}>
                                <span>Robert Fox</span> Marketing Coordinator
                            </p>
                            <h2 className={styles.review__company}>Nintendo Company</h2>
                        </div>
                        <div className={styles.review__video}>
                            <video src={video} poster={review} controls></video>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.review__slide}>
                        <div className={styles.review__block}>
                            <h2 className={styles.review__slide_title}>«Fantom helps us to show us from our best side»</h2>
                            <p className={styles.review__slide_text}>We really enjoy working with Fantom, they always deliver on time and help us to get our products faster to market. They are very professional and the render quality is amazing.</p>
                            <p className={styles.review__author}>
                                <span>Robert Fox</span> Marketing Coordinator
                            </p>
                            <h2 className={styles.review__company}>Nintendo Company</h2>
                        </div>
                        <div className={styles.review__video}>
                            <video src={video} poster={review} controls></video>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.review__slide}>
                        <div className={styles.review__block}>
                            <h2 className={styles.review__slide_title}>«Fantom helps us to show us from our best side»</h2>
                            <p className={styles.review__slide_text}>We really enjoy working with Fantom, they always deliver on time and help us to get our products faster to market. They are very professional and the render quality is amazing.</p>
                            <p className={styles.review__author}>
                                <span>Robert Fox</span> Marketing Coordinator
                            </p>
                            <h2 className={styles.review__company}>Nintendo Company</h2>
                        </div>
                        <div className={styles.review__video}>
                            <video src={video} poster={review} controls></video>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.review__slide}>
                        <div className={styles.review__block}>
                            <h2 className={styles.review__slide_title}>«Fantom helps us to show us from our best side»</h2>
                            <p className={styles.review__slide_text}>We really enjoy working with Fantom, they always deliver on time and help us to get our products faster to market. They are very professional and the render quality is amazing.</p>
                            <p className={styles.review__author}>
                                <span>Robert Fox</span> Marketing Coordinator
                            </p>
                            <h2 className={styles.review__company}>Nintendo Company</h2>
                        </div>
                        <div className={styles.review__video}>
                            <video src={video} poster={review} controls></video>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.review__slide}>
                        <div className={styles.review__block}>
                            <h2 className={styles.review__slide_title}>«Fantom helps us to show us from our best side»</h2>
                            <p className={styles.review__slide_text}>We really enjoy working with Fantom, they always deliver on time and help us to get our products faster to market. They are very professional and the render quality is amazing.</p>
                            <p className={styles.review__author}>
                                <span>Robert Fox</span> Marketing Coordinator
                            </p>
                            <h2 className={styles.review__company}>Nintendo Company</h2>
                        </div>
                        <div className={styles.review__video}>
                            <video src={video} poster={review} controls></video>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className={styles.review__navigation}>
                    <button onClick={goPrev} className={styles.review__prev}>
                        <img src={prev} alt="prev" />
                    </button>
                    <button onClick={goNext} className={styles.review__next}>
                        <img src={next} alt="next" />
                    </button>
                </div>
            </Container>
        </div>
    )
}

export default Review