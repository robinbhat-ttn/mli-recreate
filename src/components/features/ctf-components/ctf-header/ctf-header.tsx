import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import React, { useEffect, useState } from 'react';

import type {
  HeaderFieldsFragment,
  ButtonCollectionFieldsFragment,
} from './__generated/ctf-header.generated';
import { ButtonContainer } from './ButtonContainer';
import styles from './ctf-header.module.css';
import { HamburgerIcon } from './HamburgerIcon';
import { HamburgerMenu, HamburgerMenuProps } from './HamburgerMenu';
import { ImageContainer } from './ImageContainer';
import { NavigationContainer } from './NavigationContainer';
import type { AssetFieldsFragment } from '../ctf-asset/__generated/ctf-asset.generated';
import type { NavigationFieldsFragment } from '../ctf-navigation/__generated/ctf-navigation.generated';

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
