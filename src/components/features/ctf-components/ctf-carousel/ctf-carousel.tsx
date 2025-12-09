import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import type { FC } from 'react';
import type { Settings } from 'react-slick';

import styles from './ctf-carousel.module.scss';
import type { CarouselFieldsFragment } from './__generated/ctf-carousel.generated';
import { CtfRichtext } from '../ctf-richtext/ctf-richtext';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden focusable="false">
        <circle cx="12" cy="12" r="11" fill="white" stroke="#e6e9ee" strokeWidth="1" />
        <path
          d={isPrev ? 'M14 7 L9 12 L14 17' : 'M10 7 L15 12 L10 17'}
          fill="none"
          stroke="#1f2f4a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

const settings: Settings = {
  dots: false,
  infinite: false,
  speed: 400,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <Arrow />,
  prevArrow: <Arrow />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

export const CtfCarousel: FC<CarouselFieldsFragment> = props => {
  const items = (props as any)?.cardsCollection?.items || [];

  if (!items || items.length === 0) return null;

  return (
    <div className={styles.carousel}>
      <div className={styles['carousel__inner']}>
        <Slider {...settings}>
          {items.map((card: any) => {
            const id = card?.sys?.id ?? Math.random().toString(36).slice(2, 9);
            const img = card?.cardImage;
            const title = card?.cardTitle;
            const content = card?.cardContent;

            return (
              <div key={id} className={styles['carousel__slide']}>
                <div className={styles['carousel__card']} aria-labelledby={`card-title-${id}`}>
                  <div className={styles['carousel__media']}>
                    {img?.url ? (
                      <div className={styles['carousel__image-wrap']}>
                        <Image
                          src={img.url}
                          alt={img.title ?? title ?? ''}
                          width={img.width ?? 66}
                          height={img.height ?? 77}
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
                          containerClassName={styles['carousel__richtext-container']}
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
    </div>
  );
};

export default CtfCarousel;
