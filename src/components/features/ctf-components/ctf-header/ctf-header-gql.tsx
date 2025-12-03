import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

import { useCtfHeaderQuery } from './__generated/ctf-header.generated';
import { CtfHeader } from './ctf-header';

import { useContentfulContext } from '@src/contentful-context';

interface CtfHeaderGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

export const CtfHeaderGql = ({ id, locale, preview }: CtfHeaderGqlPropsInterface) => {
  const { data, isLoading } = useCtfHeaderQuery({
    id,
    locale,
    preview,
  });

  const headerData = useContentfulLiveUpdates(data?.header);

  if (!headerData || isLoading) return null;

  return <CtfHeader {...headerData} />;
};
