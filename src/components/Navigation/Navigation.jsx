import React from 'react';
import s from './Navigation.module.css';
import {ReactComponent as Arrow} from '../../images/svg/arrowRight.svg'


const Navigation = ({isClicked}) => {

    return (

        <nav className={`${s.menu} ${isClicked ? s.transformed : ''}`} >   
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
    );
}
                  
export default Navigation