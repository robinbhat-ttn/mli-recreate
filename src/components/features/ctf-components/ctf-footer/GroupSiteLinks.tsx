import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import Link from 'next/link';

import type { GroupSitesLinksCollectionFieldsFragment } from './__generated/ctf-footer.generated';
import styles from './ctf-footer.module.css';

export const GroupSiteLinks = (props: GroupSitesLinksCollectionFieldsFragment) => {
  const inspectorMode = useContentfulInspectorMode();
  return (
    <div className={styles.groupSitesLinks}>
      <span>Group Sites</span>
      {props.items.map((groupLink, index) => (
        <Link
          key={index}
          href={groupLink?.slug ?? groupLink?.linkUrl ?? '/'}
          className={styles.groupSitesLink}
          {...inspectorMode({ entryId: groupLink?.sys.id, fieldId: 'link' })}
        >
          {groupLink?.linkHeading}
        </Link>
      ))}
    </div>
  );
};
