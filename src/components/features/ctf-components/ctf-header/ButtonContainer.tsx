import { useEffect, useState, useRef } from 'react';
import styles from './ctf-header.module.css';
import Link from 'next/link';
export const ButtonContainer = props => {
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
      {props.buttons.map((button, btnIndex) =>
        button.__typename == 'Button' ? (
          <button key={btnIndex} className={styles.headerButton}>
            <Link href={button.buttonUrl ?? '/'}>{button.buttonText}</Link>
          </button>
        ) : (
          <div key={btnIndex} className={styles.dropdownWrapper} ref={dropdownRef}>
            <button className={styles.headerButton} onClick={() => setIsOpen(prev => !prev)}>
              {button.buttonText}
              <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
            </button>

            {isOpen && (
              <div className={styles.dropdownContent}>
                {button.buttonDropDownLinksCollection.items.map((linkItem, i) => (
                  <Link
                    key={i}
                    href={linkItem.slug ?? linkItem.linkUrl ?? '/'}
                    className={styles.dropdownLink}
                  >
                    {linkItem.linkHeading}
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
