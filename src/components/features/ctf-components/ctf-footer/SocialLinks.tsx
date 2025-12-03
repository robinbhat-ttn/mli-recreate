import Image from 'next/image';
import Link from 'next/link';

import styles from './ctf-footer.module.css';

export const SocialLinks = props => {
  console.log('SocialLinks props:', props);
  return (
    <>
      <div
        key={props.socialLinksCollection.items[0].sys.id}
        className={styles.socialLinksContainer}
      >
        {props.socialLinksCollection.items.map((socialLink, index) => (
          <Link href={socialLink?.slug ?? socialLink?.linkUrl ?? '/'} key={index}>
            <Image src={socialLink.icon?.url} alt={socialLink.icon?.title} height={30} width={30} />
          </Link>
        ))}
      </div>
      <hr className={styles.footerDivider} />
    </>
  );
};
