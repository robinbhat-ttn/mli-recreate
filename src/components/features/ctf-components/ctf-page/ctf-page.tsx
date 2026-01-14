import { Container } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import { CtfFooter } from '@src/components/features/ctf-components/ctf-footer/ctf-footer';
import { CtfHeader } from '@src/components/features/ctf-components/ctf-header/ctf-header';
import { CtfMobileMenu } from '@src/components/features/ctf-components/ctf-mobile-menu/ctf-mobile-menu';
import type {
  CtfPageFieldsFragment,
  CtfPageQuery,
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

const templateTypeToHeaderTypeMap = {
  'Home Page Template': 'Home Page Header',
  'Default Template': 'Default Header',
};
const templateTypeToFooterTypeMap = {
  'Home Page Template': 'Home Page Footer',
};

const findHeaderEntry = (
  headerCollection: Array<ReducedHeaderFieldsFragment | null>,
  templateType: string,
) => {
  const headerType = templateTypeToHeaderTypeMap[templateType];
  const requiredHeader = headerCollection?.find((entry: ReducedHeaderFieldsFragment | null) =>
    entry?.headerTemplateType?.includes(headerType),
  );
  return requiredHeader;
};

const findFooterEntry = (
  footerCollection: Array<ReducedFooterFieldsFragment | null>,
  templateType: string,
) => {
  const footerType = templateTypeToFooterTypeMap[templateType];
  const requiredFooter = footerCollection?.find((entry: ReducedFooterFieldsFragment | null) =>
    entry?.footerTemplateType?.includes(footerType),
  );
  return requiredFooter;
};

const CtfPage = (props: CtfPageFieldsFragmentWithHeadersAndFooters) => {
  const content = props.contentCollection && props.contentCollection.items.filter(it => !!it);
  const templateType = props?.templateType;
  const headerCollection = props.headerCollection;
  const footerCollection = props.footerCollection;

  //Find Appropriate Header and Footer for the page using templateType

  const headerEntry: any =
    headerCollection && templateType && findHeaderEntry(headerCollection, templateType);

  const footerEntry: any =
    footerCollection && templateType && findFooterEntry(footerCollection, templateType);

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
      {headerEntry && <ComponentResolver componentProps={headerEntry} forceGql />}

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
      {footerEntry && <ComponentResolver componentProps={footerEntry} forceGql />}

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
