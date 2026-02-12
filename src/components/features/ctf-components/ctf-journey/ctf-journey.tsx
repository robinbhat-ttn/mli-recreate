import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { JourneyFieldsFragment } from './__generated/ctf-journey.generated';
import styles from './ctf-journey.module.scss';

export const CtfJourney = (props: JourneyFieldsFragment) => {
  const router = useRouter();
  const [hasLeadId, setHasLeadId] = useState(false);
  const [currentStepIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const leadId = localStorage.getItem('lead_id');
      setHasLeadId(!!leadId);
    }
  }, []);

  // Hide journey if no lead_id or if there's ANY stage query param (quote, rider, etc.)
  // Journey is only visible when lead form is shown (no stage param) AND lead_id exists
  if (!hasLeadId || router.query.stage) {
    return null;
  }

  const steps = props?.steps || [];
  const title = props?.title || '';
  const lifeCoverLabel = props?.lifeCoverLabel || 'Life Cover';
  const premiumLabel = props?.premiumLabel || 'Premium';
  const button = props?.button;

  // Static values as fallback
  const lifeCover = '₹50 L';
  const premium = '₹559 Monthly';

  const handleContinueClick = () => {
    if (button?.pageLink?.slug) {
      router.push(`/${button.pageLink.slug}`);
    }
  };

  return (
    <div className={styles.journey}>
      <div className={styles.journey__container}>
        {/* Progress Section */}
        <div className={styles.journey__progressSection}>
          {/* Header Inside Progress Box */}
          <div className={styles.journey__header}>
            <h2 className={styles.journey__title}>{title}</h2>
          </div>

          {/* Content Row: Steps on left, Details on right */}
          <div className={styles.journey__contentRow}>
            {/* Steps Container - Left Side */}
            <div className={styles.journey__stepsContainer}>
              {/* Step Circles */}
              <div className={styles.journey__progressBar}>
                {steps.map((step, index) => {
                  const isCompleted = index < currentStepIndex;
                  const isActive = index === currentStepIndex;

                  return (
                    <React.Fragment key={`step-${index}`}>
                      {/* Step Circle */}
                      <div
                        className={`${styles.journey__step} ${
                          isActive ? styles['journey__step--active'] : ''
                        } ${isCompleted ? styles['journey__step--completed'] : ''}`}
                        title={step || ''}
                      >
                        {isCompleted && <span className={styles.journey__stepTick}>✓</span>}
                      </div>

                      {/* Connector Line */}
                      {index < steps.length - 1 && (
                        <div
                          className={`${styles.journey__connector} ${
                            index < currentStepIndex ? styles['journey__connector--completed'] : ''
                          }`}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Step Labels */}
              <div className={styles.journey__stepLabels}>
                {steps.map((step, index) => (
                  <div
                    key={`label-${index}`}
                    className={`${styles.journey__stepLabel} ${
                      index <= currentStepIndex ? styles['journey__stepLabel--active'] : ''
                    }`}
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {/* Policy Details Section */}
            <div className={styles.journey__policyDetails}>
              <div className={styles.journey__detailItem}>
                <span className={styles.journey__detailLabel}>{lifeCoverLabel}</span>
                <span className={styles.journey__detailValue}>{lifeCover}</span>
              </div>
              <div className={styles.journey__detailItem}>
                <span className={styles.journey__detailLabel}>{premiumLabel}</span>
                <span className={styles.journey__detailValue}>{premium}</span>
              </div>

              {/* Continue Button */}
              {button && (
                <button className={styles.journey__continueButton} onClick={handleContinueClick}>
                  {button.linkHeading || 'Continue'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
