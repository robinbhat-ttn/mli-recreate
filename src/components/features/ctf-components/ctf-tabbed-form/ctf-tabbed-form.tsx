import React, { useState } from 'react';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';

import { TabbedFormContainerFieldsFragment } from './__generated/ctf-tabbed-form.generated';
import { CtfFormRenderer } from '@src/components/features/ctf-components/ctf-form/ctf-form-renderer';
import styles from './ctf-tabbed-form.module.scss';

type Props = TabbedFormContainerFieldsFragment;

export const CtfTabbedForm = (props: Props) => {
  const { tabsCollection, formImage } = props;
  const tabs = tabsCollection?.items || [];

  const [activeTab, setActiveTab] = useState(0);

  const activeForm = tabs[activeTab]?.form;
  if (!tabs.length || !activeForm) return null;

  return (
    <CtfFormRenderer
      fields={activeForm.fieldsCollection?.items || []}
      submitButton={activeForm.submitButton}
      formImage={formImage}
      isTabbedForm={true}
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      inspectorModeId={props.sys.id}
      description={activeForm.description}
    />
  );
};
