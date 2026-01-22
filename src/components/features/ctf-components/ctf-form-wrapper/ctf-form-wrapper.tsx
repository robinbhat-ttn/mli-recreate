import React, { useState } from 'react';
import { FormWrapperFieldsFragment } from './__generated/ctf-form-wrapper.generated';
import { CtfFormRenderer } from '@src/components/features/ctf-components/ctf-form/ctf-form-renderer';
import styles from './ctf-form-wrapper.module.scss';

export const CtfFormWrapper = (props: FormWrapperFieldsFragment) => {
  const forms = props.formsCollection?.items || [];
  const [currentStep, setCurrentStep] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);

  if (!forms.length || !isOpen) return null;

  const currentForm = forms[currentStep];
  const totalSteps = forms.length;
  const isLastStep = currentStep === totalSteps - 1;

  const handleSubmitClick = () => {
    if (!isLastStep) {
      setCurrentStep(currentStep + 1);
      setIsFormValid(false); // Reset for next form
    }
  };

  const handleSaveFormData = (formData: Record<string, any>) => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(`form_data_step_${currentStep}`, JSON.stringify(formData));
      }
    } catch (error) {
      console.error('Error saving form data:', error);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  console.log('CTF Form Wrapper Props:', props);

  return (
    <div className={styles['form-wrapper__backdrop']}>
      <div className={styles['form-wrapper__modal']}>
        {/* Progress Indicator */}
        <div className={styles['form-wrapper__progress']}>
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`${styles['form-wrapper__dot']} ${
                index === currentStep ? styles['form-wrapper__dot--active'] : ''
              } ${index < currentStep ? styles['form-wrapper__dot--completed'] : ''}`}
            />
          ))}
        </div>

        {/* Header with Back Button and Title */}
        <div className={styles['form-wrapper__header']}>
          {currentStep > 0 ? (
            <button className={styles['form-wrapper__back']} onClick={handleBack}>
              ← {currentForm?.title}
            </button>
          ) : (
            <h2 className={styles['form-wrapper__title']}>{currentForm?.title}</h2>
          )}
        </div>

        {/* Form Content */}
        <div className={styles['form-wrapper__content']}>
          <CtfFormRenderer
            fields={currentForm?.fieldsCollection?.items || []}
            submitButton={currentForm?.submitButton}
            inspectorModeId={props.sys.id}
            title={currentForm?.title}
            isInModal={true}
            onFormValidationChange={setIsFormValid}
            isSubmitDisabled={!isFormValid}
            onSubmitClick={!isLastStep ? handleSubmitClick : undefined}
            isLastStep={isLastStep}
            onSaveFormData={handleSaveFormData}
          />
        </div>
      </div>
    </div>
  );
};
