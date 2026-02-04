import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import Link from 'next/link';

import type { FooterLinksCollectionFragment } from './__generated/ctf-footer.generated';
import styles from './ctf-footer.module.scss';

export const FooterLinks = (props: FooterLinksCollectionFragment) => {
  const inspectorMode = useContentfulInspectorMode();
  const footerLinks = props?.items;
  const mid = footerLinks.length / 2;
  const footerLinksLeft = footerLinks.slice(0, mid);
  const footerLinksRight = footerLinks.slice(mid);
  // console.log('Footer Left Links: ', footerLinksLeft);
  // console.log('Footer Links Right: ', footerLinksRight);
  return (
    <>
      <div className={styles.footerLinks}>
        {/* {props.items.map((linkItem, index) => (
          <div
            className={styles.footerLink}
            key={index}
            {...inspectorMode({ entryId: linkItem?.sys.id, fieldId: 'subNavigationItem' })}>
            <Link
              href={linkItem?.mainLink?.pageLink?.slug ?? linkItem?.mainLink?.linkUrl ?? '/'}
              className={styles.mainLink}
              {...inspectorMode({ entryId: linkItem?.mainLink?.sys.id, fieldId: 'link' })}>
              {linkItem?.mainLink?.linkHeading}
            </Link>
            <ul className={styles.secondaryLinks}>
              {linkItem?.secondaryLinksCollection?.items.map((secondaryLink, secondaryIndex) => (
                <li key={secondaryIndex}>
                  <Link
                    href={secondaryLink?.pageLink?.slug ?? secondaryLink?.linkUrl ?? '/'}
                    className={styles.secondaryLink}
                    {...inspectorMode({ entryId: secondaryLink?.sys.id, fieldId: 'link' })}>
                    {secondaryLink?.linkHeading}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))} */}
        {/* {footerLinksLeft.map((linkItem, index) => {
          return (
            <div
              className={styles.footerLinkLeftSection}
              key={index}
              {...inspectorMode({ entryId: linkItem?.sys.id, fieldId: 'subNavigationItem' })}>
              <Link
                href={linkItem?.mainLink?.pageLink?.slug ?? linkItem?.mainLink?.linkUrl ?? '/'}
                className={styles.mainLink}
                {...inspectorMode({ entryId: linkItem?.mainLink?.sys.id, fieldId: 'link' })}>
                {linkItem?.mainLink?.linkHeading}
              </Link>
              <ul className={styles.secondaryLinks}>
                {linkItem?.secondaryLinksCollection?.items.map((secondaryLink, secondaryIndex) => (
                  <li key={secondaryIndex}>
                    <Link
                      href={secondaryLink?.pageLink?.slug ?? secondaryLink?.linkUrl ?? '/'}
                      className={styles.secondaryLink}
                      {...inspectorMode({ entryId: secondaryLink?.sys.id, fieldId: 'link' })}>
                      {secondaryLink?.linkHeading}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })} */}
        {footerLinksLeft && (
          <div className={styles.footerLinkLeftSection}>
            {footerLinksLeft.map((linkItem, index) => {
              return (
                <div
                  className={styles.footerLink}
                  key={index}
                  {...inspectorMode({ entryId: linkItem?.sys.id, fieldId: 'subNavigationItem' })}
                >
                  <Link
                    href={linkItem?.mainLink?.pageLink?.slug ?? linkItem?.mainLink?.linkUrl ?? '/'}
                    className={styles.mainLink}
                    {...inspectorMode({ entryId: linkItem?.mainLink?.sys.id, fieldId: 'link' })}
                  >
                    {linkItem?.mainLink?.linkHeading}
                  </Link>
                  <ul className={styles.secondaryLinks}>
                    {linkItem?.secondaryLinksCollection?.items.map(
                      (secondaryLink, secondaryIndex) => (
                        <li key={secondaryIndex}>
                          <Link
                            href={secondaryLink?.pageLink?.slug ?? secondaryLink?.linkUrl ?? '/'}
                            className={styles.secondaryLink}
                            {...inspectorMode({ entryId: secondaryLink?.sys.id, fieldId: 'link' })}
                          >
                            {secondaryLink?.linkHeading}
                          </Link>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              );
            })}
          </div>
        )}
        {footerLinksRight && (
          <div className={styles.footerLinkRightSection}>
            {footerLinksRight.map((linkItem, index) => {
              return (
                <div
                  className={styles.footerLink}
                  key={index}
                  {...inspectorMode({ entryId: linkItem?.sys.id, fieldId: 'subNavigationItem' })}
                >
                  <Link
                    href={linkItem?.mainLink?.pageLink?.slug ?? linkItem?.mainLink?.linkUrl ?? '/'}
                    className={styles.mainLink}
                    {...inspectorMode({ entryId: linkItem?.mainLink?.sys.id, fieldId: 'link' })}
                  >
                    {linkItem?.mainLink?.linkHeading}
                  </Link>
                  <ul className={styles.secondaryLinks}>
                    {linkItem?.secondaryLinksCollection?.items.map(
                      (secondaryLink, secondaryIndex) => (
                        <li key={secondaryIndex}>
                          <Link
                            href={secondaryLink?.pageLink?.slug ?? secondaryLink?.linkUrl ?? '/'}
                            className={styles.secondaryLink}
                            {...inspectorMode({ entryId: secondaryLink?.sys.id, fieldId: 'link' })}
                          >
                            {secondaryLink?.linkHeading}
                          </Link>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              );
            })}
          </div>
        )}
        {/* {footerLinksRight.map((linkItem, index) => {
          return (
            <div
              className={styles.footerLinkRightSection}
              key={index}
              {...inspectorMode({ entryId: linkItem?.sys.id, fieldId: 'subNavigationItem' })}>
              <Link
                href={linkItem?.mainLink?.pageLink?.slug ?? linkItem?.mainLink?.linkUrl ?? '/'}
                className={styles.mainLink}
                {...inspectorMode({ entryId: linkItem?.mainLink?.sys.id, fieldId: 'link' })}>
                {linkItem?.mainLink?.linkHeading}
              </Link>
              <ul className={styles.secondaryLinks}>
                {linkItem?.secondaryLinksCollection?.items.map((secondaryLink, secondaryIndex) => (
                  <li key={secondaryIndex}>
                    <Link
                      href={secondaryLink?.pageLink?.slug ?? secondaryLink?.linkUrl ?? '/'}
                      className={styles.secondaryLink}
                      {...inspectorMode({ entryId: secondaryLink?.sys.id, fieldId: 'link' })}>
                      {secondaryLink?.linkHeading}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })} */}
      </div>
      {/* <hr className={styles.footerDivider} /> */}
    </>
  );
};
