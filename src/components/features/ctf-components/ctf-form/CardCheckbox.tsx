import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { useCtfCardQuery } from '../ctf-card/__generated/ctf-card.generated';

export const CardCheckbox = (props: any) => {
  const id = props?.id;
  const { data } = useCtfCardQuery({
    id,
  });
  const cardData = useContentfulLiveUpdates(data?.card);
  return <div></div>;
};
