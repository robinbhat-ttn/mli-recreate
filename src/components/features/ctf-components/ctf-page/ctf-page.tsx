import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import { CtfPageFieldsFragment } from '@src/components/features/ctf-components/ctf-page/__generated/ctf-page.generated';
import { ComponentResolver } from '@src/components/shared/component-resolver';
import { PageContainer } from '@src/components/templates/page-container';
import LayoutContext, { defaultLayout } from '@src/layout-context';
import { CtfHeader } from '@src/components/features/ctf-components/ctf-header/ctf-header';
import { CtfFooter } from '@src/components/features/ctf-components/ctf-footer/ctf-footer';
import { CtfMobileMenu } from '@src/components/features/ctf-components/ctf-mobile-menu/ctf-mobile-menu';
import { Container } from '@mui/material';

const CtfPage = (props: CtfPageFieldsFragment) => {
  const content = props.contentCollection && props.contentCollection.items.filter(it => !!it);

  const layoutConfig = {
    ...defaultLayout,
    containerWidth: 1262,
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
      {props.header && (
        <CtfHeader
          isMenuOpen={isMenuOpen}
          onMenuClick={() => setMenuOpen(true)}
          {...props.header}
        />
      )}

      {/* page content */}
      <Container maxWidth="xl" disableGutters={false} sx={{ px: { xs: 2, md: 0 } }}>
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
