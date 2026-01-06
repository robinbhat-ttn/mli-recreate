import { CtfRichtext, CtfRichtextPropsInterface } from '../ctf-richtext/ctf-richtext';
import { CarouselFieldsFragment } from './__generated/ctf-carousel.generated';
import styles from './FeatureCardsLayout.module.scss';
export const FeatureCardsLayout = (props: CarouselFieldsFragment) => {
  const title = props?.carouselTitle ?? 'Carousel Title';
  const cards = props?.cardsCollection?.items || [];
  const mid = Math.ceil(cards.length / 2);
  const cardsTopRow = cards.slice(0, mid);
  console.log('Cards Top Row: ', cardsTopRow);
  const cardsBottomRow = cards.slice(mid);
  console.log('Cards Bottom Row: ', cardsBottomRow);
  return (
    <div className={styles.featureCardsLayoutContainer}>
      <div className={styles['featureCardsLayoutContainer__title']}>{title}</div>
      <div className={styles['featureCardsLayoutContainer__container']}>
        <div className={styles['featureCardsLayoutContainer__container__wrapper']}>
          {cardsTopRow.map(card => {
            const id = card?.sys?.id ?? Math.random().toString(36).slice(2, 9);
            const cardContent = card?.cardContent;
            return (
              <div
                key={id}
                className={styles['featureCardsLayoutContainer__container__wrapper__card']}
              >
                <CtfRichtext {...(cardContent as CtfRichtextPropsInterface)} disableContainer />
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles['featureCardsLayoutContainer__container']}>
        <div className={styles['featureCardsLayoutContainer__container__wrapper']}>
          {cardsBottomRow.map(card => {
            const id = card?.sys?.id ?? Math.random().toString(36).slice(2, 9);
            const cardContent = card?.cardContent;
            return (
              <div
                key={id}
                className={styles['featureCardsLayoutContainer__container__wrapper__card']}
              >
                <CtfRichtext {...(cardContent as CtfRichtextPropsInterface)} disableContainer />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
