import React from 'react';
import s from './ReadyToSell.module.css';

import {ReactComponent as Bed} from '../../svg/bed.svg'
import {ReactComponent as Bath} from '../../svg/bath.svg'
import {ReactComponent as Garage} from '../../svg/garage.svg'
import {ReactComponent as Floor} from '../../svg/stairs.svg'
import diane from '../../jpg/avatars/diane.jpg'
import phone from '../../svg/phone.svg'
import house from '../../png/houseSlide5.png'

const ReadyToSell = () => {
  
    return (
        <section>
            <div class="container">
                <div className={s.slide}>
                    <div className={s.head}>
                        <p className={s.pretitle}>Ready to Sell!</p>
                        <h2 className={s.title}>Let’s Tour And See Our House!</h2>
                        <p className={s.text}>Houses recommended by our partners that have been<br/> curated to become the home of your dreams!</p>
                        
                        <p className={s.titleList}>House Detail</p>
                        <ul className={s.list}>
                            <li className={s.listEl}>
                                <Bed className={s.listIcon}/>
                                <span className={s.listText}>4 Bedrooms</span>
                            </li>
                            <li className={s.listEl}>
                                <Bath className={s.listIcon}/>
                                <span className={s.listText}>2 Bathrooms</span>
                            </li>
                            <li className={s.listEl}>
                                <Garage className={s.listIcon}/>
                                <span className={s.listText}>1 Carport</span>
                            </li>
                            <li className={s.listEl}>
                                <Floor className={s.listIcon}/>
                                <span className={s.listText}>2 Floors</span>
                            </li>
                        </ul>
                        <div className={s.person}>
                            <img src={diane} alt="avatar" className={s.avatar}/>
                            <div>
                                <p className={s.name}>Dianne Russell</p>
                                <p className={s.position}>Manager Director</p>
                            </div>
                            <button className={s.btn}>
                                <img src={phone} alt="phone" className={s.btnIcon}/>
                                <span className={s.btnText}>Contact Now</span>
                            </button>
                        </div>
                    </div>
                    <div className={s.pictures}>
                        <img src={house} alt='house' className={s.image}/>
                    </div>
                </div>
            </div>
        </section>
    );
  }

export default ReadyToSell