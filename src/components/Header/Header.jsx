import React from 'react';
import Logo from '../Logo/Logo';
import s from './Header.module.css';

import {ReactComponent as Arrow} from '../../svg/arrowRight.svg'


const Header = () => {
  
    return (
        <header className={s.header}>
            <div class="container">
              <div class={s.siteNav}>
                <Logo/>
                
                <nav className={s.menu}>
                  <ul class={s.list}>
                      <li class={s.listEl}>
                        <a href="/" class={s.link}>
                          <span>About Us</span>
                        </a>
                      </li>
                      <li class={s.listEl}>
                        <a href="/" class={s.link}>
                          <span>Article</span>
                        </a>
                      </li>
                      <li class={`${s.listEl} ${s.dropMenu}`}>
                        <a href="/" class={s.link}>
                          <span>Property</span>
                          <Arrow className={s.arrow}/>
                        </a>
                        <ul class={s.dropdown}>
                          <li class={s.dropdownItem}><a href="/" class={s.link}>House</a></li>
                          <li class={s.dropdownItem}><a href="/" class={s.link}>Villa</a></li>
                          <li class={s.dropdownItem}><a href="/" class={s.link}>Apartment</a></li>
                        </ul>
                      </li>
                      
                  </ul>

                  <button class={s.btnNav}>Sign Up!</button>
                </nav>
              </div>
            </div>
        </header>
    );
  }

export default Header