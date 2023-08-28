import React from 'react';
import s from './Form.module.css';

const Form = ({icoInput, placeholder, btn, icoBtn}) => {
  
    return (
        <form className={s.form}>
            <img src={icoInput} alt="marker"/>
            <input className={s.input} placeholder={placeholder}/>
            <button className={s.btn}>{btn}
                {icoBtn && <img src={icoBtn} alt="arrow" className={s.arrow}/>}
            </button>
        </form>
    );
  }

export default Form