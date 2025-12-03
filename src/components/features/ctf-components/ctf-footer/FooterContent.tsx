import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useState } from 'react';

import styles from './ctf-footer.module.css';

export const FooterContent = props => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.footerInformation}>
      {documentToReactComponents(props.footerInformation.json)}
      <div className={styles.disclaimerSection}>
        <button className={styles.disclaimerSectionHeading} onClick={() => setIsOpen(!isOpen)}>
          {props.disclaimerSection.heading}
          <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
        </button>
        {isOpen && (
          <p className={styles.disclaimerSectionContent}>
            {documentToReactComponents(props.disclaimerSection.content.json)}
          </p>
        )}
      </div>
    </div>
  );
};
