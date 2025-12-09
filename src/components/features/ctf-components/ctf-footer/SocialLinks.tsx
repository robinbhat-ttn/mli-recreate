import Image from 'next/image';
import Link from 'next/link';

import styles from './ctf-footer.module.css';

import { SocialLinksCollectionFieldsFragment } from './__generated/ctf-footer.generated';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';

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
