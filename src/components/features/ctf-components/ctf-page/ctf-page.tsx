import React, { useEffect } from 'react';

import { Container } from '@mui/material';

import { ComponentResolver } from '@src/components/shared/component-resolver';
import { PageContainer } from '@src/components/templates/page-container';
import LayoutContext, { defaultLayout } from '@src/layout-context';

import { CtfPageFieldsFragment } from './__generated/ctf-page.generated';

const CtfPage = (props: CtfPageFieldsFragment) => {
  const content = props.contentCollection && props.contentCollection.items.filter(it => !!it);

  // Dynamic layout config based on pageLayout
  const getLayoutConfig = (pageLayout?: string | null) => {
    switch (pageLayout) {
      case 'HomePageLayout':
        return { containerWidth: 1262 };
      case 'DefaultLayout':
        return { containerWidth: 770 };
      default:
        return { containerWidth: 770 };
    }
  };

  const config = getLayoutConfig(props.pageLayout);

  const layoutConfig = {
    ...defaultLayout,
    layoutType: props.pageLayout || 'DefaultLayout',
    containerWidth: config.containerWidth,
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleRouteChangeComplete = () => {
      if (document.activeElement === null) {
        return;
      }

      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    };

    window.addEventListener('routeChangeComplete', handleRouteChangeComplete);
    return () => {
      window.removeEventListener('routeChangeComplete', handleRouteChangeComplete);
    };
  }, []);

  return (
    <PageContainer>
      {/* header */}
      {/* {props.header && <CtfHeader {...props.header} />} */}
      {props?.template?.header && (
        <ComponentResolver componentProps={props?.template?.header as any} forceGql />
      )}

      {/* page content */}
      <Container
        maxWidth={false}
        disableGutters={true}
        //sx={{ display: 'flex', flexDirection: 'column' }}
      >
        {content &&
          content.map(entry => (
            <LayoutContext.Provider value={layoutConfig} key={entry!.sys.id}>
              <ComponentResolver componentProps={entry!} />
            </LayoutContext.Provider>
          ))}
      </Container>

      {/* footer */}
      {/* {props.footer && <CtfFooter {...props.footer} />} */}
      {props?.template?.footer && (
        <ComponentResolver componentProps={props?.template?.footer as any} forceGql />
      )}

      {/* mobile menu
      {props?.header?.navigationItemsCollection && (
        <CtfMobileMenu
          isOpen={isMenuOpen}
          onOpenChange={(newOpen: boolean) => {
            setMenuOpen(newOpen);
          }}
          {...props.header.navigationItemsCollection}
        />
      )} */}
    </PageContainer>
  );
};

export default CtfPage;
