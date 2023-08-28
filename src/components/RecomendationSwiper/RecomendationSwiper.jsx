import React from 'react';
import s from './RecomendationSwiper.module.css';

import house1 from '../../jpg/houseSlide.jpg'
import house2 from '../../jpg/houseSlide2.jpg'
import house3 from '../../jpg/houseSlide3.jpg'
import house4 from '../../jpg/houseSlide4.jpg'

import { ReactComponent as Fire } from '../../svg/fire.svg';
import { ReactComponent as Home } from '../../svg/home.svg';
import { ReactComponent as Wallet } from '../../svg/wallet.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const RecomendationSwiper = () => {
  
    return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={40}
            
            slidesPerView={3.4}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            className={s.swiper}
        >
            <SwiperSlide>
                <div className={s.slide}>
                    <div className={s.card}>
                        <img src={house1} alt="house1" className={s.img}/>
                        <button className={`${s.category} ${s.popular}`}>
                            <Fire className={s.icon}/>
                            Popular
                        </button>
                    </div>
                    <p className={s.name}>Roselands House</p>
                    <p className={s.price}>$ 35.000.000</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={s.slide}>
                    <div className={s.card}>
                        <img src={house2} alt="house2" className={s.img}/>
                        <button className={`${s.category} ${s.new}`}>
                            <Home className={s.icon}/>
                            New House
                        </button>
                    </div>
                    <p className={s.name}>Woodlandside</p>
                    <p className={s.price}>$ 22.000.000</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={s.slide}>
                    <div className={s.card}>
                        <img src={house3} alt="house3" className={s.img}/>
                        <button className={`${s.category} ${s.best}`}>
                            <Wallet className={s.icon}/>
                            Best Deals
                        </button>
                    </div>
                    <p className={s.name}>The Old Lighthouse</p>
                    <p className={s.price}>$ 20.000.000</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={s.slide}>
                    <div className={s.card}>
                        <img src={house4} alt="house4" className={s.img}/>
                        <button className={`${s.category} ${s.popular}`}>
                            <Fire className={s.icon}/>
                            Popular
                        </button>
                    </div>
                    <p className={s.name}>Cosmo's House</p>
                    <p className={s.price}>$ 44.000.000</p>
                </div>
            </SwiperSlide>
        </Swiper>
    );
  }

export default RecomendationSwiper