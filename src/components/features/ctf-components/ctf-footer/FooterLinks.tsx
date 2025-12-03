import Link from 'next/link';

import styles from './ctf-footer.module.css';

export const FooterLinks = props => {
  return (
    <>
      <div className={styles.footerLinks}>
        {props.footerLinksCollection.map((linkItem, index) => (
          <div className={styles.footerLink} key={index}>
            <Link
              href={linkItem.mainLink?.slug ?? linkItem.mainLink?.linkUrl ?? '/'}
              className={styles.mainLink}
            >
              {linkItem.mainLink.linkHeading}
            </Link>
            <ul className={styles.secondaryLinks}>
              {linkItem.secondaryLinksCollection.items.map((secondaryLink, secondaryIndex) => (
                <li key={secondaryIndex}>
                  <Link
                    href={secondaryLink.slug ?? secondaryLink.linkUrl ?? '/'}
                    className={styles.secondaryLink}
                  >
                    {secondaryLink.linkHeading}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <hr className={styles.footerDivider} />
    </>
  );
};
