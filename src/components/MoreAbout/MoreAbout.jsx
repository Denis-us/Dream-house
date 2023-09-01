import React from 'react';
import s from './MoreAbout.module.css';

import house1 from '../../images/jpg/moreHouse1.jpg'
import house2 from '../../images/jpg/moreHouse2.jpg'
import house3 from '../../images/jpg/moreHouse3.jpg'
import house4 from '../../images/jpg/moreHouse4.jpg'
import avatar1 from '../../images/jpg/avatars/diane.jpg'
import avatar2 from '../../images/jpg/avatars/cort.jpg'
import avatar3 from '../../images/jpg/avatars/dan.jpg'
import avatar4 from '../../images/jpg/avatars/jake.jpg'
import {ReactComponent as Time} from '../../images/svg/time.svg';

const MoreAbout = () => {
  
    return (
        <section>
            <div class="container">
                <div className={s.head}>
                    <div className={s.circleFirst}></div>
                    <div className={s.circleSecond}></div>
                    <p className={s.pretitle}>See Tips And Trick From Our Partnership</p>
                    <h2 className={s.mainTitle}>Find Out More About Selling And Buying Homes</h2>
                    <button className={s.btn}>More Artikel</button>
                </div>
                <div className={s.articles}>
                    <ul className={s.list}>
                        <li className={s.listEl}>
                            <img src={house1} alt="house1" className={s.listImg}/>
                            <div>
                                <div className={s.person}>
                                    <img src={avatar1} alt="avatar1" className={s.avatar}/>
                                    <span className={s.name}>Dianne Russell</span>
                                </div>
                                <p className={s.title}>The Things We Need To Check When We Want To Buy A House</p>
                                <div className={s.time}>
                                    <Time className={s.clock}/>
                                    <span className={s.timeInfo}>4 min read | 25 Apr 2021</span>
                                </div>
                            </div>
                        </li>
                        <li className={s.listEl}>
                            <img src={house2} alt="house2" className={s.listImg}/>
                            <div >
                                <div className={s.person}>
                                    <img src={avatar2} alt="avatar2" className={s.avatar}/>
                                    <span className={s.name}>Courtney Henry</span>
                                </div>
                                <p className={s.title}>7 Ways To Distinguish The Quality Of The House We Want To Buy</p>
                                <div className={s.time}>
                                    <Time className={s.clock}/>
                                    <span className={s.timeInfo}>6 min read | 24 Apr 2021</span>
                                </div>
                            </div>
                        </li>
                        <li className={s.listEl}>
                            <img src={house3} alt="house3" className={s.listImg}/>
                            <div>
                                <div className={s.person}>
                                    <img src={avatar3} alt="avatar3" className={s.avatar}/>
                                    <span className={s.name}>Darlene Robertson</span>
                                </div>
                                <p className={s.title}>The Best Way To Know The Quality Of The House We Want To Buy</p>
                                <div className={s.time}>
                                    <Time className={s.clock}/>
                                    <span className={s.timeInfo}>2 min read | 24 Apr 2021</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <article className={s.article}>
                        <img src={house4} alt="house4" className={s.articleImg}/>
                        <div className={s.articleInfo}>
                            <div className={s.person}>
                                <img src={avatar4} alt="avatar4" className={s.avatar}/>
                                <span className={s.name}>Cameron Williamson</span>
                            </div>
                            <p className={s.articleTitle}>12 Things To Know Before Buying A House</p>
                            <p className={s.text}>Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house</p>
                            <div className={s.time}>
                                <Time className={s.clock}/>
                                <span className={s.timeInfo}>8 min read | 25 Apr 2021</span>
                            </div>
                        </div>
                        
                    </article>
                </div>
            </div>
        </section>
    );
  }

export default MoreAbout