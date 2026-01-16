import { Container } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import type {
  CtfPageFieldsFragment,
  ReducedFooterFieldsFragment,
  ReducedHeaderFieldsFragment,
} from '@src/components/features/ctf-components/ctf-page/__generated/ctf-page.generated';
import { ComponentResolver } from '@src/components/shared/component-resolver';
import { PageContainer } from '@src/components/templates/page-container';
import LayoutContext, { defaultLayout } from '@src/layout-context';

export type CtfPageFieldsFragmentWithHeadersAndFooters = CtfPageFieldsFragment & {
  headerCollection?: Array<ReducedHeaderFieldsFragment | null>;
  footerCollection?: Array<ReducedFooterFieldsFragment | null>;
};

const CtfPage = (props: CtfPageFieldsFragmentWithHeadersAndFooters) => {
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
      {/* {props.header && <CtfHeader {...props.header} />} */}
      {props?.headerCollection && props?.headerCollection?.length > 0 && (
        <ComponentResolver componentProps={props.headerCollection[0] as any} forceGql />
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
      {props?.footerCollection && props?.footerCollection?.length > 0 && (
        <ComponentResolver componentProps={props.footerCollection[0] as any} forceGql />
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
