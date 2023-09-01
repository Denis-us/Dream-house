import React from 'react';
import s from './Logo.module.css';
import {ReactComponent as Logotipe} from '../../images/svg/logo.svg'

const Logo = () => {
  
    return (
        <div class={s.logo}>
            <Logotipe className={s.icon}/>
            <a href="/" class={s.text}>Hounter</a>
        </div>
    );
  }

export default Logo