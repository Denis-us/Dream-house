import React from 'react';
import FormSubscribe from '../FormSubscribe/FormSubscribe';
import s from './Subscribe.module.css';

import email from '../../images/svg/email.svg'

const Subscribe = () => {
  
    return (
        <section>
            <div class="container">
                <div className={s.wrapper}>
                    <h2 className={s.title}>Subscribe For More Info<br/>And Update From Hounter</h2>
                    <FormSubscribe icoInput={email} placeholder={'Your email here'} btn={'Subsribe Now'}/>
                </div>
            </div>
        </section>
    );
  }

export default Subscribe