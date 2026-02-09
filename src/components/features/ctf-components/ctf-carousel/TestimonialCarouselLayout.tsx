import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import type { Settings } from 'react-slick';

import type { CarouselFieldsFragment } from './__generated/ctf-carousel.generated';
import styles from './TestimonialCarouselLayout.module.scss';
import { CtfRichtext } from '../ctf-richtext/ctf-richtext';

// @ts-ignore - react-slick types conflict
const Slider = dynamic(() => import('react-slick'), { ssr: false });

// Separate prev/next arrow components
const PrevArrow = ({ style, onClick }: any) => (
  <button type="button" style={{ ...style }} onClick={onClick} aria-hidden="true" tabIndex={-1}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" />
    </svg>
  </button>
);

const NextArrow = ({ style, onClick }: any) => (
  <button type="button" style={{ ...style }} onClick={onClick} aria-hidden="true" tabIndex={-1}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
    </svg>
  </button>
);

const settings: Settings = {
  dots: false, // Default: no dots
  arrows: true, // Default: show arrows
  infinite: false,
  speed: 400,
  slidesToShow: 2, // Default: 2 cards per slide
  slidesToScroll: 1,
  nextArrow: (<NextArrow />) as any,
  prevArrow: (<PrevArrow />) as any,
  responsive: [
    {
      breakpoint: 1222,
      settings: {
        slidesToShow: 2,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
        adaptiveHeight: true,
      },
    },
  ],
};

export const TestimonialCarouselLayout = (props: CarouselFieldsFragment) => {
  const inspectorMode = useContentfulInspectorMode();
  const title = props?.carouselTitle;
  const testimonialCards = props?.cardsCollection?.items ?? [];
  return (
    <div
      className={styles.testimonialCarouselContainer}
      {...inspectorMode({ entryId: props?.sys?.id, fieldId: 'carousel' })}
    >
      <div className={styles['testimonialCarouselContainer__title']}>{title}</div>
      <Slider {...(settings as any)} className={styles.slider}>
        {testimonialCards.map(card => {
          const id = card?.sys?.id ?? Math.random().toString(36).slice(2, 9);
          const img = card?.cardImage;
          const title = card?.cardTitle;
          const preTitle = card?.preTitle;
          const content = card?.cardContent;

          return (
            <div
              key={id}
              className={styles['testimonialCarouselContainer__slide']}
              {...inspectorMode({ entryId: card?.sys?.id, fieldId: 'card' })}
            >
              <div
                className={styles['testimonialCarouselContainer__slide__person-details']}
                aria-labelledby={`card-title-${id}`}
              >
                {img?.url ? (
                  // Image Div
                  <div
                    className={
                      styles['testimonialCarouselContainer__slide__person-details__image-wrap']
                    }
                  >
                    <Image
                      src={img.url}
                      alt={img.title ?? title ?? ''}
                      width={48}
                      height={48}
                      priority={false}
                    />
                  </div>
                ) : null}
                {/* Name Age City Div */}
                {preTitle?.json && (
                  <div
                    className={
                      styles['testimonialCarouselContainer__slide__person-details__details']
                    }
                  >
                    <CtfRichtext json={preTitle?.json} disableContainer={true} />
                  </div>
                )}
              </div>
              {/* Testimonial Content Div */}
              <p className={styles['testimonialCarouselContainer__slide__body']}>
                {content?.json && (
                  <CtfRichtext json={content.json} links={content.links} disableContainer={true} />
                )}
              </p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
