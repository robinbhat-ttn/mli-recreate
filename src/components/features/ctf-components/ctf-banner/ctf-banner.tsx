import React from 'react';
import { HomePageBannerComponent } from './HomePageBannerComponent';
import { DefaultBannerComponent } from './DefaultBannerComponent';

type Props = any;

export const CtfBanner = (props: Props) => {
  const isHomePageBanner = props.bannerType === 'Home Page Banner';
  console.log('CtfBanner props:', props);

  if (isHomePageBanner) {
    return <HomePageBannerComponent {...props} />;
  }

  return <DefaultBannerComponent {...props} />;
};

export default CtfBanner;
