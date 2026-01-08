import React from 'react';
import { HomePageBannerComponent } from './HomePageBannerComponent';
import { DefaultBannerComponent } from './DefaultBannerComponent';
import { useLayoutContext } from '@src/layout-context';

type Props = any;

export const CtfBanner = (props: Props) => {
  const { layoutType } = useLayoutContext();

  if (layoutType === 'HomePageLayout') {
    return <HomePageBannerComponent {...props} />;
  }

  return <DefaultBannerComponent {...props} />;
};

export default CtfBanner;
