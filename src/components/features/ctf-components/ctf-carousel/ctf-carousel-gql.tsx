import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

import { useCtfCarouselQuery } from './__generated/ctf-carousel.generated';
import { CtfCarousel } from './ctf-carousel';

interface CtfCarouselGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

export const CtfCarouselGql = ({ id, locale, preview }: CtfCarouselGqlPropsInterface) => {
  const { data, isLoading } = useCtfCarouselQuery({
    id,
    locale,
    preview,
  });

  const carouselData = useContentfulLiveUpdates(data?.carousel);

  if (!carouselData || isLoading) return null;

  return <CtfCarousel {...carouselData} />;
};
