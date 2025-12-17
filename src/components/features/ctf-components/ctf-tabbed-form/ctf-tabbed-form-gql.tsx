import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

import { useCtfTabbedFormContainerQuery } from './__generated/ctf-tabbed-form.generated';
import { CtfTabbedForm } from './ctf-tabbed-form';

interface CtfTabbedFormGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

export const CtfTabbedFormGql = ({ id, locale, preview }: CtfTabbedFormGqlPropsInterface) => {
  const { data, isLoading } = useCtfTabbedFormContainerQuery({
    id,
    locale,
    preview,
  });

  const formData = useContentfulLiveUpdates(data?.tabbedFormContainer);

  if (!formData || isLoading) return null;

  return <CtfTabbedForm {...formData} />;
};
