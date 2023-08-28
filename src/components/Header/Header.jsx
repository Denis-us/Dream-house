import React from 'react';
import Logo from '../Logo/Logo';
import s from './Header.module.css';
import houseImg from '../../png/hero-image.png'
import trianglesImg from '../../svg/trianglesHero.svg'

const Header = () => {
  
    return (
        <header className={s.header}>
            <div class="container">
              <div class={s.siteNav}>
                <Logo/>
                
                <div className={s.menu}>
                  <ul class={s.list}>
                      <li class={s.listEl}><a href="/" class={s.link}>About Us</a></li>
                      <li class={s.listEl}><a href="/" class={s.link}>Article</a></li>
                      <li class={s.listEl}><a href="/" class={s.link}>Property</a></li>
                  </ul>

                  <button class={s.btnNav}>Sign Up!</button>
                </div>
              </div>
              <img src={houseImg} alt="hotel" className={s.houseImg}/>
              <img src={trianglesImg} alt="triangles" className={s.trianglesImg}/>
            </div>
        </header>
    );
  }

export default Header