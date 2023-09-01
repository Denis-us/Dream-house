import React from 'react';
import FormSubscribe from '../FormSubscribe/FormSubscribe';
import s from './Subscribe.module.css';

import email from '../../images/svg/email.svg'

import subscribeIcons from '../../json/subscribeIcons.json'


const Subscribe = () => {
  
    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    const availableAnimations = [
        s.floatAnimation1,
        s.floatAnimation2,
        s.floatAnimation3,
        s.floatAnimation4,
        s.floatAnimation5
    ];
    
    function getRandomAnimation() {
        const randomIndex = Math.floor(Math.random() * availableAnimations.length);
        return availableAnimations[randomIndex];
    }

    return (
        <section className={s.section}>
            <div class="container">
                <div className={s.wrapper}>
                    <div className={s.icons}>
                        {subscribeIcons.slice(0, 4).map((icon, index) => (
                            <img src={icon.icon} alt="icon" key={index}
                            className={`
                                ${icon.type === "avatar" ? s.icon : ""}
                                ${icon.type === "house" ? s.iconHouse : ""}
                            `}
                            style={{
                                animation: `${getRandomAnimation()} ${getRandomNumber(5, 10)}s ease-in-out infinite`
                            }}
                        />
                        ))}
                    </div>
                    <div className={s.content}>
                        <h2 className={s.title}>Subscribe For More Info<br/>And Update From Hounter</h2>
                        <FormSubscribe icoInput={email} placeholder={'Your email here'} btn={'Subsribe Now'}/>
                    </div>
                    <div className={s.icons}>
                        {subscribeIcons.slice(4, 12).map((icon, index) => (
                            <img src={icon.icon} alt="icon" key={index}
                                className={`
                                    ${s.icon}
                                    ${icon.type === "avatar" ? s.icon : ""}
                                    ${icon.type === "house" ? s.iconHouse : ""}
                                `}
                                style={{
                                    animation: `${getRandomAnimation()} ${getRandomNumber(5, 10)}s ease-in-out infinite`
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
  }

export default Subscribe