import Link from 'next/link';

import styles from './ctf-footer.module.css';

export const GroupSiteLinks = props => {
  return (
    <div className={styles.groupSitesLinks}>
      <span>Group Sites</span>
      {props.groupSitesLinksCollection.items.map((groupLink, index) => (
        <Link
          key={index}
          href={groupLink.slug ?? groupLink.linkUrl ?? '/'}
          className={styles.groupSitesLink}
        >
          {groupLink.linkHeading}
        </Link>
      ))}
    </div>
  );
};
