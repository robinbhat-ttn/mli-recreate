import * as Types from '../../../../../lib/__generated/graphql.types';

import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type PageContentFields_Banner_Fragment = { __typename: 'Banner' };

export type PageContentFields_Button_Fragment = { __typename: 'Button' };

export type PageContentFields_Carousel_Fragment = { __typename: 'Carousel' };

export type PageContentFields_ComponentTextBlock_Fragment = { __typename: 'ComponentTextBlock' };

export type PageContentFields_VideoSection_Fragment = { __typename: 'VideoSection' };

export type PageContentFieldsFragment =
  | PageContentFields_Banner_Fragment
  | PageContentFields_Button_Fragment
  | PageContentFields_Carousel_Fragment
  | PageContentFields_ComponentTextBlock_Fragment
  | PageContentFields_VideoSection_Fragment
;

export type CtfPageFieldsFragment = { __typename: 'Page', pageName?: string | null, slug?: string | null, internalName?: string | null, sys: { __typename?: 'Sys', id: string }, seo?: { __typename?: 'Seo', title?: string | null, description?: string | null, noIndex?: boolean | null, noFollow?: boolean | null, image?: (
      { __typename?: 'Asset' }
      & AssetFieldsFragment
    ) | null } | null, contentCollection?: { __typename?: 'PageContentCollection', items: Array<
      | (
        { __typename: 'Banner', sys: { __typename?: 'Sys', id: string } }
        & PageContentFields_Banner_Fragment
      )
      | (
        { __typename: 'Button', sys: { __typename?: 'Sys', id: string } }
        & PageContentFields_Button_Fragment
      )
      | (
        { __typename: 'Carousel', sys: { __typename?: 'Sys', id: string } }
        & PageContentFields_Carousel_Fragment
      )
      | (
        { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } }
        & PageContentFields_ComponentTextBlock_Fragment
      )
      | (
        { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
        & PageContentFields_VideoSection_Fragment
      )
     | null> } | null };

export type CtfPageQueryVariables = Types.Exact<{
  slug: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfPageQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<(
      { __typename?: 'Page' }
      & CtfPageFieldsFragment
    ) | null> } | null };


export const PageContentFieldsFragmentDoc = `
    fragment PageContentFields on PageContentItem {
  __typename
}
    `;
export const CtfPageFieldsFragmentDoc = `
    fragment CtfPageFields on Page {
  __typename
  sys {
    id
  }
  pageName
  internalName: pageName
  slug
  seo {
    title
    description
    image {
      ...AssetFields
    }
    noIndex
    noFollow
  }
  contentCollection(limit: 20) {
    items {
      ... on Entry {
        __typename
        sys {
          id
        }
      }
      ...PageContentFields
    }
  }
}
    `;
export const CtfPageDocument = `
    query CtfPage($slug: String!, $locale: String, $preview: Boolean) {
  pageCollection(
    where: {slug: $slug}
    locale: $locale
    preview: $preview
    limit: 1
  ) {
    items {
      ...CtfPageFields
    }
  }
}
    ${CtfPageFieldsFragmentDoc}
${AssetFieldsFragmentDoc}
${PageContentFieldsFragmentDoc}`;

export const useCtfPageQuery = <
      TData = CtfPageQuery,
      TError = unknown
    >(
      variables: CtfPageQueryVariables,
      options?: Omit<UseQueryOptions<CtfPageQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CtfPageQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CtfPageQuery, TError, TData>(
      {
    queryKey: ['CtfPage', variables],
    queryFn: customFetcher<CtfPageQuery, CtfPageQueryVariables>(CtfPageDocument, variables),
    ...options
  }
    )};

useCtfPageQuery.getKey = (variables: CtfPageQueryVariables) => ['CtfPage', variables];


useCtfPageQuery.fetcher = (variables: CtfPageQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfPageQuery, CtfPageQueryVariables>(CtfPageDocument, variables, options);
