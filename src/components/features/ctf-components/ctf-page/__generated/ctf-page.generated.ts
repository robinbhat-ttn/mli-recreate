import * as Types from '../../../../../lib/__generated/graphql.types';

import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type PageContentFields_Accordion_Fragment = { __typename: 'Accordion' };

export type PageContentFields_Banner_Fragment = { __typename: 'Banner' };

export type PageContentFields_Button_Fragment = { __typename: 'Button' };

export type PageContentFields_Carousel_Fragment = { __typename: 'Carousel' };

export type PageContentFields_ComponentTextBlock_Fragment = { __typename: 'ComponentTextBlock' };

export type PageContentFields_Form_Fragment = { __typename: 'Form' };

export type PageContentFields_FormWrapper_Fragment = { __typename: 'FormWrapper' };

export type PageContentFields_Link_Fragment = { __typename: 'Link' };

export type PageContentFields_TabbedFormContainer_Fragment = { __typename: 'TabbedFormContainer' };

export type PageContentFields_VideoSection_Fragment = { __typename: 'VideoSection' };

export type PageContentFieldsFragment =
  | PageContentFields_Accordion_Fragment
  | PageContentFields_Banner_Fragment
  | PageContentFields_Button_Fragment
  | PageContentFields_Carousel_Fragment
  | PageContentFields_ComponentTextBlock_Fragment
  | PageContentFields_Form_Fragment
  | PageContentFields_FormWrapper_Fragment
  | PageContentFields_Link_Fragment
  | PageContentFields_TabbedFormContainer_Fragment
  | PageContentFields_VideoSection_Fragment
;

export type CtfPageFieldsFragment = { __typename: 'Page', pageName?: string | null, templateType?: string | null, pageLayout?: string | null, slug?: string | null, internalName?: string | null, sys: { __typename?: 'Sys', id: string }, seo?: { __typename?: 'Seo', title?: string | null, description?: string | null, noIndex?: boolean | null, noFollow?: boolean | null, image?: (
      { __typename?: 'Asset' }
      & AssetFieldsFragment
    ) | null } | null, contentCollection?: { __typename?: 'PageContentCollection', items: Array<
      | (
        { __typename: 'Accordion', sys: { __typename?: 'Sys', id: string } }
        & PageContentFields_Accordion_Fragment
      )
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
        { __typename: 'Form', sys: { __typename?: 'Sys', id: string } }
        & PageContentFields_Form_Fragment
      )
      | (
        { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
        & PageContentFields_FormWrapper_Fragment
      )
      | (
        { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
        & PageContentFields_Link_Fragment
      )
      | (
        { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
        & PageContentFields_TabbedFormContainer_Fragment
      )
      | (
        { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
        & PageContentFields_VideoSection_Fragment
      )
     | null> } | null };

export type ReducedHeaderFieldsFragment = { __typename: 'Header', headerTemplateType?: Array<string | null> | null, sys: { __typename?: 'Sys', id: string } };

export type ReducedFooterFieldsFragment = { __typename: 'Footer', footerTemplateType?: Array<string | null> | null, sys: { __typename?: 'Sys', id: string } };

export type CtfPageQueryVariables = Types.Exact<{
  slug: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfPageQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<(
      { __typename?: 'Page' }
      & CtfPageFieldsFragment
    ) | null> } | null, headerCollection?: { __typename?: 'HeaderCollection', items: Array<(
      { __typename?: 'Header' }
      & ReducedHeaderFieldsFragment
    ) | null> } | null, footerCollection?: { __typename?: 'FooterCollection', items: Array<(
      { __typename?: 'Footer' }
      & ReducedFooterFieldsFragment
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
  templateType
  pageLayout
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
export const ReducedHeaderFieldsFragmentDoc = `
    fragment ReducedHeaderFields on Header {
  __typename
  sys {
    id
  }
  headerTemplateType
}
    `;
export const ReducedFooterFieldsFragmentDoc = `
    fragment ReducedFooterFields on Footer {
  __typename
  sys {
    id
  }
  footerTemplateType
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
  headerCollection {
    items {
      ...ReducedHeaderFields
    }
  }
  footerCollection {
    items {
      ...ReducedFooterFields
    }
  }
}
    ${CtfPageFieldsFragmentDoc}
${AssetFieldsFragmentDoc}
${PageContentFieldsFragmentDoc}
${ReducedHeaderFieldsFragmentDoc}
${ReducedFooterFieldsFragmentDoc}`;

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
