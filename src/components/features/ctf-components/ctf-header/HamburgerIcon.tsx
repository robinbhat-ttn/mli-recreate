import styles from './ctf-header.module.css';

interface HamburgerMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}
export const HamburgerIcon = (props: HamburgerMenuProps) => {
  return (
    <button className={styles.hamburgerSection} onClick={props.toggleMenu}>
      {!props.isMenuOpen ? (
        <span className={styles.hamburgerIcon}>
          <div />
          <div />
          <div />
        </span>
      ) : (
        <span className={styles.crossIcon}>&#10005;</span>
      )}
    </button>
  );
};
