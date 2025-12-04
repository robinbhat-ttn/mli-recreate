import { ButtonContainer } from './ButtonContainer';
import { ImageContainer } from './ImageContainer';
import { NavigationContainer } from './NavigationContainer';
import styles from './ctf-header.module.css';
import { useEffect, useState } from 'react';
import { HamburgerIcon } from './HamburgerIcon';
import { HamburgerMenu } from './HamburgerMenu';

export const CtfHeader = props => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(isMenuOpen => !isMenuOpen);
  };
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'; // stop scrolling
    } else {
      document.body.style.overflow = 'auto'; // enable scrolling
    }
  }, [isMenuOpen]);
  const imageUrl = props.logo?.url || '';
  const imageAlt = props.logo?.title || 'MLI Logo';
  return (
    <>
      <div className={styles.headerContainer}>
        <ImageContainer imageSrc={imageUrl} imageAlt={imageAlt} />
        <NavigationContainer navigationItemsCollection={props.navigationItemsCollection} />
        <ButtonContainer buttons={props.buttonCollection?.items || []} />
        <HamburgerIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
      <HamburgerMenu isMenuOpen={isMenuOpen} hamburgerMenu={props.hamburgerMenu} />
    </>
  );
};
