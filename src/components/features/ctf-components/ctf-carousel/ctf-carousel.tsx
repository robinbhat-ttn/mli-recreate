import React from 'react';
import type { FC } from 'react';

import type { CarouselFieldsFragment } from './__generated/ctf-carousel.generated';
import { CarouselLayoutComponent } from './CarouselLayoutComponent';
import { FeatureCardsLayoutComponent } from './FeatureCardsLayoutComponent';
import { TestimonialCarouselLayoutComponent } from './TestimonialCarouselLayoutComponent';
import { StaticCardsLayout } from './StaticCardsLayout';
import { TestimonialCarouselLayout } from './TestimonialCarouselLayout';
import { CtfRichtext } from '../ctf-richtext/ctf-richtext';

export const CtfCarousel: FC<CarouselFieldsFragment> = props => {
  switch (props.carouselType) {
    case 'Carousel Layout':
      return <CarouselLayoutComponent {...props} />;

    case 'Feature Cards Layout':
      return <FeatureCardsLayoutComponent {...props} />;

    case 'Testimonial Carousel Layout':
      return <TestimonialCarouselLayoutComponent {...props} />;

    case 'Static Cards Layout':
      return <StaticCardsLayout {...props} />;
    default:
      return null;
  }
};

export default CtfCarousel;
