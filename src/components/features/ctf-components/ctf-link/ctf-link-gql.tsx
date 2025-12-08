import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

import { useCtfLinkQuery } from './__generated/ctf-link.generated';
import { CtfLink } from './ctf-link';

import { useContentfulContext } from '@src/contentful-context';

interface CtfLinkGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

export const CtfLinkGql = ({ id, locale, preview }: CtfLinkGqlPropsInterface) => {
  const { data, isLoading } = useCtfLinkQuery({
    id,
    locale,
    preview,
  });

  const linkData = useContentfulLiveUpdates(data?.link);

  if (!linkData || isLoading) return null;

  return <CtfLink {...linkData} />;
};
