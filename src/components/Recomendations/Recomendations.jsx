import React from 'react';
import RecomendationSwiper from '../RecomendationSwiper/RecomendationSwiper'
import s from './Recomendations.module.css';

import {ReactComponent as House} from '../../svg/house.svg';
import {ReactComponent as Villa} from '../../svg/villa.svg';
import {ReactComponent as Apartment} from '../../svg/apartment.svg';
import {ReactComponent as Arrow} from '../../svg/arrowLeft.svg';

const Recomendations = () => {
  
    return (
        <section>
            <div class="container">
                <div className={s.nav}>
                    <div className={s.head}>
                        <p className={s.pretitle}>Our Recommendation</p>
                        <h2 className={s.title}>Featured House</h2>
                    </div>
                    <ul className={s.list}>
                        <li className={s.listEl}>
                            <button className={s.btn}>
                                <House className={s.btnImg}/>
                                <p className={s.text}>House</p>
                            </button>
                        </li>
                        <li className={s.listEl}>
                            <button className={s.btn}>
                                <Villa className={s.btnImg}/>
                                <p className={s.text}>Villa</p>
                            </button>
                        </li>
                        <li className={s.listEl}>
                            <button className={s.btn}>
                                <Apartment className={s.btnImg}/>
                                <p className={s.text}>Apartment</p>
                            </button>
                        </li>
                    </ul>
                    <div className={s.switches}>
                        <button className={`${s.switcher} ${s.btnBack}`}>
                            <Arrow className={`${s.arrow} ${s.arrowLeft}`}/>
                        </button>
                        <button className={`${s.switcher} ${s.btnForward}`}>
                            <Arrow className={`${s.arrow} ${s.arrowRight}`}/>
                        </button>
                    </div>
                </div>
                {/* <div>
                   
                </div> */}
            </div>
            <RecomendationSwiper/>
        </section>
    );
  }

export default Recomendations