import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

import { useCtfFormWrapperQuery } from './__generated/ctf-form-wrapper.generated';
import { CtfFormWrapper } from './ctf-form-wrapper';

interface CtfFormWrapperGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

export const CtfFormWrapperGql = ({ id, locale, preview }: CtfFormWrapperGqlPropsInterface) => {
  const { data, isLoading } = useCtfFormWrapperQuery({
    id,
    locale,
    preview,
  });

  const formWrapperData = useContentfulLiveUpdates(data?.formWrapper);

  if (!formWrapperData || isLoading) return null;

  return <CtfFormWrapper {...formWrapperData} />;
};
