import React from 'react';
import styles from './feature-cards-layout.module.scss';

type Props = any;

export const FeatureCardsLayoutComponent = (props: Props) => {
  return (
    <div className={styles['featureCards']}>
      <p>Feature Cards Layout Component</p>
    </div>
  );
};
