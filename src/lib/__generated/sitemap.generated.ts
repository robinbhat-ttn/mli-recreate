import * as Types from './graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type SitemapPagesQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type SitemapPagesQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', slug?: string | null, sys: { __typename?: 'Sys', publishedAt?: any | null } } | null> } | null };



export const SitemapPagesDocument = `
    query SitemapPages($locale: String, $preview: Boolean) {
  pageCollection(locale: $locale, preview: $preview, limit: 100) {
    items {
      slug
      sys {
        publishedAt
      }
    }
  }
}
    `;

export const useSitemapPagesQuery = <
      TData = SitemapPagesQuery,
      TError = unknown
    >(
      variables?: SitemapPagesQueryVariables,
      options?: Omit<UseQueryOptions<SitemapPagesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<SitemapPagesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<SitemapPagesQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['SitemapPages'] : ['SitemapPages', variables],
    queryFn: customFetcher<SitemapPagesQuery, SitemapPagesQueryVariables>(SitemapPagesDocument, variables),
    ...options
  }
    )};

useSitemapPagesQuery.getKey = (variables?: SitemapPagesQueryVariables) => variables === undefined ? ['SitemapPages'] : ['SitemapPages', variables];


useSitemapPagesQuery.fetcher = (variables?: SitemapPagesQueryVariables, options?: RequestInit['headers']) => customFetcher<SitemapPagesQuery, SitemapPagesQueryVariables>(SitemapPagesDocument, variables, options);
