import React from 'react';
import ReviewsSwiper from '../ReviewsSwiper/ReviewsSwiper';
import s from './Reviews.module.css';

const Reviews = () => {
  
    return (
        <section class={s.reviews}>
            <div dlass="container">
                <p className={s.pretitle}>See Our Review</p>
                <h2 className={s.title}>What Our User Say About Us</h2>
            </div>
            <ReviewsSwiper/>
        </section>
    );
  }

export default Reviews