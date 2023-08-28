import React from 'react';
import s from './ReadyToSell.module.css';

const ReadyToSell = () => {
  
    return (
        <section>
            <div class="container">
                <div>
                    <div className={s.head}>
                        <p className={s.pretitle}>Ready to Sell!</p>
                        <h2 className={s.title}>Let’s Tour And See Our House!</h2>
                        <p className={s.text}>Houses recommended by our partners that have been curated to become the home of your dreams!</p>
                        <ul className={s.list}>
                            <li className={s.listEl}></li>
                            <li className={s.listEl}></li>
                            <li className={s.listEl}></li>
                            <li className={s.listEl}></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
  }

export default ReadyToSell