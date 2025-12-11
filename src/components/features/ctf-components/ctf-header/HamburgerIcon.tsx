import styles from './ctf-header.module.scss';

interface HamburgerMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const HamburgerIcon = ({ isMenuOpen, toggleMenu }: HamburgerMenuProps) => {
  const label = isMenuOpen ? 'Close menu' : 'Open menu';

  return (
    <button
      type="button"
      className={styles.hamburgerSection}
      onClick={toggleMenu}
      aria-expanded={isMenuOpen}
      aria-label={label}
    >
      {isMenuOpen ? (
        <svg
          className={styles.crossIcon}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          role="img"
          aria-hidden="true"
        >
          <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg
          className={styles.hamburgerIcon}
          width="24"
          height="18"
          viewBox="0 0 24 18"
          role="img"
          aria-hidden="true"
        >
          <line x1="2" y1="2" x2="22" y2="2" />
          <line x1="2" y1="9" x2="22" y2="9" />
          <line x1="2" y1="16" x2="22" y2="16" />
        </svg>
      )}
    </button>
  );
};
