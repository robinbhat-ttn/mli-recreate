import Link from 'next/link';

import styles from './ctf-footer.module.css';
import { FooterButtonCollectionFieldsFragment } from './__generated/ctf-footer.generated';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';

export const ButtonContainer = (props: FooterButtonCollectionFieldsFragment) => {
  const inspectorMode = useContentfulInspectorMode();
  return (
    <>
      <div className={styles.buttonContainer}>
        {props.items.map((button, index) => (
          <Link
            href={button?.slug ?? button?.linkUrl ?? '/'}
            key={index}
            {...inspectorMode({ entryId: button?.sys.id, fieldId: 'link' })}
          >
            {button?.linkHeading}
          </Link>
        ))}
      </div>
      <hr className={styles.footerDivider} />
    </>
  );
};
