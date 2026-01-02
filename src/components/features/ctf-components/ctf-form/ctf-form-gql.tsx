import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

import { useCtfFormQuery } from './__generated/ctf-form.generated';
import { CtfForm } from './ctf-form';

interface CtfFormGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

export const CtfFormGql = ({ id, locale, preview }: CtfFormGqlPropsInterface) => {
  const { data, isLoading } = useCtfFormQuery({
    id,
    locale,
    preview,
  });

  const formData = useContentfulLiveUpdates(data?.form);

  if (!formData || isLoading) return null;

  return <CtfForm {...formData} />;
};
