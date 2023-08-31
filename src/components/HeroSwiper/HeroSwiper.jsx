import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import s from './HeroSwiper.module.css';
import heroSlider from '../../json/heroSwiper.json'

const HeroSwiper = () => {

    return (
            <Swiper
                modules={[Autoplay]}
                spaceBetween={15}
                loop={true}
                autoplay={{
                    delay: 3000,
                }}
                slidesPerView={'auto'}
                className={s.swiper}
            >
                {heroSlider.map((slide) => (
                    <SwiperSlide style={{ width: 'auto' }} key={slide.id}>
                        <div className={s.slide}>
                            <div className={s.pictures} style={{ marginRight: `${30 * (slide.icons.length - 1)}px` }}>
                                {slide.icons.map((img, index) => (
                                    <img src={img.icon} alt={img.alt} className={s.icon} key={index} style={{right: `-${30 * index}px`}}/>
                                ))}
                             </div>
                            <div className={s.info}>
                                <p className={s.title}>{slide.title}</p>
                                <p className={s.paragraph}>{slide.text}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
    );
  }

export default HeroSwiper