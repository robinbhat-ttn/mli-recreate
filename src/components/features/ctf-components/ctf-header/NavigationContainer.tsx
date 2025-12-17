import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { Box } from '@mui/material';
import Link from 'next/link';

import styles from './ctf-header.module.scss';
import type { NavigationFieldsFragment } from '../ctf-navigation/__generated/ctf-navigation.generated';

export const NavigationContainer = (props: NavigationFieldsFragment) => {
  const inspectorMode = useContentfulInspectorMode();
  return (
    <Box
      component="nav"
      className={styles.navigationMenu}
      sx={{ display: { xs: 'none', md: 'block' } }}
    >
      <div className={styles.navigationMenu__inner}>
        {props?.items.map((item, index) => (
          <div key={index} className={styles.navigationItemWrapper}>
            <div
              className={styles.navigationItem}
              {...inspectorMode({ entryId: item?.sys.id, fieldId: 'navigationItems' })}
            >
              <Link href={item?.navigationLink ?? '/'}>{item?.navigationTitle}</Link>
              <svg
                className={styles.navigationArrow}
                height="12"
                width="12"
                viewBox="0 0 10 18"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.98626 9.00001L0.365397 2.39164C-0.121799 1.90444 -0.121799 1.10494 0.365397 0.617746C0.852592 0.130551 1.65209 0.130551 2.13929 0.617746L9.6346 8.11306C10.1218 8.60026 10.1218 9.38727 9.6346 9.87446L2.13929 17.3823C1.65209 17.8695 0.865084 17.8695 0.377889 17.3823C-0.109307 16.8951 -0.109307 16.1081 0.377889 15.6209L6.98626 9.00001Z"
                  fill="#ffffff"
                />
              </svg>
            </div>
            <div className={styles.subNavigationMenu}>
              {item?.subNavigationMenuCollection?.items.map((subItem, subIndex) => (
                <div
                  className={styles.subNavigationItem}
                  key={subIndex}
                  {...inspectorMode({ entryId: item.sys.id, fieldId: 'SubNavigationItem' })}
                >
                  <div key={subIndex} className={styles.subNavigationItemMainLink}>
                    <Link
                      href={subItem?.mainLink?.slug ?? subItem?.mainLink?.linkUrl ?? '/'}
                      {...inspectorMode({ entryId: subItem?.sys.id, fieldId: 'link' })}
                    >
                      {subItem?.mainLink?.linkHeading}
                    </Link>
                  </div>
                  <>
                    {subItem?.secondaryLinksCollection?.items.map((secItem, secIndex) => (
                      <div key={secIndex} className={styles.subNavigationItemSecondaryLink}>
                        <Link
                          href={secItem?.slug ?? secItem?.linkUrl ?? '/'}
                          {...inspectorMode({ entryId: secItem?.sys.id ?? '', fieldId: 'link' })}
                        >
                          {secItem?.linkHeading}
                        </Link>
                      </div>
                    ))}
                  </>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};
