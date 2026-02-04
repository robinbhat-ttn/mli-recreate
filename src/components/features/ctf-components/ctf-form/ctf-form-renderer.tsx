import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Tabs, Tab, Box } from '@mui/material';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';

import chevronIcon from '@src/icons/chevron_down_navigate_blue.webp';
import { useLayoutContext } from '@src/layout-context';
import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext';
import styles from '../ctf-tabbed-form/ctf-tabbed-form.module.scss';

// Validate DOB: valid date format and age 18-60
const validateDOB = (dob: string): string | null => {
  if (!dob) return 'Please enter your Date of Birth';

  const parts = dob.split('/');
  if (parts.length !== 3) return 'Please enter valid Date of Birth (dd/mm/yyyy)';

  const [day, month, year] = parts.map(Number);

  if (!day || !month || !year) return 'Please enter valid Date of Birth (dd/mm/yyyy)';
  if (day < 1 || day > 31 || month < 1 || month > 12)
    return 'Please enter valid Date of Birth (dd/mm/yyyy)';
  if (year < 1900 || year > new Date().getFullYear())
    return 'Please enter valid Date of Birth (dd/mm/yyyy)';

  const date = new Date(year, month - 1, day);
  if (date.getDate() !== day || date.getMonth() !== month - 1 || date.getFullYear() !== year) {
    return 'Please enter valid Date of Birth (dd/mm/yyyy)';
  }

  const age = new Date().getFullYear() - year;
  const birthMonth = month - 1;
  const birthDay = day;
  const today = new Date();

  let calculatedAge = age;
  if (
    today.getMonth() < birthMonth ||
    (today.getMonth() === birthMonth && today.getDate() < birthDay)
  ) {
    calculatedAge = age - 1;
  }

  if (calculatedAge < 18) return 'You must be at least 18 years old';
  if (calculatedAge > 60) return 'Age must be between 18 and 60 years';

  return null;
};

// Format DOB input: 12022000 -> 12/02/2000
const formatDOB = (value: string): string => {
  const digits = value.replace(/\D/g, '');
  if (digits.length === 0) return '';
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4, 8)}`;
};

// Helper function to generate flag class name from country code
const getFlagClass = (countryName: string): string => {
  return `fflag-${countryName}`;
};

// Helper function to determine if floating label should be shown
const shouldFloatLabel = (
  fieldName: string,
  fieldValue: any,
  focusedField: string | null,
): boolean => {
  return focusedField === fieldName || (fieldValue && fieldValue.toString().trim() !== '');
};

interface CtfFormRendererProps {
  fields: any[];
  submitButton?: any;
  formImage?: any;
  isTabbedForm?: boolean;
  tabs?: any[];
  activeTab?: number;
  onTabChange?: (tabIndex: number) => void;
  inspectorModeId?: string;
  description?: any;
  title?: string | any;
  isInModal?: boolean;
  onFormValidationChange?: (isValid: boolean) => void;
  isSubmitDisabled?: boolean;
  onSubmitClick?: () => void;
  isLastStep?: boolean;
  onSaveFormData?: (formData: Record<string, any>) => void;
  currentStep?: number;
  formType?: 'lead' | 'leadNextSteps' | 'quote';
}

export const CtfFormRenderer = (props: CtfFormRendererProps) => {
  const inspectorMode = useContentfulInspectorMode();
  const router = useRouter();
  const { layoutType } = useLayoutContext();
  const {
    fields,
    submitButton,
    formImage,
    isTabbedForm = false,
    tabs = [],
    activeTab: initialActiveTab = 0,
    onTabChange,
    inspectorModeId,
    description,
    title,
    isInModal = false,
    onFormValidationChange,
    isSubmitDisabled = false,
    onSubmitClick,
    isLastStep = false,
    onSaveFormData,
    currentStep = 0,
    formType = 'lead',
  } = props;

  const containerClass =
    layoutType === 'Home Page Layout'
      ? 'container-sec'
      : isInModal
        ? ''
        : styles['form-container--default'];

  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openPhoneCountryDropdown, setOpenPhoneCountryDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [phoneCountrySearchQuery, setPhoneCountrySearchQuery] = useState<string>('');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const phoneCountryDropdownRef = useRef<HTMLDivElement>(null);
  const [isCoverAgeModalOpen, setIsCoverAgeModalOpen] = useState(false);
  const [showPremiumMore, setShowPremiumMore] = useState(false);

  // Generate storage key based on form type
  const getStorageKey = (step = 0): string => {
    if (formType === 'quote') {
      return 'quote_form_data';
    }
    if (formType === 'leadNextSteps') {
      return `lead_next_steps_form_data_step_${step}`;
    }
    return 'lead_form_data';
  };

  // Generate random lead ID
  const generateLeadId = (): string => {
    return 'LEAD_' + Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  // Get default form data (without localStorage)
  const getDefaultFormData = () => {
    const initialData: Record<string, any> = {};

    fields.forEach(field => {
      // Set NRI default to 'no'
      if (field?.label?.toLowerCase().includes('nri') && field?.fieldType === 'Radio') {
        const noOption = field?.options?.items?.find((opt: any) => opt.value === 'no');
        if (noOption) {
          initialData[field.name || ''] = noOption.value;
        }
      }
      // Set Annual Income default to '<5'
      if (field?.label?.toLowerCase().includes('annual income') && field?.fieldType === 'Radio') {
        const lessThanFiveOption = field?.options?.items?.find(
          (opt: any) => opt.value === 'lessThanFiveLacs',
        );
        if (lessThanFiveOption) {
          initialData[field.name || ''] = lessThanFiveOption.value;
        }
      }
    });

    return initialData;
  };

  // Initialize form data with default values only (to avoid hydration issues)
  const [formData, setFormData] = useState<Record<string, any>>(getDefaultFormData());
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage after hydration (for lead forms and next steps popup on step change)
  useEffect(() => {
    setIsHydrated(true);

    if (typeof window !== 'undefined') {
      try {
        const storageKey = getStorageKey(currentStep);
        const savedData = localStorage.getItem(storageKey);
        if (savedData) {
          setFormData(JSON.parse(savedData));
          // Reset errors when loading new data
          setErrors({});
          setIsSubmitted(false);
          return;
        }
      } catch (error) {
        console.error('Error loading form data from localStorage:', error);
      }
    }

    // If no saved data, use defaults
    setFormData(getDefaultFormData());
    setErrors({});
    setIsSubmitted(false);
  }, [currentStep, isInModal]);

  // Notify parent when form validation changes
  useEffect(() => {
    const hasErrors = Object.keys(errors).length > 0;

    // Check if all required fields are filled
    const requiredFields = fields.filter(field => field?.required);
    const allRequiredFieldsFilled = requiredFields.every(field => {
      const fieldValue = formData[field.name || ''];
      return (
        fieldValue !== null && fieldValue !== undefined && fieldValue !== '' && fieldValue !== false
      );
    });

    const isValid = !hasErrors && allRequiredFieldsFilled;
    setIsFormValid(isValid);

    if (isInModal && onFormValidationChange) {
      onFormValidationChange(isValid);
    }
  }, [errors, formData, isInModal, onFormValidationChange, fields]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
      if (
        phoneCountryDropdownRef.current &&
        !phoneCountryDropdownRef.current.contains(event.target as Node)
      ) {
        setOpenPhoneCountryDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // No auto-initialization needed - lead ID and form data will be saved only on submission

  if (!fields.length) return null;

  // Helper function to get annual income options based on NRI status
  const getAnnualIncomeOptions = (field: any): any[] => {
    if (field.name !== 'annualIncome' || !field.options?.items) {
      return field.options?.items || [];
    }

    const nriValue = formData['nri'];
    const isNri = nriValue === 'yes';

    // Find the correct annual income options based on NRI status
    const incomeOptionsSet = field.options.items.find((item: any) => item.isNri === isNri);

    return incomeOptionsSet?.annualIncomeOptions || [];
  };

  const handleInputChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateSingleField = (
    fieldName: string,
    fieldType: string,
    fieldValue: any,
    isRequired: boolean,
  ) => {
    // Only validate on blur if form has been submitted
    if (!isSubmitted) return;

    let error: string | null = null;

    if (fieldName === 'dob' && fieldType === 'Date') {
      error = validateDOB(fieldValue);
    } else if (isRequired && (!fieldValue || fieldValue.toString().trim() === '')) {
      error = `Please enter your field`;
    }

    if (error) {
      setErrors(prev => ({ ...prev, [fieldName]: error as string }));
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    fields.forEach(field => {
      if (!field) return;

      // Check if field should be visible based on conditional rules
      const shouldShowField = () => {
        if (!field.conditionalRule) return true;
        const { dependsOn, value } = field.conditionalRule;
        return formData[dependsOn] === value;
      };

      if (!shouldShowField()) return;

      const fieldName = field.name || '';
      const fieldValue = formData[fieldName];

      // Special validation for DOB field
      if (fieldName === 'dob' && field.fieldType === 'Date') {
        const dobError = validateDOB(fieldValue);
        if (dobError) {
          newErrors[fieldName] = dobError;
        }
        return;
      }

      // Check required fields
      if (field.required) {
        if (!fieldValue || fieldValue.toString().trim() === '') {
          newErrors[fieldName] = `Please enter your ${field.label?.toLowerCase() || 'field'}`;
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (validateForm()) {
      console.log('Form submitted:', formData);

      // Save form data and generate lead ID (only for lead forms) on submission
      if (typeof window !== 'undefined') {
        try {
          // Generate and save lead ID if not exists (lead forms only)
          if (!isInModal && formType === 'lead' && !localStorage.getItem('lead_id')) {
            const newLeadId = generateLeadId();
            localStorage.setItem('lead_id', newLeadId);
            // Initialize current_step to 1 (first step "Premium Calculated" is already completed)
            localStorage.setItem('current_step', '1');
          }
          // Save form data
          localStorage.setItem(getStorageKey(currentStep), JSON.stringify(formData));
        } catch (error) {
          console.error('Error saving form data:', error);
        }
      }

      // For modal flows (lead next steps / quote popup), let parent know on successful submit
      if (isInModal) {
        onSaveFormData?.(formData);
        onSubmitClick?.();
      }

      // If this is a lead form, redirect to open next steps popup
      if (!isInModal && formType === 'lead') {
        router.push(
          { pathname: router.pathname, query: { ...router.query, stage: 'quote' } },
          undefined,
          { shallow: true },
        );
      }
    }
  };

  // ---------- Quote form helpers ----------

  const lifeCoverField = fields.find(field => field?.name === 'lifeCover');
  const coverTillAgeField = fields.find(field => field?.name === 'coverTillAge');
  const premiumTermField = fields.find(field => field?.name === 'premiumPaymentTerm');

  const lifeCoverOptions =
    lifeCoverField?.options?.items?.optionValues || lifeCoverField?.options?.items || [];
  const coverTillAgeOptions = coverTillAgeField?.options?.items || [];
  const premiumTermOptions = premiumTermField?.options?.items || [];

  const selectedLifeCoverIndex = lifeCoverOptions.findIndex(
    (opt: any, index: number) =>
      formData.lifeCover === index || formData.lifeCover === opt.amount || index === 1,
  );

  const visibleCoverTillAgeOptions = coverTillAgeOptions.slice(0, 3);
  const remainingCoverTillAgeOptions = coverTillAgeOptions.slice(3);

  const selectedCoverTillAgeIndex = coverTillAgeOptions.findIndex(
    (opt: any) => formData.coverTillAge === opt.duration,
  );

  const selectedPremiumTermIndex = premiumTermOptions.findIndex(
    (opt: any) => formData.premiumPaymentTerm === opt.duration,
  );

  const handleLifeCoverSelect = (index: number) => {
    const option = lifeCoverOptions[index];
    handleInputChange('lifeCover', option?.amount || index);
  };

  const handleCoverTillAgeSelect = (option: any) => {
    handleInputChange('coverTillAge', option?.duration);
  };

  const handlePremiumTermSelect = (index: number) => {
    const option = premiumTermOptions[index];
    handleInputChange('premiumPaymentTerm', option?.duration);
  };

  const renderQuoteForm = () => {
    return (
      <form className={styles.tabbedForm__form} onSubmit={handleSubmit}>
        <div className={styles.tabbedForm__quoteForm}>
          {/* Life Cover */}
          {lifeCoverField && (
            <div className={styles.tabbedForm__quoteField}>
              <div className={styles.tabbedForm__quoteFieldHeader}>
                <div className={styles.tabbedForm__quoteFieldLabel}>
                  <span>{lifeCoverField.label}</span>
                </div>
              </div>
              <div className={styles.tabbedForm__quoteDropdown}>
                <button
                  type="button"
                  className={styles.tabbedForm__quoteDropdownButton}
                  onClick={() =>
                    setOpenDropdown(openDropdown === 'lifeCover' ? null : 'lifeCover')
                  }
                >
                  {selectedLifeCoverIndex >= 0 && lifeCoverOptions[selectedLifeCoverIndex] ? (
                    <span className={styles.tabbedForm__quoteDropdownValue}>
                      <span>
                        {lifeCoverOptions[selectedLifeCoverIndex].amount}{' '}
                        {lifeCoverOptions[selectedLifeCoverIndex].status && (
                          <span className={styles.tabbedForm__quoteBadge}>
                            {lifeCoverOptions[selectedLifeCoverIndex].status}
                          </span>
                        )}
                      </span>
                    </span>
                  ) : (
                    <span className={styles.tabbedForm__quoteDropdownPlaceholder}>
                      Select life cover
                    </span>
                  )}
                  <span className={styles.tabbedForm__dropdownArrow}>
                    <Image src={chevronIcon} alt="dropdown arrow" width={20} height={20} />
                  </span>
                </button>

                {openDropdown === 'lifeCover' && (
                  <div className={styles.tabbedForm__quoteDropdownMenu}>
                    {lifeCoverOptions.map((opt: any, index: number) => (
                      <button
                        type="button"
                        key={index}
                        className={`${styles.tabbedForm__quoteDropdownItem} ${
                          selectedLifeCoverIndex === index
                            ? styles.tabbedForm__quoteDropdownItemSelected
                            : ''
                        }`}
                        onClick={() => {
                          handleLifeCoverSelect(index);
                          setOpenDropdown(null);
                        }}
                      >
                        <div className={styles.tabbedForm__quoteDropdownItemMain}>
                          <span>{opt.amount}</span>
                          {opt.premium && <span>{opt.premium}</span>}
                        </div>
                        {opt.status && (
                          <span className={styles.tabbedForm__quoteBadge}>{opt.status}</span>
                        )}
                        {opt.description && (
                          <span className={styles.tabbedForm__quoteDropdownItemDescription}>
                            {opt.description}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Cover Till Age */}
          {coverTillAgeField && (
            <div className={styles.tabbedForm__quoteField}>
              <div className={styles.tabbedForm__quoteFieldHeader}>
                <div className={styles.tabbedForm__quoteFieldLabel}>
                  <span>{coverTillAgeField.label}</span>
                </div>
              </div>

              <div className={styles.tabbedForm__quoteCoverRow}>
                {visibleCoverTillAgeOptions.map((opt: any, index: number) => {
                  const absoluteIndex = index;
                  const isSelected = selectedCoverTillAgeIndex === absoluteIndex;
                  return (
                    <button
                      type="button"
                      key={opt.duration}
                      className={`${styles.tabbedForm__quoteCoverCard} ${
                        isSelected ? styles.tabbedForm__quoteCoverCardSelected : ''
                      }`}
                      onClick={() => handleCoverTillAgeSelect(opt)}
                    >
                      <span className={styles.tabbedForm__quoteCoverDuration}>
                        {opt.duration}
                      </span>
                      {opt.premium && (
                        <span className={styles.tabbedForm__quoteCoverPremium}>
                          {opt.premium}
                        </span>
                      )}
                      {opt.feature && (
                        <span className={styles.tabbedForm__quoteBadge}>{opt.feature}</span>
                      )}
                    </button>
                  );
                })}

                {remainingCoverTillAgeOptions.length > 0 && (
                  <button
                    type="button"
                    className={styles.tabbedForm__quoteMoreButton}
                    onClick={() => setIsCoverAgeModalOpen(true)}
                  >
                    More
                  </button>
                )}
              </div>

              {coverTillAgeField.bottomText && (
                <p className={styles.tabbedForm__quoteHelpText}>
                  {coverTillAgeField.bottomText}
                </p>
              )}
            </div>
          )}

          {/* Premium Payment Term */}
          {premiumTermField && (
            <div className={styles.tabbedForm__quoteField}>
              <div className={styles.tabbedForm__quoteFieldHeader}>
                <div className={styles.tabbedForm__quoteFieldLabel}>
                  <span>{premiumTermField.label}</span>
                </div>
                {premiumTermField.subLabel && (
                  <span className={styles.tabbedForm__quoteSubLabel}>
                    {premiumTermField.subLabel}
                  </span>
                )}
              </div>

              <div className={styles.tabbedForm__quoteDropdown}>
                <button
                  type="button"
                  className={styles.tabbedForm__quoteDropdownButton}
                  onClick={() =>
                    setOpenDropdown(openDropdown === 'premiumPaymentTerm'
                      ? null
                      : 'premiumPaymentTerm')
                  }
                >
                  {selectedPremiumTermIndex >= 0 &&
                  premiumTermOptions[selectedPremiumTermIndex] ? (
                    <span className={styles.tabbedForm__quoteDropdownValue}>
                      {premiumTermOptions[selectedPremiumTermIndex].label ||
                        premiumTermOptions[selectedPremiumTermIndex].duration}
                    </span>
                  ) : (
                    <span className={styles.tabbedForm__quoteDropdownPlaceholder}>
                      Select premium payment term
                    </span>
                  )}
                  <span className={styles.tabbedForm__dropdownArrow}>
                    <Image src={chevronIcon} alt="dropdown arrow" width={20} height={20} />
                  </span>
                </button>

                {openDropdown === 'premiumPaymentTerm' && (
                  <div className={styles.tabbedForm__quoteDropdownMenu}>
                    {premiumTermOptions.map((opt: any, index: number) => (
                      <button
                        type="button"
                        key={index}
                        className={`${styles.tabbedForm__quoteDropdownItem} ${
                          selectedPremiumTermIndex === index
                            ? styles.tabbedForm__quoteDropdownItemSelected
                            : ''
                        }`}
                        onClick={() => {
                          handlePremiumTermSelect(index);
                        }}
                      >
                        <div className={styles.tabbedForm__quoteDropdownItemMain}>
                          <span>{opt.label || opt.duration}</span>
                          {opt.premium && <span>{opt.premium}</span>}
                        </div>
                        {opt.saving && (
                          <span className={styles.tabbedForm__quoteSavingBadge}>
                            {opt.saving}
                          </span>
                        )}
                      </button>
                    ))}
                    {premiumTermOptions.length > 0 && !showPremiumMore && (
                      <button
                        type="button"
                        className={styles.tabbedForm__quoteShowMore}
                        onClick={() => setShowPremiumMore(true)}
                      >
                        Show more
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className={styles.tabbedForm__footer}>
          {submitButton && (
            <button
              type="submit"
              className={styles.tabbedForm__submit}
              {...inspectorMode({ entryId: submitButton.sys.id, fieldId: 'link' })}
            >
              {submitButton.linkHeading}
            </button>
          )}
        </div>
      </form>
    );
  };

  const handleTabChange = (value: number) => {
    setActiveTab(value);
    onTabChange?.(value);
  };

  // Render individual field
  const renderField = (field: any) => {
    if (!field) return null;

    // Check if field should be visible based on conditional rules
    const shouldShowField = () => {
      if (!field.conditionalRule) return true;
      const { dependsOn, value } = field.conditionalRule;
      return formData[dependsOn] === value;
    };

    if (!shouldShowField()) return null;

    switch (field.fieldType) {
      case 'Text':
        // If Text field has options, render as custom dropdown
        if (field.options?.items && field.options.items.length > 0) {
          const fieldName = field.name || '';
          const isOpen = openDropdown === fieldName;

          // Use first option as default if no value is set
          const defaultValue = formData[fieldName] || field.options.items[0]?.countryCode;
          const selectedOption =
            field.options.items.find((opt: any) => opt.countryCode === defaultValue) ||
            field.options.items[0];

          // Update form data with default if not set
          if (!formData[fieldName] && selectedOption) {
            handleInputChange(fieldName, selectedOption.countryCode);
          }

          return (
            <div
              key={field.sys.id}
              className={styles.tabbedForm__field}
              ref={dropdownRef}
              {...inspectorMode({ entryId: field.sys.id, fieldId: 'formField' })}
            >
              {field.label && (
                <label className={styles.tabbedForm__fieldLabel}>{field.label}</label>
              )}
              <div className={styles.tabbedForm__customDropdown}>
                <button
                  type="button"
                  className={`${styles.tabbedForm__dropdownButton} ${isOpen ? styles.tabbedForm__dropdownButtonOpen : ''}`}
                  onClick={() => setOpenDropdown(isOpen ? null : fieldName)}
                >
                  {selectedOption ? (
                    <span className={styles.tabbedForm__dropdownValue}>
                      <span
                        className={`fflag ff-md ${getFlagClass(selectedOption.countryCode)}`}
                      ></span>
                      <span>{selectedOption.countryName}</span>
                    </span>
                  ) : null}
                  <span
                    className={`${styles.tabbedForm__dropdownArrow} ${isOpen ? styles.tabbedForm__dropdownArrowOpen : ''}`}
                  >
                    <Image src={chevronIcon} alt="dropdown arrow" width={20} height={20} priority />
                  </span>
                </button>

                {isOpen && (
                  <div className={styles.tabbedForm__dropdownOptions}>
                    <input
                      type="text"
                      placeholder="Search"
                      className={styles.tabbedForm__dropdownSearch}
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      onClick={e => e.stopPropagation()}
                    />
                    {field.options.items
                      .filter((opt: any) =>
                        opt.countryName.toLowerCase().includes(searchQuery.toLowerCase()),
                      )
                      .map((opt: any) => {
                        const optFlagClass = getFlagClass(opt.countryCode);
                        return (
                          <div
                            key={opt.countryCode}
                            className={`${styles.tabbedForm__dropdownOption} ${
                              formData[fieldName] === opt.countryCode
                                ? styles.tabbedForm__dropdownOptionSelected
                                : ''
                            }`}
                            role="button"
                            tabIndex={0}
                            onClick={() => {
                              handleInputChange(fieldName, opt.countryCode);
                              setOpenDropdown(null);
                              setSearchQuery('');
                            }}
                            onKeyDown={e => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                handleInputChange(fieldName, opt.countryCode);
                                setOpenDropdown(null);
                                setSearchQuery('');
                              }
                            }}
                          >
                            <span className={`fflag ff-md ${optFlagClass}`}></span>
                            <span>{opt.countryName}</span>
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>
            </div>
          );
        }

        // Otherwise render as text input
        const fieldName = field.name || '';
        const shouldFloat = shouldFloatLabel(fieldName, formData[fieldName], focusedField);
        const hasError = errors[fieldName];
        return (
          <div
            key={field.sys.id}
            className={styles.tabbedForm__field}
            {...inspectorMode({ entryId: field.sys.id, fieldId: 'formField' })}
          >
            <div
              className={`${styles.tabbedForm__inputWrapper} ${shouldFloat ? styles.tabbedForm__floatingLabel : ''} ${hasError ? styles.tabbedForm__inputWrapperError : ''}`}
            >
              <input
                type="text"
                name={fieldName}
                placeholder={field.placeholder || ''}
                className={`${styles.tabbedForm__input} ${hasError ? styles.tabbedForm__inputError : ''}`}
                onChange={e => handleInputChange(fieldName, e.target.value)}
                onFocus={() => {
                  setFocusedField(fieldName);
                }}
                onBlur={() => {
                  setFocusedField(null);
                  validateSingleField(
                    fieldName,
                    'Text',
                    formData[fieldName],
                    field.required === true,
                  );
                }}
                value={formData[fieldName] || ''}
              />
              <label className={hasError ? styles.tabbedForm__fieldLabelError : ''}>
                {field.label || ''}
              </label>
            </div>
            {hasError && (
              <span className={styles.tabbedForm__errorMessage}>{errors[fieldName]}</span>
            )}
          </div>
        );

      case 'Date':
        const dateFieldName = field.name || '';
        const isDOB = dateFieldName === 'dob';
        const shouldFloatDate = shouldFloatLabel(
          dateFieldName,
          formData[dateFieldName],
          focusedField,
        );
        const hasErrorDate = errors[dateFieldName];

        const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          let value = e.target.value;
          if (isDOB) {
            value = formatDOB(value);
          }
          handleInputChange(dateFieldName, value);
        };

        return (
          <div
            key={field.sys.id}
            className={styles.tabbedForm__field}
            {...inspectorMode({ entryId: field.sys.id, fieldId: 'formField' })}
          >
            <div
              className={`${styles.tabbedForm__inputWrapper} ${shouldFloatDate ? styles.tabbedForm__floatingLabel : ''} ${hasErrorDate ? styles.tabbedForm__inputWrapperError : ''}`}
            >
              <input
                type="text"
                name={dateFieldName}
                placeholder={field.placeholder || ''}
                className={`${styles.tabbedForm__input} ${hasErrorDate ? styles.tabbedForm__inputError : ''}`}
                onChange={handleDateChange}
                onFocus={() => {
                  setFocusedField(dateFieldName);
                }}
                onBlur={() => {
                  setFocusedField(null);
                  validateSingleField(
                    dateFieldName,
                    'Date',
                    formData[dateFieldName],
                    field.required === true,
                  );
                }}
                value={formData[dateFieldName] || ''}
                maxLength={isDOB ? 10 : undefined}
              />
              <label className={hasErrorDate ? styles.tabbedForm__fieldLabelError : ''}>
                {field.label || ''}
              </label>
            </div>
            {hasErrorDate && (
              <span className={styles.tabbedForm__errorMessage}>{errors[dateFieldName]}</span>
            )}
          </div>
        );

      case 'Phone Number':
        // Find NRI field to check if user is NRI
        let isNri = false;
        let residencyField: any = null;

        fields.forEach((f: any) => {
          if (f?.label?.toLowerCase().includes('nri') && f?.fieldType === 'Radio') {
            isNri = formData[f.name || ''] === 'yes';
          }
          if (f?.fieldType === 'Text' && f?.options?.items && f?.options?.items.length > 0) {
            residencyField = f;
          }
        });

        // Get phone country options from field.options or residency field
        const residenceCountryCode = residencyField
          ? formData[residencyField.name || '']
          : undefined;
        const allPhoneOptions = field?.options?.items || [];

        // Filter options based on NRI status
        let displayedPhoneOptions = allPhoneOptions;
        if (isNri && residenceCountryCode) {
          // When NRI = yes, show residence country + India
          const residenceOption = allPhoneOptions.find(
            (opt: any) => opt.countryCode === residenceCountryCode,
          );
          const indiaOption = allPhoneOptions.find((opt: any) => opt.countryCode === 'IN');
          displayedPhoneOptions = [];
          if (residenceOption) displayedPhoneOptions.push(residenceOption);
          if (indiaOption && indiaOption.countryCode !== residenceCountryCode)
            displayedPhoneOptions.push(indiaOption);
        }

        // Select current country or default to first displayed option
        const currentPhoneOption =
          displayedPhoneOptions.find((c: any) => c.countryCode === formData['phoneCountryCode']) ||
          displayedPhoneOptions[0];

        const phoneFieldName = field.name || '';
        const shouldFloatPhone = shouldFloatLabel(
          phoneFieldName,
          formData[phoneFieldName],
          focusedField,
        );
        const hasErrorPhone = errors[phoneFieldName];

        return (
          <div
            key={field.sys.id}
            className={`${styles.tabbedForm__field} ${hasErrorPhone ? styles.tabbedForm__fieldError : ''}`}
            {...inspectorMode({ entryId: field.sys.id, fieldId: 'formField' })}
          >
            {isNri ? (
              // Show dropdown when NRI is Yes
              <div
                className={`${styles.tabbedForm__phoneFieldFull} ${hasErrorPhone ? styles.tabbedForm__phoneFieldFullError : ''}`}
                ref={phoneCountryDropdownRef}
              >
                <div className={styles.tabbedForm__phonePrefixDropdownFull}>
                  <button
                    type="button"
                    className={`${styles.tabbedForm__phonePrefixButton} ${
                      openPhoneCountryDropdown ? styles.tabbedForm__phonePrefixButtonOpen : ''
                    }`}
                    onClick={() => setOpenPhoneCountryDropdown(!openPhoneCountryDropdown)}
                  >
                    <span className={styles.tabbedForm__phonePrefixValue}>
                      {currentPhoneOption?.dialCode}
                    </span>
                    <span
                      className={`${styles.tabbedForm__phonePrefixArrow} ${
                        openPhoneCountryDropdown ? styles.tabbedForm__phonePrefixArrowOpen : ''
                      }`}
                    >
                      <Image
                        src={chevronIcon}
                        alt="dropdown arrow"
                        width={16}
                        height={16}
                        priority
                      />
                    </span>
                  </button>
                </div>
                {openPhoneCountryDropdown && (
                  <div className={styles.tabbedForm__dropdownOptions}>
                    <input
                      type="text"
                      placeholder="Search"
                      className={styles.tabbedForm__dropdownSearch}
                      value={phoneCountrySearchQuery}
                      onChange={e => setPhoneCountrySearchQuery(e.target.value)}
                      onClick={e => e.stopPropagation()}
                    />
                    {displayedPhoneOptions
                      .filter((country: any) =>
                        country.dialCode
                          .toLowerCase()
                          .includes(phoneCountrySearchQuery.toLowerCase()),
                      )
                      .map((country: any) => (
                        <div
                          key={country.countryCode}
                          className={`${styles.tabbedForm__dropdownOption} ${
                            formData['phoneCountryCode'] === country.countryCode
                              ? styles.tabbedForm__dropdownOptionSelected
                              : ''
                          }`}
                          role="button"
                          tabIndex={0}
                          onClick={() => {
                            handleInputChange('phoneCountryCode', country.countryCode);
                            setOpenPhoneCountryDropdown(false);
                            setPhoneCountrySearchQuery('');
                          }}
                          onKeyDown={e => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              handleInputChange('phoneCountryCode', country.countryCode);
                              setOpenPhoneCountryDropdown(false);
                              setPhoneCountrySearchQuery('');
                            }
                          }}
                        >
                          <span
                            className={`fflag ff-md ${getFlagClass(country.countryCode)}`}
                          ></span>
                          <span>{country.dialCode}</span>
                          <span>{country.countryName}</span>
                        </div>
                      ))}
                  </div>
                )}

                <div
                  className={`${styles.tabbedForm__phoneInputWrapperFull} ${shouldFloatPhone ? styles.tabbedForm__floatingLabel : ''} ${hasErrorPhone ? styles.tabbedForm__phoneInputWrapperFullError : ''}`}
                >
                  <input
                    type="tel"
                    name={field.name || ''}
                    placeholder={'Enter phone number'}
                    className={`${styles.tabbedForm__phoneInputFull} ${hasErrorPhone ? styles.tabbedForm__phoneInputFullError : ''}`}
                    onChange={e => handleInputChange(field.name || '', e.target.value)}
                    onFocus={() => {
                      setFocusedField(field.name || '');
                    }}
                    onBlur={() => {
                      setFocusedField(null);
                      validateSingleField(
                        field.name || '',
                        'Phone Number',
                        formData[field.name || ''],
                        field.required === true,
                      );
                    }}
                    value={formData[field.name || ''] || ''}
                  />
                  <label className={hasErrorPhone ? styles.tabbedForm__fieldLabelError : ''}>
                    {field.label || ''}
                  </label>
                </div>
              </div>
            ) : (
              // Show static +91 when NRI is No
              <div
                className={`${styles.tabbedForm__phoneField} ${hasErrorPhone ? styles.tabbedForm__phoneFieldError : ''}`}
              >
                <span className={styles.tabbedForm__phonePrefix}>+91</span>
                <div
                  className={`${styles.tabbedForm__phoneInputWrapper} ${shouldFloatPhone ? styles.tabbedForm__floatingLabel : ''}`}
                >
                  <input
                    type="tel"
                    name={field.name || ''}
                    placeholder={'Enter phone number'}
                    className={`${styles.tabbedForm__phoneInput} ${hasErrorPhone ? styles.tabbedForm__phoneInputError : ''}`}
                    onChange={e => handleInputChange(field.name || '', e.target.value)}
                    onFocus={() => {
                      setFocusedField(field.name || '');
                    }}
                    onBlur={() => {
                      setFocusedField(null);
                      validateSingleField(
                        field.name || '',
                        'Phone Number',
                        formData[field.name || ''],
                        field.required === true,
                      );
                    }}
                    value={formData[field.name || ''] || ''}
                  />
                  <label className={hasErrorPhone ? styles.tabbedForm__fieldLabelError : ''}>
                    {field.label || ''}
                  </label>
                </div>
              </div>
            )}
            {hasErrorPhone && (
              <span className={styles.tabbedForm__errorMessage}>{errors[phoneFieldName]}</span>
            )}
          </div>
        );

      case 'Email':
        const emailFieldName = field.name || '';
        const shouldFloatEmail = shouldFloatLabel(
          emailFieldName,
          formData[emailFieldName],
          focusedField,
        );
        const hasErrorEmail = errors[emailFieldName];
        return (
          <div
            key={field.sys.id}
            className={styles.tabbedForm__field}
            {...inspectorMode({ entryId: field.sys.id, fieldId: 'formField' })}
          >
            <div
              className={`${styles.tabbedForm__inputWrapper} ${shouldFloatEmail ? styles.tabbedForm__floatingLabel : ''} ${hasErrorEmail ? styles.tabbedForm__inputWrapperError : ''}`}
            >
              <input
                type="email"
                name={emailFieldName}
                placeholder={'Enter email'}
                className={`${styles.tabbedForm__input} ${hasErrorEmail ? styles.tabbedForm__inputError : ''}`}
                onChange={e => handleInputChange(emailFieldName, e.target.value)}
                onFocus={() => {
                  setFocusedField(emailFieldName);
                }}
                onBlur={() => {
                  setFocusedField(null);
                  validateSingleField(
                    emailFieldName,
                    'Email',
                    formData[emailFieldName],
                    field.required === true,
                  );
                }}
                value={formData[emailFieldName] || ''}
              />
              <label className={hasErrorEmail ? styles.tabbedForm__fieldLabelError : ''}>
                {'Email'}
              </label>
            </div>
            {hasErrorEmail && (
              <span className={styles.tabbedForm__errorMessage}>{errors[emailFieldName]}</span>
            )}
          </div>
        );

      case 'Radio':
        const options = getAnnualIncomeOptions(field);
        return (
          <div
            key={field.sys.id}
            className={`${styles.tabbedForm__radioGroup} ${
              options && options.length > 4 ? styles.tabbedForm__radioGroupMultiRow : ''
            }`}
          >
            {field.label && <p className={styles.tabbedForm__fieldLabel}>{field.label}</p>}
            <div className={styles.tabbedForm__radioOptions}>
              {options.map(opt => (
                <label key={opt.value} className={styles.tabbedForm__radioOption}>
                  <input
                    type="radio"
                    name={field.name || ''}
                    value={opt.value}
                    checked={formData[field.name || ''] === opt.value}
                    onChange={e => handleInputChange(field.name || '', e.target.value)}
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      className={`${styles.tabbedForm} ${layoutType !== 'Home Page Layout' ? styles['default--form'] : ''} ${
        formType === 'quote' ? styles['tabbedForm--quote'] : ''
      }`}
    >
      <Box
        className={`${containerClass} ${styles.tabbedForm__wrapper} ${
          isInModal ? styles['tabbedForm__wrapper--modal'] : ''
        } ${formType === 'quote' ? styles['tabbedForm__wrapper--quote'] : ''}`}
        {...(inspectorModeId &&
          inspectorMode({ entryId: inspectorModeId, fieldId: 'tabbedFormContainer' }))}
      >
        {/* Left: Form Content */}
        <Box
          className={`${styles.tabbedForm__content} ${isInModal ? styles['tabbedForm__content--modal'] : ''}`}
        >
          {title && layoutType !== 'HomePageLayout' && !isInModal && (
            <div className={styles.tabbedForm__title}>
              <h3>{title}</h3>
            </div>
          )}

          {/* Tabs - only render if tabbed form */}
          {isTabbedForm && tabs.length > 0 && (
            <Tabs
              value={activeTab}
              onChange={(_, value) => handleTabChange(value)}
              className={styles.tabbedForm__tabs}
              variant="standard"
              scrollButtons={false}
              disableRipple={true}
              TabIndicatorProps={{
                className: styles.tabbedForm__tabIndicator,
              }}
            >
              {tabs.map(tab => {
                if (!tab) return null;
                return (
                  <Tab
                    key={tab.sys.id}
                    className={styles.tabbedForm__tab}
                    disableRipple={true}
                    label={
                      tab.tabLabel?.json ? (
                        <CtfRichtext disableContainer={true} {...tab.tabLabel} />
                      ) : (
                        'Tab'
                      )
                    }
                    {...inspectorMode({ entryId: tab.sys.id, fieldId: 'formTab' })}
                  />
                );
              })}
            </Tabs>
          )}

          {/* Description/Benefits */}
          {description && (
            <div className={styles.tabbedForm__benefits}>
              <CtfRichtext disableContainer={true} {...description} />
            </div>
          )}

          {/* Form */}
          {formType === 'quote' ? (
            renderQuoteForm()
          ) : (
            <form className={styles.tabbedForm__form} onSubmit={handleSubmit}>
              <div className={styles.tabbedForm__formGrid}>
                {fields.map(field => renderField(field))}
              </div>

              <div className={styles.tabbedForm__footer}>
                {submitButton && (
                  <>
                    {/* For modal last step: always show button but disabled when form invalid */}
                    {isInModal && isLastStep ? (
                      <button
                        type="submit"
                        className={styles.tabbedForm__submit}
                        disabled={!isFormValid}
                        {...inspectorMode({ entryId: submitButton.sys.id, fieldId: 'link' })}
                      >
                        {submitButton.linkHeading}
                      </button>
                    ) : isInModal ? (
                      /* For modal non-last steps: show button only when form valid */
                      isFormValid && (
                        <button
                          type="button"
                          className={styles.tabbedForm__submit}
                          onClick={() => {
                            onSaveFormData?.(formData);
                            onSubmitClick?.();
                          }}
                          {...inspectorMode({ entryId: submitButton.sys.id, fieldId: 'link' })}
                        >
                          {submitButton.linkHeading}
                        </button>
                      )
                    ) : (
                      /* For non-modal: always show button */
                      <button
                        type="submit"
                        className={styles.tabbedForm__submit}
                        {...inspectorMode({ entryId: submitButton.sys.id, fieldId: 'link' })}
                      >
                        {submitButton.linkHeading}
                      </button>
                    )}
                  </>
                )}

                {layoutType === 'Home Page Layout' && (
                  <label className={styles.tabbedForm__checkbox}>
                    <input type="checkbox" defaultChecked />
                    <span>
                      HARDCODED TEXT - I&apos;ve read and accepted all Terms and Conditions. I
                      authorize Axis Max Life Insurance to contact me via
                      SMS/Email/Phone/Whatsapp/Facebook or any other modes overriding my DND. T&C
                      Apply. For more details, terms and conditions please refer to the end of this
                      page in the disclaimers section.
                    </span>
                  </label>
                )}
              </div>
            </form>
          )}
        </Box>

        {/* Right: Image */}
        {formImage?.url && (
          <div className={styles.tabbedForm__imageContainer}>
            <Image
              src={formImage.url}
              width={formImage.width || 270}
              height={formImage.height || 464}
              alt={formImage.description || 'Form Image'}
            />
          </div>
        )}
      </Box>
    </section>
  );
};
