import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

import { useCtfAccordionQuery } from './__generated/ctf-accordion.generated';
import { CtfAccordion } from './ctf-accordion';

interface CtfAccordionGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

export const CtfAccordionGql = ({ id, locale, preview }: CtfAccordionGqlPropsInterface) => {
  const { data, isLoading } = useCtfAccordionQuery({
    id,
    locale,
    preview,
  });

  const accordionData = useContentfulLiveUpdates(data?.accordion);

  if (!accordionData || isLoading) return null;

  return <CtfAccordion {...accordionData} />;
};
