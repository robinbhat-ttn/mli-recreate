import { useEffect, useState, useRef } from 'react';
import styles from './ctf-header.module.css';
import Link from 'next/link';
import { ButtonCollectionFieldsFragment } from '../ctf-header/__generated/ctf-header.generated';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';
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
      {props.items.map((button, btnIndex) =>
        button?.__typename == 'Button' ? (
          <button
            key={btnIndex}
            className={styles.headerButton}
            {...inspectorMode({ entryId: button.sys.id, fieldId: 'button' })}
          >
            <Link href={button.buttonLink ?? '/'}>{button.buttonText}</Link>
          </button>
        ) : (
          <div key={btnIndex} className={styles.dropdownWrapper} ref={dropdownRef}>
            <button
              className={styles.headerButton}
              onClick={() => setIsOpen(prev => !prev)}
              {...inspectorMode({ entryId: button?.sys.id, fieldId: 'buttonWithLinks' })}
            >
              {button?.buttonText}
              <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
            </button>

            {isOpen && (
              <div className={styles.dropdownContent}>
                {button?.buttonDropDownLinksCollection?.items.map((linkItem, i) => (
                  <Link
                    key={i}
                    href={linkItem?.slug ?? linkItem?.linkUrl ?? '/'}
                    className={styles.dropdownLink}
                    {...inspectorMode({ entryId: linkItem?.sys.id, fieldId: 'link' })}
                  >
                    {linkItem?.linkHeading}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ),
      )}
    </div>
  );
};
