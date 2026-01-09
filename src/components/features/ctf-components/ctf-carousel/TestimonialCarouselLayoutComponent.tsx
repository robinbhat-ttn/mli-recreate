import React from 'react';
import styles from './testimonial-carousel-layout.module.scss';

type Props = any;

export const TestimonialCarouselLayoutComponent = (props: Props) => {
  return (
    <div className={styles['testimonialCarousel']}>
      <p>Testimonial Carousel Layout Component</p>
    </div>
  );
};
