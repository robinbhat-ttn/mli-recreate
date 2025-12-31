import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import Link from 'next/link';

import type { FooterButtonCollectionFieldsFragment } from './__generated/ctf-footer.generated';
import styles from './ctf-footer.module.scss';

export const ButtonContainer = (props: FooterButtonCollectionFieldsFragment) => {
  const inspectorMode = useContentfulInspectorMode();
  return (
    <>
      <div className={styles.buttonContainer}>
        {props.items.map((button, index) => (
          <Link
            href={button?.pageLink?.slug ?? button?.linkUrl ?? '/'}
            key={index}
            {...inspectorMode({ entryId: button?.sys.id, fieldId: 'link' })}
          >
            {button?.linkHeading}
          </Link>
        ))}
      </div>
      {/* <hr className={styles.footerDivider} /> */}
    </>
  );
};
