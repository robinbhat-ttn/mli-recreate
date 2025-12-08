import { ButtonContainer } from './ButtonContainer';
import { ImageContainer } from './ImageContainer';
import { NavigationContainer } from './NavigationContainer';
import styles from './ctf-header.module.css';
import { useEffect, useState } from 'react';
import { HamburgerIcon } from './HamburgerIcon';
import { HamburgerMenu } from './HamburgerMenu';
import { HeaderFieldsFragment } from './__generated/ctf-header.generated';
import { AssetFieldsFragment } from '../ctf-asset/__generated/ctf-asset.generated';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { NavigationFieldsFragment } from '../ctf-navigation/__generated/ctf-navigation.generated';
import { ButtonCollectionFieldsFragment } from '../ctf-header/__generated/ctf-header.generated';
import { HamburgerMenuProps } from './HamburgerMenu';

export const CtfHeader = (props: HeaderFieldsFragment) => {
  const inspectorMode = useContentfulInspectorMode();
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
  return (
    <>
      <div
        className={styles.headerContainer}
        {...inspectorMode({ entryId: props.sys.id, fieldId: 'header' })}
      >
        <ImageContainer {...(props.logo as AssetFieldsFragment)} />
        <NavigationContainer {...(props.navigationItemsCollection as NavigationFieldsFragment)} />
        <ButtonContainer {...(props.buttonCollection as ButtonCollectionFieldsFragment)} />
        <HamburgerIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
      <HamburgerMenu {...({ ...props.hamburgerMenu, isMenuOpen } as HamburgerMenuProps)} />
    </>
  );
};
