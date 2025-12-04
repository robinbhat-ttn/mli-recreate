import styles from './ctf-header.module.css';
import Link from 'next/link';
export const NavigationContainer = props => {
  return (
    <nav className={styles.navigationMenu}>
      <ol>
        {props.navigationItemsCollection?.items.map((item, index) => (
          <li key={index} className={styles.navigationItem}>
            <Link href={item.navigationLink}>{item.navigationTitle}</Link>
            <ul>
              {item.subNavigationMenuCollection?.items.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <li key={subIndex} className={styles.subNavigationItemMainLink}>
                    <Link href={subItem.mainLink?.slug ?? subItem.mainLink?.linkUrl ?? '/'}>
                      {subItem.mainLink?.linkHeading}
                    </Link>
                  </li>
                  <>
                    {subItem.secondaryLinksCollection?.items.map((secItem, secIndex) => (
                      <li key={secIndex} className={styles.subNavigationItemSecondaryLink}>
                        <Link href={secItem.slug ?? secItem.linkUrl ?? '/'}>
                          {secItem.linkHeading}
                        </Link>
                      </li>
                    ))}
                  </>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </nav>
  );
};
