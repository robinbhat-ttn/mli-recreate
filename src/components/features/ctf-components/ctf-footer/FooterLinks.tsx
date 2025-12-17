import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import Link from 'next/link';

import type { FooterLinksCollectionFragment } from './__generated/ctf-footer.generated';
import styles from './ctf-footer.module.scss';

export const FooterLinks = (props: FooterLinksCollectionFragment) => {
  const inspectorMode = useContentfulInspectorMode();
  return (
    <>
      <div className={styles.footerLinks}>
        {props.items.map((linkItem, index) => (
          <div
            className={styles.footerLink}
            key={index}
            {...inspectorMode({ entryId: linkItem?.sys.id, fieldId: 'subNavigationItem' })}
          >
            <Link
              href={linkItem?.mainLink?.slug ?? linkItem?.mainLink?.linkUrl ?? '/'}
              className={styles.mainLink}
              {...inspectorMode({ entryId: linkItem?.mainLink?.sys.id, fieldId: 'link' })}
            >
              {linkItem?.mainLink?.linkHeading}
            </Link>
            <ul className={styles.secondaryLinks}>
              {linkItem?.secondaryLinksCollection?.items.map((secondaryLink, secondaryIndex) => (
                <li key={secondaryIndex}>
                  <Link
                    href={secondaryLink?.slug ?? secondaryLink?.linkUrl ?? '/'}
                    className={styles.secondaryLink}
                    {...inspectorMode({ entryId: secondaryLink?.sys.id, fieldId: 'link' })}
                  >
                    {secondaryLink?.linkHeading}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* <hr className={styles.footerDivider} /> */}
    </>
  );
};
