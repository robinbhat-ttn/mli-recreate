import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

import { useCtfVideoQuery } from './__generated/ctf-video-v2.generated';
import { CtfVideoV2 } from './ctf-video-v2';

interface CtfVideoGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

export const CtfVideoV2Gql = ({ id, locale, preview }: CtfVideoGqlPropsInterface) => {
  const { data, isLoading } = useCtfVideoQuery({
    id,
    locale,
    preview,
  });

  const videoData = useContentfulLiveUpdates(data?.videoSection);

  if (!videoData || isLoading) return null;

  return <CtfVideoV2 {...videoData} />;
};
