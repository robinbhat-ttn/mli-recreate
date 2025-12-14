import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import Link from 'next/link';

import styles from './ctf-header.module.scss';
import type { NavigationFieldsFragment } from '../ctf-navigation/__generated/ctf-navigation.generated';
import { Box } from '@mui/material';

export const NavigationContainer = (props: NavigationFieldsFragment) => {
  const inspectorMode = useContentfulInspectorMode();
  return (
    <Box
      component="nav"
      className={styles.navigationMenu}
      sx={{ display: { xs: 'none', md: 'block' } }}
    >
      <ul>
        {props?.items.map((item, index) => (
          <li
            key={index}
            className={styles.navigationItem}
            {...inspectorMode({ entryId: item?.sys.id, fieldId: 'navigationItems' })}
          >
            <Link href={item?.navigationLink ?? '/'}>{item?.navigationTitle}</Link>
            <ul>
              {item?.subNavigationMenuCollection?.items.map((subItem, subIndex) => (
                <li
                  key={subIndex}
                  {...inspectorMode({ entryId: item.sys.id, fieldId: 'SubNavigationItem' })}
                >
                  <ul>
                    <li key={subIndex} className={styles.subNavigationItemMainLink}>
                      <Link
                        href={subItem?.mainLink?.slug ?? subItem?.mainLink?.linkUrl ?? '/'}
                        {...inspectorMode({ entryId: subItem?.sys.id, fieldId: 'link' })}
                      >
                        {subItem?.mainLink?.linkHeading}
                      </Link>
                    </li>
                    <>
                      {subItem?.secondaryLinksCollection?.items.map((secItem, secIndex) => (
                        <li key={secIndex} className={styles.subNavigationItemSecondaryLink}>
                          <Link
                            href={secItem?.slug ?? secItem?.linkUrl ?? '/'}
                            {...inspectorMode({ entryId: secItem?.sys.id ?? '', fieldId: 'link' })}
                          >
                            {secItem?.linkHeading}
                          </Link>
                        </li>
                      ))}
                    </>
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Box>
  );
};
