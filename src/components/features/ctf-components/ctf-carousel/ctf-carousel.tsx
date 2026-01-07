import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';
import type { FC } from 'react';
import type { Settings } from 'react-slick';

import type { CarouselFieldsFragment } from './__generated/ctf-carousel.generated';
import styles from './ctf-carousel.module.scss';
import { FeatureCardsLayout } from './FeatureCardsLayout';
import { StaticCardsLayout } from './StaticCardsLayout';
import { TestimonialCarouselLayout } from './TestimonialCarouselLayout';
import { CtfRichtext } from '../ctf-richtext/ctf-richtext';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const Arrow = ({ className, style, onClick }: any) => {
  const isPrev = (className || '').includes('prev');

  return (
    <button
      type="button"
      className={`${className ?? ''} ${styles['carousel__arrow']} ${
        isPrev ? styles['carousel__arrow--left'] : styles['carousel__arrow--right']
      }`}
      style={{ ...style }}
      onClick={onClick}
      aria-hidden="true"
      tabIndex={-1}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden
        focusable="false"
        style={{ transform: isPrev ? 'scaleX(-1)' : undefined }}
      >
        <rect
          x="32"
          y="32"
          width="32"
          height="32"
          rx="16"
          transform="rotate(-180 32 32)"
          fill="#E0E0E0"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.2064 17.1427L7.11118 17.1427C6.49753 17.1427 6.00008 16.6311 6.00008 15.9999C6.00008 15.3687 6.49753 14.857 7.11118 14.857L22.2063 14.857L17.4366 9.95092C17.0027 9.50459 17.0027 8.78103 17.4366 8.33473C17.8705 7.88844 18.574 7.88841 19.0079 8.33473L25.6627 15.1798C25.7199 15.2369 25.7712 15.3003 25.8154 15.3689C25.8318 15.3942 25.847 15.4201 25.8612 15.4464C25.9496 15.6104 25.9999 15.7991 25.9999 15.9999C25.9999 16.0065 25.9999 16.0132 25.9998 16.0198C25.9976 16.1492 25.9746 16.2732 25.934 16.3887C25.8803 16.5418 25.7938 16.6854 25.6745 16.8081L19.0079 23.6653C18.574 24.1116 17.8705 24.1116 17.4366 23.6653C17.0027 23.2189 17.0027 22.4954 17.4366 22.0491L22.2064 17.1427Z"
          fill="#343842"
        />
      </svg>
    </button>
  );
};

const settings: Settings = {
  dots: false, // Default: no dots
  arrows: true, // Default: show arrows
  infinite: false,
  speed: 400,
  slidesToShow: 3, // Default: 3 cards per slide
  slidesToScroll: 1,
  nextArrow: <Arrow />,
  prevArrow: <Arrow />,
  responsive: [
    {
      breakpoint: 1222,
      settings: {
        slidesToShow: 3,
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

export const CtfCarousel: FC<CarouselFieldsFragment> = props => {
  console.log('Carousel Props: ', props);
  const inspectorMode = useContentfulInspectorMode();
  const items = (props as any)?.cardsCollection?.items || [];

  if (!items || items.length === 0) return null;

  switch (props.carouselType) {
    case 'Carousel Layout':
      return (
        <div
          className={`container-sec ${styles.carousel}`}
          {...inspectorMode({ entryId: props.sys.id, fieldId: 'carousel' })}
        >
          <Slider {...settings}>
            {items.map((card: any) => {
              const id = card?.sys?.id ?? Math.random().toString(36).slice(2, 9);
              const img = card?.cardImage;
              const title = card?.cardTitle;
              const content = card?.cardContent;

              return (
                <div key={id} className={styles['carousel__slide']}>
                  <div
                    className={styles['carousel__card']}
                    aria-labelledby={`card-title-${id}`}
                    {...inspectorMode({ entryId: card?.sys?.id, fieldId: 'card' })}
                  >
                    <div className={styles['carousel__media']}>
                      {img?.url ? (
                        <div className={styles['carousel__image-wrap']}>
                          <Image
                            src={img.url}
                            alt={img.title ?? title ?? ''}
                            width={img.width}
                            height={img.height}
                            priority={false}
                          />
                          <span className={styles['carousel__media-underline']} />
                        </div>
                      ) : null}
                    </div>

                    <div className={styles['carousel__body']}>
                      {title && (
                        <h3 id={`card-title-${id}`} className={styles['carousel__title']}>
                          {title}
                        </h3>
                      )}

                      {content?.json && (
                        <div className={styles['carousel__content']}>
                          <CtfRichtext
                            json={content.json}
                            links={content.links}
                            disableContainer={true}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      );

    case 'Static Cards Layout':
      return <StaticCardsLayout {...props} />;
    case 'Feature Cards Layout':
      return <FeatureCardsLayout {...props} />;
    case 'Testimonial Carousel Layout':
      return <TestimonialCarouselLayout {...props} />;
    default:
      return null;
  }
};

export default CtfCarousel;
