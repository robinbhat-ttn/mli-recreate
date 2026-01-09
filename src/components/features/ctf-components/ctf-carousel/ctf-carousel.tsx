import React from 'react';
import type { FC } from 'react';

import type { CarouselFieldsFragment } from './__generated/ctf-carousel.generated';
import { CarouselLayoutComponent } from './CarouselLayoutComponent';
import { StaticCardsLayout } from './StaticCardsLayout';
import { TestimonialCarouselLayout } from './TestimonialCarouselLayout';
import { FeatureCardsLayout } from './FeatureCardsLayout';

export const CtfCarousel: FC<CarouselFieldsFragment> = props => {
  switch (props.carouselType) {
    case 'Carousel Layout':
      return <CarouselLayoutComponent {...props} />;

    case 'Feature Cards Layout':
      return <FeatureCardsLayout {...props} />;

    case 'Testimonial Carousel Layout':
      return <TestimonialCarouselLayout {...props} />;

    case 'Static Cards Layout':
      return <StaticCardsLayout {...props} />;
    default:
      return null;
  }
};

export default CtfCarousel;
