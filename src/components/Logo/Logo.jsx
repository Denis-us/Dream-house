import React from 'react';
import s from './Logo.module.css';
import logo from '../../svg/logo.svg';

const Logo = () => {
  
    return (
        <div class={s.logo}>
            <img src={logo} alt="logo"/>
            <a href="/" class={s.text}>Hounter</a>
        </div>
    );
  }

export default Logo