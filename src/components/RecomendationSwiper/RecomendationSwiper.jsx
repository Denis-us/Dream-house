import React from 'react';
import s from './RecomendationSwiper.module.css';

import house1 from '../../jpg/houseSlide.jpg'
import house2 from '../../jpg/houseSlide2.jpg'
import house3 from '../../jpg/houseSlide3.jpg'
import house4 from '../../jpg/houseSlide4.jpg'

import diane from '../../jpg/avatars/diane.jpg'
import robert from '../../jpg/avatars/robert.jpg'
import ronald from '../../jpg/avatars/ronald.jpg'
import jenny from '../../jpg/avatars/jenny.jpg'

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
            
            slidesPerView={3.2}
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
                            <span>Popular</span>
                        </button>
                    </div>
                    <p className={s.title}>Roselands House</p>
                    <p className={s.price}>$ 35.000.000</p>
                    <div className={s.person}>
                        <img src={diane} alt="diane" className={s.avatar}/>
                        <div>
                            <p className={s.name}>Dianne Russell</p>
                            <p className={s.city}>Manchester, Kentucky</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={s.slide}>
                    <div className={s.card}>
                        <img src={house2} alt="house2" className={s.img}/>
                        <button className={`${s.category} ${s.new}`}>
                            <Home className={s.icon}/>
                            <span>New House</span>
                        </button>
                    </div>
                    <p className={s.title}>Woodlandside</p>
                    <p className={s.price}>$ 22.000.000</p>
                    <div className={s.person}>
                        <img src={robert} alt="robert" className={s.avatar}/>
                        <div>
                            <p className={s.name}>Robert Fox</p>
                            <p className={s.city}>Dr. San Jose, South Dakota</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={s.slide}>
                    <div className={s.card}>
                        <img src={house3} alt="house3" className={s.img}/>
                        <button className={`${s.category} ${s.best}`}>
                            <Wallet className={s.icon}/>
                            <span>Best Deals</span>
                        </button>
                    </div>
                    <p className={s.title}>The Old Lighthouse</p>
                    <p className={s.price}>$ 20.000.000</p>
                    <div className={s.person}>
                        <img src={ronald} alt="ronald" className={s.avatar}/>
                        <div>
                            <p className={s.name}>Ronald Richards</p>
                            <p className={s.city}>Santa Ana, Illinois</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={s.slide}>
                    <div className={s.card}>
                        <img src={house4} alt="house4" className={s.img}/>
                        <button className={`${s.category} ${s.popular}`}>
                            <Fire className={s.icon}/>
                            <span>Popular</span>
                        </button>
                    </div>
                    <p className={s.title}>Cosmo's House</p>
                    <p className={s.price}>$ 44.000.000</p>
                    <div className={s.person}>
                        <img src={jenny} alt="jenny" className={s.avatar}/>
                        <div>
                            <p className={s.name}>Jenny Wilson</p>
                            <p className={s.city}>Preston Rd. Inglewood, Maine 98380</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
  }

export default RecomendationSwiper