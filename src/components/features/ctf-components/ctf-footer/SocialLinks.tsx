import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import Image from 'next/image';
import Link from 'next/link';

import type { SocialLinksCollectionFieldsFragment } from './__generated/ctf-footer.generated';
import styles from './ctf-footer.module.scss';

export const SocialLinks = (props: SocialLinksCollectionFieldsFragment) => {
  const inspectorMode = useContentfulInspectorMode();
  return (
    <>
      <div className={styles.socialLinksContainer}>
        {props.items.map((socialLink, index) => (
          <Link
            href={socialLink?.slug ?? socialLink?.linkUrl ?? '/'}
            key={index}
            {...inspectorMode({ entryId: socialLink?.sys.id, fieldId: 'link' })}
          >
            <Image
              src={socialLink?.icon?.url ?? '/'}
              alt={socialLink?.icon?.title ?? ''}
              height={30}
              width={30}
            />
          </Link>
        ))}
      </div>
      <hr className={styles.footerDivider} />
    </>
  );
};
