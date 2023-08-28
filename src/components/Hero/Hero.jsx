import React from 'react';
import HeroSwiper from '../HeroSwiper/HeroSwiper';
import Form from '../Form/Form';
import s from './Hero.module.css';

import marker from '../../svg/marker.svg'
import arrow from '../../svg/arrowRight.svg'
import partner1 from '../../svg/traveloka.svg'
import partner2 from '../../svg/tiket.svg'
import partner3 from '../../svg/airbnb.svg'
import partner4 from '../../svg/tripadvisor.svg'


const Hero = () => {
  
    return (
        <section>
            <div class="container">
                <div className={s.hero}>
                    <div className={s.heroMain}>
                        <h1 className={s.title}>Find The Place To Live <span className={s.titlePart}>Your Dreams</span> Easily Here</h1>
                        <p className={s.paragraph}>Everything you need about finding your place to live will be here, where it will be easier for you</p>

                        <Form icoInput={marker} placeholder={'Search for the location you want!'} btn={'Search '} icoBtn={arrow}/>

                        <p className={`${s.paragraph} ${s.partners}`}>Our Partnership</p>
                        <ul className={s.list}>
                            <li className={s.listEl}>
                                <img src={partner1} alt="traveloka" />
                            </li>
                            <li className={s.listEl}>
                                <img src={partner2} alt="tiket" />
                            </li>
                            <li className={s.listEl}>
                                <img src={partner3} alt="airbnb" />
                            </li>
                            <li className={s.listEl}>
                                <img src={partner4} alt="tripadvisor" />
                            </li>
                        </ul>
                    </div>
                    <div className={s.heroSlider}>
                        <HeroSwiper/>
                    </div>
                </div>
            </div>
        </section>
    );
  }

export default Hero