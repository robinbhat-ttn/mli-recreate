import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import Link from 'next/link';
import React, { useState } from 'react';

import type { HamburgerMenuFieldsFragment } from './__generated/ctf-header.generated';
import styles from './ctf-header.module.scss';

export interface HamburgerMenuProps extends HamburgerMenuFieldsFragment {
  isMenuOpen: boolean;
}
export const HamburgerMenu = (props: HamburgerMenuProps) => {
  const inspectorMode = useContentfulInspectorMode();
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
      {...inspectorMode({ entryId: props.sys.id, fieldId: 'hamburgerMenu' })}
    >
      <p>{props?.menuTitle}</p>
      <ul>
        <>
          {props.menuItemsCollection?.items.map((item, index) => (
            <React.Fragment key={index}>
              <li key={index} className={styles.hamburgerMenuItem}>
                {item?.__typename === 'Link' ? (
                  <Link
                    href={item.slug ?? item.linkUrl ?? '/'}
                    {...inspectorMode({ entryId: item.sys.id, fieldId: 'link' })}
                  >
                    {item.linkHeading}
                  </Link>
                ) : (
                  <div {...inspectorMode({ entryId: item?.sys.id, fieldId: 'subNavigationItem' })}>
                    <button onClick={toggleSubMenu}>{item?.mainLink?.linkHeading}</button>
                    <ul
                      className={
                        isSubMenuOpen ? styles.hamburgerSubMenuOpen : styles.hamburgerSubMenuClosed
                      }
                    >
                      {item?.secondaryLinksCollection?.items.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className={styles.hamburgerSubMenuItem}
                          {...inspectorMode({ entryId: subItem?.sys.id, fieldId: 'link' })}
                        >
                          <Link href={subItem?.slug ?? subItem?.linkUrl ?? '/'}>
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
        </>
      </ul>
    </div>
  );
};
