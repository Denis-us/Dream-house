import React, {useState, useEffect} from 'react';
import s from './ReviewsSwiper.module.css';

import villa1 from '../../images/jpg/villa.jpg'
import villa2 from '../../images/jpg/villa2.jpg'
import villa3 from '../../images/jpg/villa3.jpg'

import diane from '../../images/jpg/avatars/diane.jpg'
import robert from '../../images/jpg/avatars/robert.jpg'
import jenny from '../../images/jpg/avatars/jenny.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            initialSlide={1}
            spaceBetween={50}
            // loop={true}
            centeredSlides={true}
            slidesPerView={slidesPerView}
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
                            <img src={diane} alt="diane" className={s.avatar}/>
                            <div>
                                <p className={s.name}>Dianne Russell</p>
                                <p className={s.position}>Manager Director</p>
                            </div>
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
                            <img src={robert} alt="robert" className={s.avatar}/>
                            <div>
                                <p className={s.name}>Robert Fox</p>
                                <p className={s.position}>Manager</p>
                            </div>
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
                            <img src={jenny} alt="jenny" className={s.avatar}/>
                            <div>
                                <p className={s.name}>Jenny Howard</p>
                                <p className={s.position}>Head of Marketing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
  }

export default ReviewsSwiper