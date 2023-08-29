import React from 'react';
import HeroSwiper from '../HeroSwiper/HeroSwiper';
import FormSubscribe from '../FormSubscribe/FormSubscribe';
import s from './Hero.module.css';

import marker from '../../images/svg/marker.svg'
import arrow from '../../images/svg/arrowRight.svg'
import partner1 from '../../images/svg/traveloka.svg'
import partner2 from '../../images/svg/tiket.svg'
import partner3 from '../../images/svg/airbnb.svg'
import partner4 from '../../images/svg/tripadvisor.svg'

import houseImg from '../../images/png/hero-image.png'
import {ReactComponent as TrianglesImg} from '../../images/svg/trianglesHero.svg'


const Hero = () => {
  
    return (
        <section>
            <div class="container">
                <div className={s.hero}>
                    <div className={s.heroMain}>
                        <h1 className={s.title}>Find The Place To<br/>Live <span className={s.titlePart}>Your Dreams</span><br/>Easily Here</h1>
                        <p className={s.paragraph}>Everything you need about finding your place to live will be here, where it will be easier for you</p>

                        <FormSubscribe icoInput={marker} placeholder={'Search for the location you want!'} btn={'Search '} icoBtn={arrow}/>

                        <p className={`${s.paragraph} ${s.partners}`}>Our Partnership</p>
                        <ul className={s.list}>
                            <li className={s.listEl}>
                                <a href="https://www.traveloka.com">
                                    <img src={partner1} alt="traveloka" />
                                </a>
                            </li>
                            <li className={s.listEl}>
                                <a href="https://www.tiket.com/">
                                    <img src={partner2} alt="tiket" />
                                </a>
                            </li>
                            <li className={s.listEl}>
                                <a href="https://www.airbnb.com.ua">
                                    <img src={partner3} alt="airbnb" />
                                </a>
                            </li>
                            <li className={s.listEl}>
                                <a href="https://www.tripadvisor.com">
                                    <img src={partner4} alt="tripadvisor" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={s.heroSlider}>
                        <img src={houseImg} alt="hotel" className={s.houseImg}/>
                        <TrianglesImg className={s.trianglesImg}/>
                        <div className={s.swiper}>
                            <HeroSwiper/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }

export default Hero