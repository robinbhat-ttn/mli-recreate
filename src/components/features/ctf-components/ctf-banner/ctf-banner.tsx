import React from 'react';

import { DefaultBannerComponent } from './DefaultBannerComponent';
import { HomePageBannerComponent } from './HomePageBannerComponent';
import { useLayoutContext } from '@src/layout-context';

type Props = any;

export const CtfBanner = (props: Props) => {
  const { layoutType } = useLayoutContext();

  if (layoutType === 'Home Page Layout') {
    return <HomePageBannerComponent {...props} />;
  }

  return <DefaultBannerComponent {...props} />;
};

export default CtfBanner;
