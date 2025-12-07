import React from 'react';
import { Container } from '@mui/material';
import styles from './ctf-banner.module.scss';
import { CtfRichtext } from '../ctf-richtext/ctf-richtext';

type Props = any;

export const CtfBanner = (props: Props) => {
  const data = props;
  const title = data?.bannerTitle || '';
  const image = data?.bannerImage?.url;
  const texts = data?.bannerTextCollection?.items || [];
  const cards = data?.policyCardsCollection?.items || [];

  return (
    <section className={styles.banner}>
      <Container maxWidth="xl">
        <div className={styles['banner__inner']}>
          <div className={styles['banner__left']}>
            <h1 className={styles['banner__title']}>{title}</h1>

            <ul className={styles['banner__texts']}>
              {texts.map((t: any) => {
                const iconAsset = t.body?.links?.assets?.block?.[0]?.url;
                return (
                  <li key={t.sys?.id} className={styles['banner__text-item']}>
                    {iconAsset && (
                      <img src={iconAsset} alt="icon" className={styles['banner__text-icon']} />
                    )}
                    <CtfRichtext {...t.body} />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={styles['banner__right']}>
            {image && (
              <div className={styles['banner__image-wrap']}>
                <img src={image} alt="Banner" className={styles['banner__image']} />
              </div>
            )}
          </div>
        </div>
        <div className={styles['banner__cards-wrapper']}>
          <div className={styles['banner__cards']}>
            {cards.map((c: any) => {
              const cardImg = c.cardImage?.url;
              return (
                <a key={c.sys?.id} className={styles['banner__card']} href={c.cardLink || '#'}>
                  <div className={styles['banner__card-top']}>
                    <span className={styles['banner__card-pill']}>18% GST 0% GST</span>
                  </div>
                  <div className={styles['banner__card-body']}>
                    {cardImg && (
                      <div className={styles['banner__card-icon']}>
                        <img src={cardImg} alt={c.cardTitle} />
                      </div>
                    )}
                    <div className={styles['banner__card-title']}>{c.cardTitle}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CtfBanner;
