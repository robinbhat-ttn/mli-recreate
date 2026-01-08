import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import React, { useState } from 'react';

import type {
  HeaderFieldsFragment,
  ButtonCollectionFieldsFragment,
} from './__generated/ctf-header.generated';
import { ButtonContainer } from './ButtonContainer';
import styles from './ctf-header.module.scss';
import { HamburgerIcon } from './HamburgerIcon';
import { HamburgerMenu, HamburgerMenuProps } from './HamburgerMenu';
import { ImageContainer } from './ImageContainer';
import { NavigationContainer } from './NavigationContainer';
import { useLayoutContext } from '@src/layout-context';
import type { AssetFieldsFragment } from '../ctf-asset/__generated/ctf-asset.generated';
import type { NavigationFieldsFragment } from '../ctf-navigation/__generated/ctf-navigation.generated';

export const CtfHeader = (props: HeaderFieldsFragment) => {
  const inspectorMode = useContentfulInspectorMode();
  const { layoutType } = useLayoutContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHomePageHeader = layoutType === 'HomePageLayout';
  const toggleMenu = () => {
    setIsMenuOpen(isMenuOpen => !isMenuOpen);
  };
  return (
    <div
      className={`${styles.headerContainer} ${!isHomePageHeader ? styles['headerContainer--default'] : ''}`}
    >
      <div
        className={`${styles.headerInner}`}
        {...inspectorMode({ entryId: props.sys.id, fieldId: 'header' })}
      >
        <ImageContainer {...(props.logo as AssetFieldsFragment)} />
        {isHomePageHeader && (
          <>
            <NavigationContainer
              {...(props.navigationItemsCollection as NavigationFieldsFragment)}
            />
            <ButtonContainer {...(props.buttonCollection as ButtonCollectionFieldsFragment)} />
            {props.hamburgerMenu && (
              <HamburgerIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            )}
          </>
        )}
      </div>
      {isHomePageHeader && props.hamburgerMenu && (
        <HamburgerMenu {...({ ...props.hamburgerMenu, isMenuOpen } as HamburgerMenuProps)} />
      )}
    </div>
  );
};
