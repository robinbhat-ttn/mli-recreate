import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

import { useCtfBannerQuery } from './__generated/ctf-banner.generated';
import { CtfBanner } from './ctf-banner';

interface CtfBannerGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

export const CtfBannerGql = ({ id, locale, preview }: CtfBannerGqlPropsInterface) => {
  const { data, isLoading } = useCtfBannerQuery({
    id,
    locale,
    preview,
  });

  const bannerData = useContentfulLiveUpdates(data?.banner);

  if (!bannerData || isLoading) return null;

  return <CtfBanner {...bannerData} />;
};
