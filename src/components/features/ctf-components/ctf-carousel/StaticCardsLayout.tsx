import { useContentfulInspectorMode } from '@contentful/live-preview/react';

import Image from 'next/image';

import { CarouselFieldsFragment } from './__generated/ctf-carousel.generated';
import styles from './StaticCardsLayout.module.scss';
import { CtfRichtext } from '../ctf-richtext/ctf-richtext';

export const StaticCardsLayout = (props: CarouselFieldsFragment) => {
  const inspectorMode = useContentfulInspectorMode();
  const cardSectionTitle = props?.carouselTitle;
  const cards = props?.cardsCollection?.items || [];
  return (
    <div className={styles.staticCardsWrapper}>
      <div
        className={styles.staticCardsContainer}
        {...inspectorMode({ entryId: props?.sys?.id, fieldId: 'carousel' })}
      >
        <p className={styles['staticCardsContainer__card-section-title']}>{cardSectionTitle}</p>
        <div className={styles['staticCardsContainer__card-container']}>
          {cards.map(card => {
            const id = card?.sys?.id ?? Math.random().toString(36).slice(2, 9);
            const img = card?.cardImage;
            const title = card?.cardTitle;
            const content = card?.cardContent;
            return (
              <div
                key={id}
                className={styles['staticCardsContainer__card-container__card-wrapper']}
                {...inspectorMode({ entryId: card?.sys?.id, fieldId: 'card' })}
              >
                {img && (
                  <Image
                    priority
                    fetchPriority="high"
                    src={img?.url ?? ''}
                    alt={img?.title ?? ''}
                    height={43}
                    width={43}
                    className={styles['staticCardsContainer__card-container__card-wrapper__image']}
                  />
                )}
                {title && (
                  <div
                    className={styles['staticCardsContainer__card-container__card-wrapper__title']}
                  >
                    {title}
                  </div>
                )}
                {content && (
                  <div
                    className={
                      styles['staticCardsContainer__card-container__card-wrapper__content']
                    }
                  >
                    <CtfRichtext {...content} disableContainer />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
