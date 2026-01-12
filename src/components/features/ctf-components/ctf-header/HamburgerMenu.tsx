import Link from 'next/link';
import React, { useState } from 'react';

import type { HamburgerMenuFieldsFragment } from './__generated/ctf-header.generated';
import styles from './ctf-header.module.scss';

export interface HamburgerMenuProps extends HamburgerMenuFieldsFragment {
  isMenuOpen: boolean;
}
export const HamburgerMenu = (props: HamburgerMenuProps) => {
  // State: { [item.sys.id]: boolean }
  const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({});

  const toggleSubMenu = (itemId: string) => {
    setOpenSubMenus(prev => ({
      ...prev,
      [itemId]: !prev[itemId], // Toggle only this specific submenu
    }));
  };

  return (
    <div
      className={props.isMenuOpen ? styles.hamburgerMenu : styles.hamburgerMenuHidden}
      // {...inspectorMode({ entryId: props.sys.id, fieldId: 'hamburgerMenu' })}
    >
      <h2>{props?.menuTitle}</h2>
      <ul>
        {props.menuItemsCollection?.items.map((item, index) => (
          <React.Fragment key={index}>
            <li key={index} className={styles.hamburgerMenuItem}>
              {item?.__typename === 'Link' ? (
                <Link href={item?.pageLink?.slug ?? item.linkUrl ?? '/'}>{item.linkHeading}</Link>
              ) : (
                // <div {...inspectorMode({ entryId: item?.sys.id, fieldId: 'subNavigationItem' })}>
                <div>
                  <button
                    onClick={() => toggleSubMenu(item?.sys.id ?? '')} // ← Pass unique item ID
                    className={openSubMenus[item?.sys.id ?? ''] ? styles.hamburgerSubmenuOpen : ''}
                  >
                    {item?.mainLink?.linkHeading}
                  </button>
                  <ul
                    className={
                      openSubMenus[item?.sys.id ?? '']
                        ? styles.hamburgerSubMenuOpen
                        : styles.hamburgerSubMenuClosed
                    }
                  >
                    {item?.secondaryLinksCollection?.items.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className={styles.hamburgerSubMenuItem}
                        // {...inspectorMode({ entryId: subItem?.sys.id, fieldId: 'link' })}
                      >
                        <Link href={subItem?.pageLink?.slug ?? subItem?.linkUrl ?? '/'}>
                          {subItem?.linkHeading}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            <hr />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};
