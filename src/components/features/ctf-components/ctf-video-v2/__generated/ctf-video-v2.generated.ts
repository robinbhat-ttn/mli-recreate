import * as Types from '../../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type VideoSectionFieldsFragment = { __typename: 'VideoSection', videoTitle?: string | null, youtubeId?: string | null, sys: { __typename?: 'Sys', id: string } };

export type CtfVideoQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfVideoQuery = { __typename?: 'Query', videoSection?: (
    { __typename?: 'VideoSection' }
    & VideoSectionFieldsFragment
  ) | null };


export const VideoSectionFieldsFragmentDoc = `
    fragment VideoSectionFields on VideoSection {
  __typename
  sys {
    id
  }
  videoTitle
  youtubeId
}
    `;
export const CtfVideoDocument = `
    query CtfVideo($id: String!, $locale: String, $preview: Boolean) {
  videoSection(id: $id, locale: $locale, preview: $preview) {
    ...VideoSectionFields
  }
}
    ${VideoSectionFieldsFragmentDoc}`;

export const useCtfVideoQuery = <
      TData = CtfVideoQuery,
      TError = unknown
    >(
      variables: CtfVideoQueryVariables,
      options?: Omit<UseQueryOptions<CtfVideoQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CtfVideoQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CtfVideoQuery, TError, TData>(
      {
    queryKey: ['CtfVideo', variables],
    queryFn: customFetcher<CtfVideoQuery, CtfVideoQueryVariables>(CtfVideoDocument, variables),
    ...options
  }
    )};

useCtfVideoQuery.getKey = (variables: CtfVideoQueryVariables) => ['CtfVideo', variables];


useCtfVideoQuery.fetcher = (variables: CtfVideoQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfVideoQuery, CtfVideoQueryVariables>(CtfVideoDocument, variables, options);
