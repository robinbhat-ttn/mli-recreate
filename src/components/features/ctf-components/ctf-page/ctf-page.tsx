import { Container } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import { CtfFooter } from '@src/components/features/ctf-components/ctf-footer/ctf-footer';
import { CtfHeader } from '@src/components/features/ctf-components/ctf-header/ctf-header';
import { CtfMobileMenu } from '@src/components/features/ctf-components/ctf-mobile-menu/ctf-mobile-menu';
import type { CtfPageFieldsFragment } from '@src/components/features/ctf-components/ctf-page/__generated/ctf-page.generated';
import { ComponentResolver } from '@src/components/shared/component-resolver';
import { PageContainer } from '@src/components/templates/page-container';
import LayoutContext, { defaultLayout } from '@src/layout-context';

const CtfPage = (props: CtfPageFieldsFragment) => {
  console.log('CtfPage props:', props);
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
  const [isMenuOpen, setMenuOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setMenuOpen(false);
    });

    router.events.on('routeChangeComplete', () => {
      if (document.activeElement === null) {
        return;
      }

      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    });
  }, [router.events]);

  return (
    <PageContainer>
      {/* header */}
      {props.header && <CtfHeader {...props.header} />}

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
      {props.footer && <CtfFooter {...props.footer} />}

      {/* mobile menu */}
      {props?.header?.navigationItemsCollection && (
        <CtfMobileMenu
          isOpen={isMenuOpen}
          onOpenChange={(newOpen: boolean) => {
            setMenuOpen(newOpen);
          }}
          {...props.header.navigationItemsCollection}
        />
      )}
    </PageContainer>
  );
};

export default CtfPage;
