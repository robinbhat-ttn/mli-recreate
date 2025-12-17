import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';

import styles from './ctf-tabbed-form.module.scss';
import { TabbedFormContainerFieldsFragment } from './__generated/ctf-tabbed-form.generated';

import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext';

type Props = TabbedFormContainerFieldsFragment;

export const CtfTabbedForm = (props: Props) => {
  const { tabsCollection, formImage } = props;
  const tabs = tabsCollection?.items || [];

  const [activeTab, setActiveTab] = useState(0);
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
      <Box className={`container-sec ${styles.tabbedForm__container}`}>
        <Box className={styles.tabbedForm__wrapper}>
          {/* Left: Form Content */}
          <Box className={styles.tabbedForm__content}>
            {/* Tabs */}
            <Tabs
              value={activeTab}
              onChange={(_, value) => setActiveTab(value)}
              className={styles.tabbedForm__tabs}
              variant="standard"
              scrollButtons={false}
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
                    label={
                      tab.tabLabel?.json ? (
                        <CtfRichtext
                          disableContainer={true}
                          json={tab.tabLabel.json}
                          links={tab.tabLabel.links}
                        />
                      ) : (
                        'Tab'
                      )
                    }
                  />
                );
              })}
            </Tabs>

            {/* Title */}
            {activeForm.title && (
              <div className={styles.tabbedForm__title}>
                <CtfRichtext
                  disableContainer={true}
                  json={activeForm.title.json}
                  links={activeForm.title.links}
                />
              </div>
            )}

            {/* Benefits */}
            {activeForm.description && (
              <div className={styles.tabbedForm__benefits}>
                <CtfRichtext
                  disableContainer={true}
                  json={activeForm.description.json}
                  links={activeForm.description.links}
                />
              </div>
            )}

            {/* Form */}
            <form className={styles.tabbedForm__form} onSubmit={handleSubmit}>
              <div className={styles.tabbedForm__formGrid}>
                {activeForm.fieldsCollection?.items.map(field => {
                  if (!field) return null;

                  switch (field.fieldType) {
                    case 'Text':
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
                                  onChange={e =>
                                    handleInputChange(field.name || '', e.target.value)
                                  }
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
                <button type="submit" className={styles.tabbedForm__submit}>
                  Hard coded Submit
                </button>
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
              </div>
            </form>
          </Box>

          {/* Right: Image */}
          {formImage?.url && (
            <div className={styles.tabbedForm__imageContainer}>
              <img
                src={formImage.url}
                width={formImage.width || undefined}
                height={formImage.height || undefined}
                alt={formImage.description || 'Form Image'}
              />
            </div>
          )}
        </Box>
      </Box>
    </section>
  );
};
