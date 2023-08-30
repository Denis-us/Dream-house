import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import s from './ReadyToSell.module.css';
import redyToSellSwiper from '../../json/readyToSellSwiper.json'
import phone from '../../images/svg/phone.svg'
import {ReactComponent as Play} from '../../images/svg/play.svg'


const ReadyToSell = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <section>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    initialSlide={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: isHovered ? 10000000 : 1000 }}
                    pauseOnMouseEnter={true}
                    className={s.swiper}
                >
                    {redyToSellSwiper.map((slide) => (
                        <SwiperSlide key={slide.id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div className={s.slide}>
                                <div className={s.head}>
                                    <p className={s.pretitle}>Ready to Sell!</p>
                                    <h2 className={s.title}>{slide.title}</h2>
                                    <p className={s.text}>{slide.text}</p>
                                    
                                    <p className={s.titleList}>House Detail</p>
                                    <ul className={s.list}>
                                        {slide.detail.map((position, index) => (
                                        <li className={s.listEl} key={index}>
                                            <img src={position.icon} alt={position.alt} className={s.listIcon}/>
                                            <span className={s.listText}>{position.text}</span>
                                        </li>
                                        ))}
                                    </ul>
                                    <div className={s.person}>
                                        <img src={slide.avatar} alt={slide.name} className={s.avatar}/>
                                        <div>
                                            <p className={s.name}>{slide.name}</p>
                                            <p className={s.position}>{slide.position}</p>
                                        </div>
                                        <button className={s.btn}>
                                            <img src={phone} alt="phone" className={s.btnIcon}/>
                                            <span className={s.btnText}>Contact Now</span>
                                        </button>
                                    </div>
                                </div>
                                <div className={s.pictures}>
                                    <img src={slide.house} alt={slide.alt} className={s.image}/>
                                    <Play className={s.play}/>
                                    <div className={s.furniture}>
                                        {slide.furniture.map((furniture, index) => (
                                            <img key={index} src={furniture.img} alt={furniture.alt}
                                                className={`${index === 0 ? s.mainFurniture : s.secondFurniture}`}/>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
        </section>
    );
  }

export default ReadyToSell