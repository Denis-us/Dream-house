import React from 'react';
import s from './ReviewsSwiper.module.css';

import villa1 from '../../jpg/villa.jpg'
import villa2 from '../../jpg/villa2.jpg'
import villa3 from '../../jpg/villa3.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ReviewsSwiper = () => {
  
    return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            initialSlide={1}
            spaceBetween={50}
            // loop={true}
            centeredSlides={true}
            slidesPerView={1.55}
            slidesPerGroup={1}
            // navigation
            pagination
            className={s.swiper}
        >
            <SwiperSlide>
                <div className={s.slide}>
                    <div className={s.imgWrapper}>
                        <img src={villa1} alt="villa 1" className={s.img}/>
                    </div>
                    <div className={s.slideComment}>
                        <h1 className={s.title}>My house sold out fast!</h1>
                        <p className={s.text}>I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!</p>
                        <div className={s.commentInfo}>

                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={s.slide}>
                    <div className={s.imgWrapper}>
                        <img src={villa2} alt="villa 2" className={s.img}/>
                    </div>
                    <div className={s.slideComment}>
                        <h1 className={s.title}>Best! I got the house I wanted through Hounter</h1>
                        <p className={s.text}>Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.</p>
                        <div className={s.commentInfo}>
                            
                        </div>
                    </div>
                </div>
                
            </SwiperSlide>
            <SwiperSlide>
                <div className={s.slide}>
                    <div className={s.imgWrapper}>
                        <img src={villa3} alt="villa 3" className={s.img}/>
                    </div>
                    <div className={s.slideComment}>
                        <h1 className={s.title}>Through the Hounter, I can get a house for my self</h1>
                        <p className={s.text}>By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!</p>
                        <div className={s.commentInfo}>
                            
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
  }

export default ReviewsSwiper