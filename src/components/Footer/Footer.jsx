import React from 'react';
import Logo from '../Logo/Logo';
import s from './Footer.module.css';

import {ReactComponent as Facebook} from '../../images/svg/facebook.svg';
import {ReactComponent as Twitter} from '../../images/svg/twitter.svg';
import {ReactComponent as Instagrem} from '../../images/svg/instagram.svg';


const Footer = () => {
  
    return (
        <footer className={s.footer}>
            <div className={s.circleFirst}></div>
            <div className={s.circleSecond}></div>
            <div class="container">
                <div className={s.footerMain}>
                    <div className={s.footerSocials}>
                        <Logo/>
                        <p className={s.footerText}>We provide information about properties such as houses, villas and apartments to help people find their dream home</p>
                        <ul className={s.socials}>
                            <li className={s.socEl}>
                                <a href="https://facebook.com/">
                                    <Facebook className={s.ico}/>
                                </a>
                            </li>
                            <li className={s.socEl}>
                                <a href="https://twitter.com/">
                                    <Twitter className={s.ico}/>
                                </a>
                            </li>
                            <li className={s.socEl}>
                                <a href="https://www.instagram.com/">
                                    <Instagrem className={s.ico}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <ul className={s.footerInfo}>
                        <li className={s.infoEl}>
                            <h3 className={s.infoTitle}>Property</h3>
                            <a href='/' className={s.infoLink}>House</a>
                            <a href='/' className={s.infoLink}>Apartment</a>
                            <a href='/' className={s.infoLink}>Villa</a>
                        </li>
                        <li className={s.infoEl}>
                            <h3 className={s.infoTitle}>Article</h3>
                            <a href='/' className={s.infoLink}>New Article</a>
                            <a href='/' className={s.infoLink}>Popular Article</a>
                            <a href='/' className={s.infoLink}>Most Read</a>
                            <a href='/' className={s.infoLink}>Tips & Tricks</a>
                        </li>
                        <li className={s.infoEl}>
                            <h3 className={s.infoTitle}>Contact</h3>
                            <a href='/' className={s.infoLink}>2464 Royal Ln. Mesa, New Jersey 45463</a>
                            <a href='tel:6715550110' className={s.infoLink}>(671) 555-0110</a>
                            <a href='mailto:info@hounter.com' className={s.infoLink}>info@hounter.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
  }

export default Footer