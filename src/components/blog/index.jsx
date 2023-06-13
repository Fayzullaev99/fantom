import React, { useState } from 'react'
import { MdAccessTime } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Navigation} from "swiper";
import Container from '../../layout/container'
import blog1 from '../../images/blog1.png'
import blog2 from '../../images/blog2.png'
import blog3 from '../../images/blog3.png'
import prev from '../../images/prev.png'
import next from '../../images/next.png'
import styles from './blog.module.scss'

const swiperOptions = {
    blogSlide: {
        0: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
        },
        700: {
            slidesPerView: 3,
        },
        1450: {
            slidesPerView: 3,
        },
        1650: {
            slidesPerView: 3.3,
        },
    },
};

function Blog() {
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
        <div className={styles.blog}>
            <Container>
                <h2 className="component__title blog">Blog</h2>
                <Swiper
                    onSwiper={setSwiper}
                    slidesPerView={3}
                    spaceBetween={24}
                    freeMode={true}
                    navigation={false}
                    modules={[FreeMode, Navigation]}
                    breakpoints={swiperOptions.blogSlide}
                    className="mySwiper"
                >
                    <SwiperSlide className={styles.blog__slide}>
                        <img src={blog1} alt="blog" className={styles.blog__image} />
                        <div className={styles.blog__box}>
                            <h3 className={styles.blog__box_title}>Lorem ipsum dolor sit amet consectetur</h3>
                            <p className={styles.blog__box_text}>Lorem ipsum dolor sit amet consectetur. Cursus non rhoncus mauris dolor ultricies cras. Orci sagittis sit eleifend orci non tortor...</p>
                            <p className={styles.blog__time}>
                                <MdAccessTime />
                                <span>3/4/16</span>
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.blog__slide}>
                        <img src={blog2} alt="blog" className={styles.blog__image} />
                        <div className={styles.blog__box}>
                            <h3 className={styles.blog__box_title}>Lorem ipsum dolor sit amet consectetur</h3>
                            <p className={styles.blog__box_text}>Lorem ipsum dolor sit amet consectetur. Cursus non rhoncus mauris dolor ultricies cras. Orci sagittis sit eleifend orci non tortor...</p>
                            <p className={styles.blog__time}>
                                <MdAccessTime />
                                <span>3/4/16</span>
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.blog__slide}>
                        <img src={blog3} alt="blog" className={styles.blog__image} />
                        <div className={styles.blog__box}>
                            <h3 className={styles.blog__box_title}>Lorem ipsum dolor sit amet consectetur</h3>
                            <p className={styles.blog__box_text}>Lorem ipsum dolor sit amet consectetur. Cursus non rhoncus mauris dolor ultricies cras. Orci sagittis sit eleifend orci non tortor...</p>
                            <p className={styles.blog__time}>
                                <MdAccessTime />
                                <span>3/4/16</span>
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.blog__slide}>
                        <img src={blog1} alt="blog" className={styles.blog__image} />
                        <div className={styles.blog__box}>
                            <h3 className={styles.blog__box_title}>Lorem ipsum dolor sit amet consectetur</h3>
                            <p className={styles.blog__box_text}>Lorem ipsum dolor sit amet consectetur. Cursus non rhoncus mauris dolor ultricies cras. Orci sagittis sit eleifend orci non tortor...</p>
                            <p className={styles.blog__time}>
                                <MdAccessTime />
                                <span>3/4/16</span>
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.blog__slide}>
                        <img src={blog3} alt="blog" className={styles.blog__image} />
                        <div className={styles.blog__box}>
                            <h3 className={styles.blog__box_title}>Lorem ipsum dolor sit amet consectetur</h3>
                            <p className={styles.blog__box_text}>Lorem ipsum dolor sit amet consectetur. Cursus non rhoncus mauris dolor ultricies cras. Orci sagittis sit eleifend orci non tortor...</p>
                            <p className={styles.blog__time}>
                                <MdAccessTime />
                                <span>3/4/16</span>
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.blog__slide}>
                        <img src={blog2} alt="blog" className={styles.blog__image} />
                        <div className={styles.blog__box}>
                            <h3 className={styles.blog__box_title}>Lorem ipsum dolor sit amet consectetur</h3>
                            <p className={styles.blog__box_text}>Lorem ipsum dolor sit amet consectetur. Cursus non rhoncus mauris dolor ultricies cras. Orci sagittis sit eleifend orci non tortor...</p>
                            <p className={styles.blog__time}>
                                <MdAccessTime />
                                <span>3/4/16</span>
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.blog__slide}>
                        <img src={blog1} alt="blog" className={styles.blog__image} />
                        <div className={styles.blog__box}>
                            <h3 className={styles.blog__box_title}>Lorem ipsum dolor sit amet consectetur</h3>
                            <p className={styles.blog__box_text}>Lorem ipsum dolor sit amet consectetur. Cursus non rhoncus mauris dolor ultricies cras. Orci sagittis sit eleifend orci non tortor...</p>
                            <p className={styles.blog__time}>
                                <MdAccessTime />
                                <span>3/4/16</span>
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.blog__slide}>
                        <img src={blog1} alt="blog" className={styles.blog__image} />
                        <div className={styles.blog__box}>
                            <h3 className={styles.blog__box_title}>Lorem ipsum dolor sit amet consectetur</h3>
                            <p className={styles.blog__box_text}>Lorem ipsum dolor sit amet consectetur. Cursus non rhoncus mauris dolor ultricies cras. Orci sagittis sit eleifend orci non tortor...</p>
                            <p className={styles.blog__time}>
                                <MdAccessTime />
                                <span>3/4/16</span>
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.blog__slide}>
                        <img src={blog2} alt="blog" className={styles.blog__image} />
                        <div className={styles.blog__box}>
                            <h3 className={styles.blog__box_title}>Lorem ipsum dolor sit amet consectetur</h3>
                            <p className={styles.blog__box_text}>Lorem ipsum dolor sit amet consectetur. Cursus non rhoncus mauris dolor ultricies cras. Orci sagittis sit eleifend orci non tortor...</p>
                            <p className={styles.blog__time}>
                                <MdAccessTime />
                                <span>3/4/16</span>
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className={styles.blog__navigation}>
                    <button onClick={goPrev} className={styles.blog__prev}>
                        <img src={prev} alt="prev" />
                    </button>
                    <button onClick={goNext} className={styles.blog__next}>
                        <img src={next} alt="next" />
                    </button>
                </div>
            </Container>
        </div>
    )
}

export default Blog