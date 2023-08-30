import React, {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import s from './ReviewsSwiper.module.css';
import './ReviewsSwiper.css'
import reviews from '../../json/reviewSwiper.json';
import { ReactComponent as Star } from '../../images/svg/star.svg';


const ReviewsSwiper = () => {

    const [slidesPerView, setSlidesPerView] = useState(1);
      
    const handleResize = () => {
        const windowWidth = window.innerWidth;
    
        if (windowWidth >= 1920) {
            setSlidesPerView(2.5);
        } else if (windowWidth >= 1440) {
            setSlidesPerView(1.7);
        } else if (windowWidth >= 1200) {
            setSlidesPerView(1.55);
        } else {
            setSlidesPerView(1);
        }
    };
      
    useEffect(() => {
        handleResize();
    }, []);

    return (
        <Swiper
            modules={[Pagination]}
            initialSlide={1}
            spaceBetween={50}
            centeredSlides={true}
            slidesPerView={slidesPerView}
            slidesPerGroup={1}
            pagination
            className={s.swiper}
        >
            {reviews.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <div className={s.slide}>
                        <div className={s.imgWrapper}>
                            <img src={slide.house} alt={slide.alt} className={s.img}/>
                        </div>
                        <div className={s.slideComment}>
                            <h1 className={s.title}>{slide.title}</h1>
                            <p className={s.text}>{slide.text}</p>
                            <div className={s.commentInfo}>
                                <div className={s.person}>
                                    <img src={slide.avatar} alt={slide.name} className={s.avatar}/>
                                    <div>
                                        <p className={s.name}>{slide.name}</p>
                                        <p className={s.position}>{slide.position}</p>
                                    </div>
                                </div>
                                <div className={s.grade}>
                                    <Star/>
                                    <span className={s.number}>{slide.grade}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
  }

export default ReviewsSwiper