import { Tabs, Tab, Box } from '@mui/material';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

import { TabbedFormContainerFieldsFragment } from './__generated/ctf-tabbed-form.generated';
import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext';
import styles from './ctf-tabbed-form.module.scss';

type Props = TabbedFormContainerFieldsFragment;

// Helper function to generate flag class name from country code
const getFlagClass = (countryName: string): string => {
  return `fflag-${countryName}`;
};

export const CtfTabbedForm = (props: Props) => {
  //console.log('CtfTabbedForm props:', props);
  const { tabsCollection, formImage } = props;
  const tabs = tabsCollection?.items || [];

  const [activeTab, setActiveTab] = useState(0);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeForm = tabs[activeTab]?.form;

  // Initialize form data with default values
  const getInitialFormData = () => {
    const initialData: Record<string, any> = {};

    // Find the NRI field and set "No" as default
    activeForm?.fieldsCollection?.items.forEach(field => {
      if (field?.label?.toLowerCase().includes('nri') && field?.fieldType === 'Radio') {
        // Set the first option as default (should be "No")
        const firstOption = field?.options?.items?.[0];
        if (firstOption) {
          initialData[field.name || ''] = firstOption.value;
        }
      }
    });

    return initialData;
  };

  const [formData, setFormData] = useState<Record<string, any>>(getInitialFormData());

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!tabs.length || !activeForm) return null;

  const handleInputChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className={styles.tabbedForm}>
      <Box className={`container-sec ${styles.tabbedForm__wrapper}`}>
        {/* Left: Form Content */}
        <Box className={styles.tabbedForm__content}>
          {/* Tabs */}
          <Tabs
            value={activeTab}
            onChange={(_, value) => setActiveTab(value)}
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
                />
              );
            })}
          </Tabs>

          {/* Benefits */}
          {activeForm.description && (
            <div className={styles.tabbedForm__benefits}>
              <CtfRichtext disableContainer={true} {...activeForm.description} />
            </div>
          )}

          {/* Form */}
          <form className={styles.tabbedForm__form} onSubmit={handleSubmit}>
            <div className={styles.tabbedForm__formGrid}>
              {activeForm.fieldsCollection?.items.map(field => {
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
                      const selectedOption = field.options.items.find(
                        (opt: any) => opt.countryCode === formData[fieldName],
                      );
                      return (
                        <div
                          key={field.sys.id}
                          className={styles.tabbedForm__field}
                          ref={dropdownRef}
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
                                  />
                                  <span>{selectedOption.countryName}</span>
                                </span>
                              ) : (
                                <span className={styles.tabbedForm__placeholder}>
                                  Select an option
                                </span>
                              )}
                              <span className={styles.tabbedForm__dropdownArrow} />
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
                                    opt.countryName
                                      .toLowerCase()
                                      .includes(searchQuery.toLowerCase()),
                                  )
                                  .map((opt: any) => {
                                    const optFlagClass = getFlagClass(opt.countryCode);
                                    return (
                                      <button
                                        key={opt.countryCode}
                                        type="button"
                                        className={`${styles.tabbedForm__dropdownOption} ${
                                          formData[fieldName] === opt.countryCode
                                            ? styles.tabbedForm__dropdownOptionSelected
                                            : ''
                                        }`}
                                        onClick={() => {
                                          handleInputChange(fieldName, opt.countryCode);
                                          setOpenDropdown(null);
                                          setSearchQuery('');
                                        }}
                                      >
                                        <span className={`fflag ff-md ${optFlagClass}`} />
                                        <span>{opt.countryName}</span>
                                      </button>
                                    );
                                  })}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    }

                    // Otherwise render as text input
                    return (
                      <div key={field.sys.id} className={styles.tabbedForm__field}>
                        <input
                          type="text"
                          name={field.name || ''}
                          placeholder={field.placeholder || ''}
                          required={!!field.required}
                          className={styles.tabbedForm__input}
                          onChange={e => handleInputChange(field.name || '', e.target.value)}
                        />
                      </div>
                    );

                  case 'Date':
                    return (
                      <div key={field.sys.id} className={styles.tabbedForm__field}>
                        <input
                          type="text"
                          name={field.name || ''}
                          placeholder={field.placeholder || ''}
                          required={!!field.required}
                          className={styles.tabbedForm__input}
                          onChange={e => handleInputChange(field.name || '', e.target.value)}
                        />
                      </div>
                    );

                  case 'Phone Number':
                    return (
                      <div key={field.sys.id} className={styles.tabbedForm__phoneField}>
                        <span className={styles.tabbedForm__phonePrefix}>+91</span>
                        <input
                          type="tel"
                          name={field.name || ''}
                          placeholder={field.placeholder || 'Phone Number'}
                          required={!!field.required}
                          className={styles.tabbedForm__phoneInput}
                          onChange={e => handleInputChange(field.name || '', e.target.value)}
                        />
                      </div>
                    );

                  case 'Email':
                    return (
                      <div key={field.sys.id} className={styles.tabbedForm__field}>
                        <input
                          type="email"
                          name={field.name || ''}
                          placeholder={field.placeholder || ''}
                          required={!!field.required}
                          className={styles.tabbedForm__input}
                          onChange={e => handleInputChange(field.name || '', e.target.value)}
                        />
                      </div>
                    );

                  case 'Radio':
                    return (
                      <div
                        key={field.sys.id}
                        className={`${styles.tabbedForm__radioGroup} ${
                          field.options?.items && field.options.items.length > 4
                            ? styles.tabbedForm__radioGroupMultiRow
                            : ''
                        }`}
                      >
                        {field.label && (
                          <p className={styles.tabbedForm__fieldLabel}>{field.label}</p>
                        )}
                        <div className={styles.tabbedForm__radioOptions}>
                          {field.options?.items.map(opt => (
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
              })}
            </div>

            <div className={styles.tabbedForm__footer}>
              {activeForm.submitButton && (
                <button type="submit" className={styles.tabbedForm__submit}>
                  {activeForm.submitButton.linkHeading}
                </button>
              )}

              <label className={styles.tabbedForm__checkbox}>
                <input type="checkbox" defaultChecked />
                <span>
                  HARDCODED TEXT - I&apos;ve read and accepted all Terms and Conditions. I authorize
                  Axis Max Life Insurance to contact me via SMS/Email/Phone/Whatsapp/Facebook or any
                  other modes overriding my DND. T&C Apply. For more details, terms and conditions
                  please refer to the end of this page in the disclaimers section.
                </span>
              </label>
            </div>
          </form>
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
