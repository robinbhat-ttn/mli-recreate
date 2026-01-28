import * as Types from '../../../../../lib/__generated/graphql.types';

import { LinkFieldsFragment } from '../../../../../lib/shared-fragments/__generated/ctf-linkFragment.generated';
import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { LinkFieldsFragmentDoc } from '../../../../../lib/shared-fragments/__generated/ctf-linkFragment.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type JourneyFieldsFragment = { __typename: 'Journey', internalName?: string | null, title?: string | null, steps?: Array<string | null> | null, lifeCoverLabel?: string | null, premiumLabel?: string | null, sys: { __typename?: 'Sys', id: string }, button?: (
    { __typename?: 'Link' }
    & LinkFieldsFragment
  ) | null };

export type CtfJourneyQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfJourneyQuery = { __typename?: 'Query', journey?: (
    { __typename?: 'Journey' }
    & JourneyFieldsFragment
  ) | null };


export const JourneyFieldsFragmentDoc = `
    fragment JourneyFields on Journey {
  __typename
  sys {
    id
  }
  internalName
  title
  steps
  lifeCoverLabel
  premiumLabel
  button {
    ...LinkFields
  }
}
    `;
export const CtfJourneyDocument = `
    query CtfJourney($id: String!, $locale: String, $preview: Boolean) {
  journey(id: $id, locale: $locale, preview: $preview) {
    ...JourneyFields
  }
}
    ${JourneyFieldsFragmentDoc}
${LinkFieldsFragmentDoc}
${AssetFieldsFragmentDoc}`;

export const useCtfJourneyQuery = <
      TData = CtfJourneyQuery,
      TError = unknown
    >(
      variables: CtfJourneyQueryVariables,
      options?: Omit<UseQueryOptions<CtfJourneyQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CtfJourneyQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CtfJourneyQuery, TError, TData>(
      {
    queryKey: ['CtfJourney', variables],
    queryFn: customFetcher<CtfJourneyQuery, CtfJourneyQueryVariables>(CtfJourneyDocument, variables),
    ...options
  }
    )};

useCtfJourneyQuery.getKey = (variables: CtfJourneyQueryVariables) => ['CtfJourney', variables];


useCtfJourneyQuery.fetcher = (variables: CtfJourneyQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfJourneyQuery, CtfJourneyQueryVariables>(CtfJourneyDocument, variables, options);
