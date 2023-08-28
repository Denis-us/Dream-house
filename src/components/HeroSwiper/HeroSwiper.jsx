import React from 'react';
import s from './HeroSwiper.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const HeroSwiper = () => {
  
    return (
            <Swiper
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={15}
                loop={true}
                autoplay={{
                    delay: 3000,
                }}
                slidesPerView={'auto'}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className={s.swiper}
            >
                <SwiperSlide style={{ width: 'auto' }}>
                    <div className={s.slide}>
                        <p className={s.title}>1K+ People</p>
                        <p className={s.paragraph}>Successfully Getting Home</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ width: 'auto' }}>
                    <div className={s.slide}>
                        <p className={s.title}>56 Houses</p>
                        <p className={s.paragraph}>Sold Monthly</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ width: 'auto' }}>
                    <div className={s.slide}>
                        <p className={s.title}>4K+</p>
                        <p className={s.paragraph}>People Looking for New Homes</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ width: 'auto' }}>
                    <div className={s.slide}>
                        <p className={s.title}>Manhattan Style</p>
                        <p className={s.paragraph}>Lorem ipsum dolor sit amet</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ width: 'auto' }}>
                    <div className={s.slide}>
                        <p className={s.title}>New House For Your Future</p>
                        <p className={s.paragraph}>Lorem ipsum dolor sit amet</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ width: 'auto' }}>
                    <div className={s.slide}>
                        <p className={s.title}>People Looking for New Homes</p>
                        <p className={s.paragraph}>Lorem ipsum dolor sit amet</p>
                    </div>
                </SwiperSlide>
            </Swiper>
    );
  }

export default HeroSwiper