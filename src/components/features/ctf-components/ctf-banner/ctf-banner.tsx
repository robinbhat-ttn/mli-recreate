import React from 'react';

import { useLayoutContext } from '@src/layout-context';

import { DefaultBannerComponent } from './DefaultBannerComponent';
import { HomePageBannerComponent } from './HomePageBannerComponent';

type Props = any;

export const CtfBanner = (props: Props) => {
  const { layoutType } = useLayoutContext();

  if (layoutType === 'Home Page Layout') {
    return <HomePageBannerComponent {...props} />;
  }

  return <DefaultBannerComponent {...props} />;
};

export default CtfBanner;
