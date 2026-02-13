import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { JourneyFieldsFragment } from './__generated/ctf-journey.generated';
import styles from './ctf-journey.module.scss';

export const CtfJourney = (props: JourneyFieldsFragment) => {
  const router = useRouter();
  const [hasLeadId, setHasLeadId] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  console.log('Journey props:', props);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const leadId = localStorage.getItem('lead_id');
      setHasLeadId(!!leadId);

      // Determine completed steps and current step
      const completed: number[] = [];
      let currentStep = 0;

      // Step 1: Premium Calculated - completed if lead_id exists
      if (leadId) {
        completed.push(0);
        currentStep = 1; // Move to step 2
      }

      // Step 2: Quote Created - completed if quote_step_1/4 data exists in localStorage
      const quoteStepData = localStorage.getItem('quote_step_1/4');
      if (quoteStepData) {
        completed.push(1);
        currentStep = 2; // Move to step 3
      }

      // Step 3: Personal Details - completed if eligibility form data exists in localStorage
      const eligibilityFormData = localStorage.getItem('eligibility_form_data');
      if (eligibilityFormData) {
        completed.push(2);
        currentStep = 3; // Move to step 4
      }

      setCompletedSteps(completed);
      setCurrentStepIndex(currentStep);
    }
  }, []);

  // Hide journey if no lead_id or if there's a stage query param
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
    <div className={styles['step-counter-container']}>
      <div className={styles['step-main-container']}>
        {/* Header Section */}
        <div className={styles['header-section']}>
          <p className={styles.title}>{title}</p>
        </div>

        {/* Main Content Row */}
        <div className={styles['content-row']}>
          {/* Stepper Timeline - Left Side */}
          <div className={styles['stepper-container']}>
            <ul className={styles.timeline}>
              {steps.map((step, index) => {
                const isCompleted = completedSteps.includes(index);
                const isActive = index === currentStepIndex;

                return (
                  <li
                    key={`step-${index}`}
                    className={`${styles['timeline-item']} ${
                      isCompleted ? styles['completed-stage'] : ''
                    } ${isActive ? styles['current-stage'] : ''}`}
                  >
                    <div className={styles['step-circle']}>
                      <span className={styles['step-indicator']}>
                        {isCompleted && <span className={styles['step-tick']}>✓</span>}
                      </span>
                    </div>
                    <label className={styles['step-label']}>{step}</label>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Divider Line */}
          <div className={styles['divider-line']}></div>

          {/* Quote Summary - Right Side */}
          <div className={styles['quote-summary-wrapper']}>
            <div className={styles['quote-summary']}>
              <div className={styles['summary-item']}>
                <span className={styles['summary-label']}>{lifeCoverLabel}</span>
                <span className={styles['summary-value']}>{lifeCover}</span>
              </div>
              <div className={styles['summary-item']}>
                <span className={styles['summary-label']}>{premiumLabel}</span>
                <span className={styles['summary-value']}>{premium}</span>
              </div>

              {/* Continue Button */}
              {button && (
                <button
                  className={styles['continue-button']}
                  onClick={handleContinueClick}
                  type="button"
                >
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
