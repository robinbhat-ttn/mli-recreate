import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';

import styles from './ctf-header.module.scss';
import type { ButtonCollectionFieldsFragment } from '../ctf-header/__generated/ctf-header.generated';

export const ButtonContainer = (props: ButtonCollectionFieldsFragment) => {
  const inspectorMode = useContentfulInspectorMode();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <div className={styles.buttonsContainer}>
      {props.items.map((button, btnIndex) => {
        switch (button?.__typename) {
          case 'Link':
            return (
              <button
                key={btnIndex}
                className={` hidden-mobile ${styles.headerButton}`}
                {...inspectorMode({ entryId: button.sys.id, fieldId: 'link' })}
              >
                <Link href={button?.pageLink?.slug ?? button.linkUrl ?? '/'}>
                  {button.linkHeading}
                </Link>
              </button>
            );

          case 'ButtonWithLinks':
            return (
              <div key={btnIndex} className={styles.dropdownWrapper} ref={dropdownRef}>
                <button
                  className={`${styles.headerButton} ${isOpen ? styles.headerButtonOpen : ''}`}
                  onClick={() => setIsOpen(prev => !prev)}
                  {...inspectorMode({ entryId: button?.sys.id, fieldId: 'buttonWithLinks' })}
                >
                  {button?.buttonText}
                </button>

                {isOpen && (
                  <div className={styles.dropdownContent}>
                    {button?.buttonDropDownLinksCollection?.items.map((linkItem, i) => (
                      <Link
                        key={i}
                        href={linkItem?.pageLink?.slug ?? linkItem?.linkUrl ?? '/'}
                        className={styles.dropdownLinkTextContainer}
                        {...inspectorMode({ entryId: linkItem?.sys.id, fieldId: 'link' })}
                      >
                        {linkItem?.icon?.url && (
                          <Image
                            src={linkItem.icon.url}
                            alt={linkItem.icon.title ?? linkItem.linkHeading ?? 'Link icon'}
                            width={linkItem.icon.width || 24}
                            height={linkItem.icon.height || 24}
                            className={styles.dropdownLinkIcon}
                          />
                        )}
                        <div className={styles.dropdownLinkTextwprapper}>
                          <span className={styles.dropdownLinkText}>{linkItem?.linkHeading}</span>
                          <span className={styles.dropdownLinkSubText}>
                            {linkItem?.linkSubHeading}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};
