import * as Types from '../../../../../lib/__generated/graphql.types';

import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type CtfLinkQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfLinkQuery = { __typename?: 'Query', link?: (
    { __typename?: 'Link' }
    & LinkFieldsFragment
  ) | null };

export type LinkFieldsFragment = { __typename: 'Link', linkHeading?: string | null, linkUrl?: string | null, slug?: string | null, sys: { __typename?: 'Sys', id: string }, icon?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null };


export const LinkFieldsFragmentDoc = `
    fragment LinkFields on Link {
  __typename
  sys {
    id
  }
  linkHeading
  linkUrl
  slug
  icon {
    ...AssetFields
  }
}
    `;
export const CtfLinkDocument = `
    query CtfLink($id: String!, $locale: String, $preview: Boolean) {
  link(id: $id, locale: $locale, preview: $preview) {
    ...LinkFields
  }
}
    ${LinkFieldsFragmentDoc}
${AssetFieldsFragmentDoc}`;

export const useCtfLinkQuery = <
      TData = CtfLinkQuery,
      TError = unknown
    >(
      variables: CtfLinkQueryVariables,
      options?: Omit<UseQueryOptions<CtfLinkQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CtfLinkQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CtfLinkQuery, TError, TData>(
      {
    queryKey: ['CtfLink', variables],
    queryFn: customFetcher<CtfLinkQuery, CtfLinkQueryVariables>(CtfLinkDocument, variables),
    ...options
  }
    )};

useCtfLinkQuery.getKey = (variables: CtfLinkQueryVariables) => ['CtfLink', variables];


useCtfLinkQuery.fetcher = (variables: CtfLinkQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfLinkQuery, CtfLinkQueryVariables>(CtfLinkDocument, variables, options);
