import React, { useState, useEffect } from 'react';
import { CtfRichtext } from '../ctf-richtext/ctf-richtext';
import styles from './default-banner.module.scss';

type Props = any;

export const DefaultBannerComponent = (props: Props) => {
  const [hasLeadId, setHasLeadId] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    if (typeof window !== 'undefined') {
      const leadId = localStorage.getItem('lead_id');
      setHasLeadId(!!leadId);
    }
  }, []);

  // Don't render banner if lead_id exists (journey component will be shown instead)
  if (isHydrated && hasLeadId) {
    return null;
  }

  // Show loading state until hydrated to avoid hydration mismatch
  if (!isHydrated) {
    return null;
  }

  const texts = props?.bannerTextCollection?.items || [];

  // Separate texts by variations
  const bannerText = texts.find((t: any) => t.variations === 'Banner Text');
  const formTexts = texts.filter((t: any) => t.variations === 'Form Text');

  return (
    <div className={styles['defaultBanner']}>
      {bannerText && (
        <div className={styles['defaultBanner__title']}>
          <CtfRichtext disableContainer {...bannerText.body} />
        </div>
      )}

      {formTexts.length > 0 && (
        <div className={styles['defaultBanner__pills']}>
          {formTexts.map((text: any) => (
            <div key={text.sys?.id} className={styles['defaultBanner__pill']}>
              <CtfRichtext disableContainer {...text.body} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
