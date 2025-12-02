import * as Types from '../../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type FooterFieldsFragment = { __typename: 'Footer', sys: { __typename?: 'Sys', id: string }, footerLinksCollection?: { __typename?: 'FooterFooterLinksCollection', items: Array<{ __typename: 'SubNavigationItem', subNavigationItemTitle?: string | null, sys: { __typename?: 'Sys', id: string }, mainLink?: { __typename: 'Link', linkHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string } } | null, secondaryLinksCollection?: { __typename?: 'SubNavigationItemSecondaryLinksCollection', items: Array<{ __typename: 'Link', linkHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | null> } | null, buttonsCollection?: { __typename?: 'FooterButtonsCollection', items: Array<{ __typename: 'Button', buttonText?: string | null, buttonLink?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null, linksCollection?: { __typename?: 'FooterLinksCollection', items: Array<{ __typename: 'Link', linkHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null, footerInformation?: { __typename: 'FooterFooterInformation', json: any, links: { __typename?: 'FooterFooterInformationLinks', entries: { __typename?: 'FooterFooterInformationEntries', block: Array<
          | { __typename: 'Banner', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Button', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ButtonWithLinks', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Card', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Carousel', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Footer', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Policy', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'PolicyCards', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
         | null> }, assets: { __typename?: 'FooterFooterInformationAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null };

export type CtfFooterQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfFooterQuery = { __typename?: 'Query', footer?: (
    { __typename?: 'Footer' }
    & FooterFieldsFragment
  ) | null };


export const FooterFieldsFragmentDoc = `
    fragment FooterFields on Footer {
  __typename
  sys {
    id
  }
  footerLinksCollection(limit: 20) {
    items {
      __typename
      sys {
        id
      }
      subNavigationItemTitle
      mainLink {
        __typename
        sys {
          id
        }
        linkHeading
        linkUrl
      }
      secondaryLinksCollection(limit: 20) {
        items {
          __typename
          sys {
            id
          }
          linkHeading
          linkUrl
        }
      }
    }
  }
  buttonsCollection(limit: 20) {
    items {
      __typename
      sys {
        id
      }
      buttonText
      buttonLink
    }
  }
  linksCollection(limit: 20) {
    items {
      __typename
      sys {
        id
      }
      linkHeading
      linkUrl
    }
  }
  footerInformation {
    __typename
    json
    links {
      entries {
        block {
          __typename
          sys {
            id
          }
        }
      }
      assets {
        block {
          __typename
          sys {
            id
          }
          contentType
          title
          description
          width
          height
          url
        }
      }
    }
  }
}
    `;
export const CtfFooterDocument = `
    query CtfFooter($id: String!, $locale: String, $preview: Boolean) {
  footer(id: $id, locale: $locale, preview: $preview) {
    ...FooterFields
  }
}
    ${FooterFieldsFragmentDoc}`;

export const useCtfFooterQuery = <
      TData = CtfFooterQuery,
      TError = unknown
    >(
      variables: CtfFooterQueryVariables,
      options?: Omit<UseQueryOptions<CtfFooterQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CtfFooterQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CtfFooterQuery, TError, TData>(
      {
    queryKey: ['CtfFooter', variables],
    queryFn: customFetcher<CtfFooterQuery, CtfFooterQueryVariables>(CtfFooterDocument, variables),
    ...options
  }
    )};

useCtfFooterQuery.getKey = (variables: CtfFooterQueryVariables) => ['CtfFooter', variables];


useCtfFooterQuery.fetcher = (variables: CtfFooterQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfFooterQuery, CtfFooterQueryVariables>(CtfFooterDocument, variables, options);
