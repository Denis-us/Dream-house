import React, {useState,useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import s from './Recomendations.module.css';
import './Recomendations.css';
import recomendations from '../../json/recomendationSlider.json'

import {ReactComponent as House} from '../../images/svg/house.svg';
import {ReactComponent as Villa} from '../../images/svg/villa.svg';
import {ReactComponent as Apartment} from '../../images/svg/apartment.svg';
import {ReactComponent as Arrow} from '../../images/svg/arrowLeft.svg';
import { ReactComponent as Fire } from '../../images/svg/fire.svg';
import { ReactComponent as Home } from '../../images/svg/home.svg';
import { ReactComponent as Wallet } from '../../images/svg/wallet.svg';

const Recomendations = () => {
    const [selectedType, setSelectedType] = useState('');
    const [slidesPerView, setSlidesPerView] = useState(1);
      
    const handleResize = () => {
        const windowWidth = window.innerWidth;
    
        if (windowWidth >= 1920) {
            setSlidesPerView(4.6);
        } else if (windowWidth >= 1440) {
            setSlidesPerView(3.5);
        } else if (windowWidth >= 1200) {
            setSlidesPerView(3.2);
        } else if (windowWidth >= 768) {
            setSlidesPerView(2);
        }
    };
      
    useEffect(() => {
        handleResize();
    }, []);

    return (
        <section>
            <div class="container">
                <div className={s.nav}>
                    <div className={s.head}>
                        <p className={s.pretitle}>Our Recommendation</p>
                        <h2 className={s.title}>Featured House</h2>
                    </div>
                    <ul className={s.list}>
                        <li className={s.listEl} onClick={() => setSelectedType('house')}>
                            <button className={s.btn}>
                                <House className={s.btnImg}/>
                                <p className={s.text}>House</p>
                            </button>
                        </li>
                        <li className={s.listEl} onClick={() => setSelectedType('villa')}>
                            <button className={s.btn}>
                                <Villa className={s.btnImg}/>
                                <p className={s.text}>Villa</p>
                            </button>
                        </li>
                        <li className={s.listEl} onClick={() => setSelectedType('apartment')}>
                            <button className={s.btn}>
                                <Apartment className={s.btnImg}/>
                                <p className={s.text}>Apartment</p>
                            </button>
                        </li>
                    </ul>
                    <div className={s.switches}>
                        <button class="btnSliderRecomend btnPrev">
                            <Arrow class="arrow left"/>
                        </button>
                        <button class="btnSliderRecomend btnNext">
                            <Arrow class="arrow right"/>
                        </button>
                    </div>
                </div>
                </div>
                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={40}
                    slidesPerView={slidesPerView}

                    navigation={{
                        nextEl: '.btnNext',
                        prevEl: '.btnPrev',
                        clickable: true
                    }}
                    className={s.swiper}
                >
                    {recomendations
                        .filter(slide => !selectedType || slide.type === selectedType)
                        .map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className={s.slide}>
                                <div className={s.card}>
                                    <img src={slide.house} alt={slide.alt} className={s.img}/>
                                    {slide.category === 'Popular' && (
                                        <button className={`${s.category} ${s.popular}`}>
                                            <Fire className={s.icon}/>
                                            <span>{slide.category}</span>
                                        </button>
                                    )}
                                    {slide.category === 'New House' && (
                                        <button className={`${s.category} ${s.new}`}>
                                            <Home className={s.icon}/>
                                            <span>{slide.category}</span>
                                        </button>
                                    )}
                                    {slide.category === 'Best Deals' && (
                                        <button className={`${s.category} ${s.best}`}>
                                            <Wallet className={s.icon}/>
                                            <span>{slide.category}</span>
                                        </button>
                                    )} 
                                </div>
                                <p className={s.titleSlide}>{slide.title}</p>
                                <p className={s.price}>{slide.price}</p>
                                <div className={s.person}>
                                    <img src={slide.avatar} alt={slide.name} className={s.avatar}/>
                                    <div>
                                        <p className={s.name}>{slide.name}</p>
                                        <p className={s.city}>{slide.city}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
        </section>
    );
  }

export default Recomendations