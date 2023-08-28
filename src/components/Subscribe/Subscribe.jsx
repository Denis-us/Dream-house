import React from 'react';
import Form from '../Form/Form';
import s from './Subscribe.module.css';

import email from '../../svg/email.svg'

const Subscribe = () => {
  
    return (
        <section>
            <div class="container">
                <div className={s.wrapper}>
                    <h2 className={s.title}>Subscribe For More Info<br/>And Update From Hounter</h2>
                    <Form icoInput={email} placeholder={'Your email here'} btn={'Subsribe Now'}/>
                </div>
            </div>
        </section>
    );
  }

export default Subscribe