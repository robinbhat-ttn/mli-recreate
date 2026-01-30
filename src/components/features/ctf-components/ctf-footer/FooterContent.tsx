import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useState } from 'react';

import type {
  DisclaimerSectionFieldsFragment,
  FooterInformationFieldsFragment,
} from './__generated/ctf-footer.generated';
import styles from './ctf-footer.module.scss';

interface FooterContentProps {
  footerInformation: FooterInformationFieldsFragment;
  disclaimerSection: DisclaimerSectionFieldsFragment;
}
export const FooterContent = (props: FooterContentProps) => {
  const inspectorMode = useContentfulInspectorMode();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.footerInformation}>
      <div className={styles.footerInformationInner}>
        {documentToReactComponents(props.footerInformation.json)}
        <div
          className={styles.disclaimerSection}
          {...inspectorMode({ entryId: props.disclaimerSection?.sys?.id, fieldId: 'disclaimer' })}
        >
          <button className={styles.disclaimerSectionHeading} onClick={() => setIsOpen(!isOpen)}>
            {props.disclaimerSection?.heading}
            <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`} />
          </button>
          {isOpen && (
            <p className={styles.disclaimerSectionContent}>
              {documentToReactComponents(props.disclaimerSection?.content?.json)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
