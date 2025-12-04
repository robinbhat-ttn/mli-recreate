import styles from './ctf-header.module.css';
import { useState } from 'react';
import Link from 'next/link';
export const HamburgerMenu = props => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setIsSubMenuOpen(isSubMenuOpen => !isSubMenuOpen);
  };
  return (
    <div
      className={
        props.isMenuOpen
          ? styles.hamburgerMenu // visible when clicked
          : styles.hamburgerMenuHidden // hidden initially
      }
    >
      <p>{props.hamburgerMenu.menuTitle}</p>
      <ol>
        <>
          {props.hamburgerMenu.menuItemsCollection?.items.map((item, index) => (
            <>
              <li key={index} className={styles.hamburgerMenuItem}>
                {'linkHeading' in item ? (
                  <Link href={item.slug ?? item.linkUrl ?? '/'}>{item.linkHeading}</Link>
                ) : (
                  <div>
                    <button onClick={toggleSubMenu}>{item.mainLink.linkHeading}</button>
                    {/* <a href={item.mainLink?.linkUrl}>{item.mainLink?.linkHeading}</a> */}
                    <ul
                      className={
                        isSubMenuOpen ? styles.hamburgerSubMenuOpen : styles.hamburgerSubMenuClosed
                      }
                    >
                      {item.secondaryLinksCollection?.items.map((subItem, subIndex) => (
                        <li key={subIndex} className={styles.hamburgerSubMenuItem}>
                          <Link href={subItem.slug ?? subItem.linkUrl ?? '/'}>
                            {subItem.linkHeading}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
              <hr />
            </>
          ))}
        </>
      </ol>
    </div>
  );
};
