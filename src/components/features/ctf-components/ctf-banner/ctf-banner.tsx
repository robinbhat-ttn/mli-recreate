import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import styles from './ctf-banner.module.scss';
import { CtfRichtext } from '../ctf-richtext/ctf-richtext';

type Props = any;

export const CtfBanner = (props: Props) => {
  const inspectorMode = useContentfulInspectorMode();
  const data = props;
  const title = data?.bannerTitle || '';
  const image = data?.bannerImage?.url;
  const texts = data?.bannerTextCollection?.items || [];
  const cards = data?.policyCardsCollection?.items || [];

  return (
    <Box
      component="section"
      className={styles.banner}
      {...inspectorMode({ entryId: props.sys.id, fieldId: 'banner' })}
    >
      <div className={styles['banner__inner']}>
        <div className={styles['banner__left']}>
          <h1 className={styles['banner__title']}>{title}</h1>

          <ul className={`hidden-mobile ${styles['banner__texts']}`}>
            {texts.map((t: any) => {
              const iconBlock = t.body?.links?.assets?.block?.[0];
              const firstNode = t?.body?.json?.content?.[0];
              const isSimpleParagraph =
                firstNode &&
                firstNode.nodeType === 'paragraph' &&
                firstNode.content.every(c => c.nodeType === 'text');
              return (
                <li
                  key={t.sys?.id}
                  className={styles['banner__text-item']}
                  {...inspectorMode({ entryId: t.sys?.id, fieldId: 'componentTextBlock' })}
                >
                  {iconBlock?.url && (
                    <Image
                      src={iconBlock?.url}
                      alt="icon"
                      className={styles['banner__text-icon']}
                      height={iconBlock?.height}
                      width={iconBlock?.width}
                    />
                  )}
                  {isSimpleParagraph ? (
                    <span>{firstNode.content.map(c => c.value).join('')}</span>
                  ) : (
                    <CtfRichtext {...t.body} />
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles['banner__right']}>
          {image && (
            <div className={styles['banner__image-wrap']}>
              <Image
                src={image}
                alt="Banner"
                className={styles['banner__image']}
                height={'420'}
                width={'348'}
              />
            </div>
          )}
        </div>
      </div>
      <ul className={styles['banner__texts--mobile']}>
        {texts.map((t: any) => {
          const iconBlock = t.body?.links?.assets?.block?.[0];
          const firstNode = t?.body?.json?.content?.[0];
          const isSimpleParagraph =
            firstNode &&
            firstNode.nodeType === 'paragraph' &&
            firstNode.content.every(c => c.nodeType === 'text');
          return (
            <li
              key={t.sys?.id}
              className={styles['banner__text-item']}
              {...inspectorMode({ entryId: t.sys?.id, fieldId: 'componentTextBlock' })}
            >
              {iconBlock?.url && (
                <Image
                  src={iconBlock?.url}
                  alt="icon"
                  className={styles['banner__text-icon']}
                  height={iconBlock?.height || 24}
                  width={iconBlock?.width || 24}
                />
              )}
              {isSimpleParagraph ? (
                <span>{firstNode.content.map(c => c.value).join('')}</span>
              ) : (
                <CtfRichtext {...t.body} />
              )}
            </li>
          );
        })}
      </ul>
      <div className={`container-sec ${styles['banner__cards-wrapper']}`}>
        <div className={styles['banner__cards']}>
          {cards.map((c: any) => {
            const cardImg = c.cardImage?.url;
            return (
              <a
                key={c.sys?.id}
                className={styles['banner__card']}
                href={c.cardLink || '#'}
                {...inspectorMode({ entryId: c.sys?.id, fieldId: 'card' })}
              >
                <div className={styles['banner__card-top']}>
                  <span className={styles['banner__card-pill']}>
                    {documentToReactComponents(c.cardContent.json)}
                  </span>
                </div>
                <div className={styles['banner__card-body']}>
                  {cardImg && (
                    <div className={styles['banner__card-icon']}>
                      <Image
                        src={cardImg}
                        alt={c.cardTitle}
                        height={c.cardImage?.height}
                        width={c.cardImage?.width}
                      />
                    </div>
                  )}
                  <div className={styles['banner__card-title']}>{c.cardTitle}</div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </Box>
  );
};

export default CtfBanner;
