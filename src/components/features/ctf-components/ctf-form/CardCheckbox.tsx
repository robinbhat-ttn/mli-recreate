import Image from 'next/image';
import { useState, useEffect } from 'react';

import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

import { useCtfCardQuery } from '../ctf-card/__generated/ctf-card.generated';

import styles from '../ctf-tabbed-form/ctf-tabbed-form.module.scss';

export const CardCheckbox = (props: any) => {
  const id = props?.id;
  const field = props?.field;
  const [isChecked, setIsChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { data, isLoading } = useCtfCardQuery(
    {
      id: id || '',
    },
    {
      enabled: !!id,
    },
  );

  const cardData = useContentfulLiveUpdates(data?.card);

  // Load checked state from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && id) {
      try {
        const riderData = localStorage.getItem('rider_step_2/4');
        if (riderData) {
          const checkedCards = JSON.parse(riderData);
          setIsChecked(checkedCards[id] || false);
        }
      } catch (error) {
        console.error('Error loading rider data from localStorage:', error);
      }
    }
  }, [id]);

  const handleCheckboxChange = (e: any) => {
    setIsChecked(e.target.checked);
  };

  if (isLoading) {
    return <div className={styles.cardCheckbox__loading}>Loading...</div>;
  }

  if (!cardData) {
    return null;
  }

  // Extract preTitle badge
  const preTitle = cardData?.preTitle?.json?.content?.[0]?.content?.[0]?.value || 'Add-on';

  // Extract description from cardContent
  const cardContent = cardData?.cardContent?.json?.content || [];
  const description = cardContent[0]?.content?.[0]?.value || 'Additional protection';

  // Extract price from cardContent (second paragraph usually contains pricing)
  let price = '';
  if (cardContent.length > 1) {
    const priceContent = cardContent[1]?.content;
    if (priceContent) {
      price = priceContent
        .map((item: any) => item.value || '')
        .join('')
        .trim();
    }
  }

  return (
    <>
      <div
        className={`${styles['cardCheckbox__wrapper']} ${isChecked ? styles['cardCheckbox__wrapper--selected'] : ''}`}
      >
        {cardData?.cardImage?.url && (
          <div className={styles['cardCheckbox__iconContainer']}>
            <Image
              src={cardData.cardImage.url}
              alt={cardData?.cardTitle || 'Card'}
              width={50}
              height={50}
            />
          </div>
        )}

        <div className={styles['cardCheckbox__content']}>
          <div className={styles['cardCheckbox__topRow']}>
            <span className={styles['cardCheckbox__badge']}>{preTitle}</span>
            {field?.icon?.url && (
              <button
                className={styles['cardCheckbox__infoBtnTop']}
                onClick={() => setShowModal(true)}
                aria-label="More info"
                type="button"
              >
                <Image src={field.icon.url} alt="Info" width={18} height={18} unoptimized />
              </button>
            )}
          </div>

          <h3 className={styles['cardCheckbox__title']}>{cardData?.cardTitle || 'Add-on'}</h3>
          <p className={styles['cardCheckbox__description']}>{description}</p>

          {price && <div className={styles['cardCheckbox__price']}>{price}</div>}
        </div>

        <div className={styles['cardCheckbox__checkboxContainer']}>
          <input
            type="checkbox"
            className={styles['cardCheckbox__checkbox']}
            checked={isChecked}
            onChange={handleCheckboxChange}
            data-card-id={id}
          />
        </div>
      </div>

      {showModal && (
        <div className={styles['cardCheckbox__modal']} role="presentation">
          <div
            className={styles['cardCheckbox__modalContent']}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
          >
            <button
              className={styles['cardCheckbox__modalClose']}
              onClick={() => setShowModal(false)}
              type="button"
              aria-label="Close"
            >
              ×
            </button>
            <p>Modal content from popup data</p>
          </div>
        </div>
      )}
    </>
  );
};
