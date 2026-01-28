import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { useCtfJourneyQuery } from './__generated/ctf-journey.generated';
import { CtfJourney } from './ctf-journey';

interface CtfJourneyGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

export const CtfJourneyGql = ({ id, locale, preview }: CtfJourneyGqlPropsInterface) => {
  const { data, isLoading } = useCtfJourneyQuery({
    id,
    locale,
    preview,
  });

  const journeyData = useContentfulLiveUpdates(data?.journey);

  if (!journeyData || isLoading) return null;

  return <CtfJourney {...journeyData} />;
};
