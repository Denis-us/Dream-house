import React, { useState } from 'react';
import s from './Form.module.css';

const Form = ({ icoInput, placeholder, btn, icoBtn }) => {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail);
        setIsValidEmail(isValid);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setIsFormSubmitted(true);

        if (email === '' || !isValidEmail) {
        return;
        }
    };

    return (
        <form className={`${s.form} ${(!isValidEmail || (isFormSubmitted && email === '')) ? s.invalid : ''}`} onSubmit={handleFormSubmit}>
            <div className={s.wrapper}>
                <img src={icoInput} alt="marker" />
                <input
                    className={s.input}
                    type="email"
                    placeholder={placeholder}
                    value={email}
                    onChange={handleEmailChange}
                />
                <button className={s.btn} type="submit">
                    {btn}
                    {icoBtn && <img src={icoBtn} alt="arrow" className={s.arrow} />}
                </button>
            </div>
        
            {isFormSubmitted && !isValidEmail && <p className={s.errorMsg}>Please enter a valid email address</p>}
        </form>
  );
};

export default Form;