import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import React from 'react';

import { useCtfFooterQuery } from './__generated/ctf-footer.generated';
import { CtfFooter } from './ctf-footer';

interface CtfFooterGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

export const CtfFooterGql = ({ id, locale, preview }: CtfFooterGqlPropsInterface) => {
  const { data, isLoading } = useCtfFooterQuery({
    id,
    locale,
    preview,
  });

  const footerData = useContentfulLiveUpdates(data?.footer);

  if (!footerData || isLoading) return null;

  return <CtfFooter {...footerData} />;
};
