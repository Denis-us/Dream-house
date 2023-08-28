import React from 'react';
import Logo from '../Logo/Logo';
import s from './Footer.module.css';

import facebook from '../../svg/facebook.svg';
import twitter from '../../svg/twitter.svg';
import instagrem from '../../svg/instagram.svg';


const Footer = () => {
  
    return (
        <footer>
            <div class="container">
                <div className={s.footerMain}>
                    <div className={s.footerSocials}>
                        <Logo/>
                        <p className={s.footerText}>We provide information about properties such as houses, villas and apartments to help people find their dream home</p>
                        <ul className={s.socials}>
                            <li className={s.socEl}>
                                <img src={facebook} alt="facebook"/>
                            </li>
                            <li className={s.socEl}>
                                <img src={twitter} alt="twitter"/>
                            </li>
                            <li className={s.socEl}>
                                <img src={instagrem} alt="instagrem"/>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className={s.footerInfo}>
                            <li className={s.infoEl}>
                                <h3 className={s.infoTitle}>Property</h3>
                                <p className={s.infoText}>House</p>
                                <p className={s.infoText}>Apartment</p>
                                <p className={s.infoText}>Villa</p>
                            </li>
                            <li className={s.infoEl}>
                                <h3 className={s.infoTitle}>Article</h3>
                                <p className={s.infoText}>New Article</p>
                                <p className={s.infoText}>Popular Article</p>
                                <p className={s.infoText}>Most Read</p>
                                <p className={s.infoText}>Tips & Tricks</p>
                            </li>
                            <li className={s.infoEl}>
                                <h3 className={s.infoTitle}>Contact</h3>
                                <p className={s.infoText}>2464 Royal Ln. Mesa, New Jersey 45463</p>
                                <p className={s.infoText}>(671) 555-0110</p>
                                <p className={s.infoText}>info@hounter.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
  }

export default Footer