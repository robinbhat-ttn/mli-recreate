import * as Types from '../../../../../lib/__generated/graphql.types';

import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { NavigationFieldsFragment } from '../../ctf-navigation/__generated/ctf-navigation.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { NavigationFieldsFragmentDoc } from '../../ctf-navigation/__generated/ctf-navigation.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type HeaderFieldsFragment = { __typename: 'Header', logo?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null, navigationItemsCollection?: (
    { __typename?: 'HeaderNavigationItemsCollection' }
    & NavigationFieldsFragment
  ) | null, buttonCollection?: { __typename?: 'HeaderButtonCollection', items: Array<
      | { __typename: 'Button', buttonText?: string | null, buttonLink?: string | null, sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'ButtonWithLinks', buttonText?: string | null, sys: { __typename?: 'Sys', id: string }, buttonDropDownLinksCollection?: { __typename?: 'ButtonWithLinksButtonDropDownLinksCollection', items: Array<{ __typename: 'Link', linkHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null }
     | null> } | null, hamburgerMenu?: { __typename: 'HamburgerMenu', menuTitle?: string | null, sys: { __typename?: 'Sys', id: string }, menuItemsCollection?: { __typename?: 'HamburgerMenuMenuItemsCollection', items: Array<
        | { __typename: 'Link', linkHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'SubNavigationItem', subNavigationItemTitle?: string | null, sys: { __typename?: 'Sys', id: string }, mainLink?: { __typename: 'Link', linkHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string } } | null, secondaryLinksCollection?: { __typename?: 'SubNavigationItemSecondaryLinksCollection', items: Array<{ __typename: 'Link', linkHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null }
       | null> } | null } | null };

export type CtfHeaderQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfHeaderQuery = { __typename?: 'Query', header?: (
    { __typename?: 'Header' }
    & HeaderFieldsFragment
  ) | null };


export const HeaderFieldsFragmentDoc = `
    fragment HeaderFields on Header {
  __typename
  logo {
    ...AssetFields
  }
  navigationItemsCollection(limit: 20) {
    ...NavigationFields
  }
  buttonCollection(limit: 20) {
    items {
      __typename
      ... on ButtonWithLinks {
        __typename
        sys {
          id
        }
        buttonText
        buttonDropDownLinksCollection(limit: 20) {
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
      ... on Button {
        __typename
        sys {
          id
        }
        buttonText
        buttonLink
      }
    }
  }
  hamburgerMenu {
    __typename
    sys {
      id
    }
    menuTitle
    menuItemsCollection(limit: 20) {
      items {
        __typename
        ... on Link {
          __typename
          sys {
            id
          }
          linkHeading
          linkUrl
        }
        ... on SubNavigationItem {
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
    }
  }
}
    `;
export const CtfHeaderDocument = `
    query CtfHeader($id: String!, $locale: String, $preview: Boolean) {
  header(id: $id, locale: $locale, preview: $preview) {
    ...HeaderFields
  }
}
    ${HeaderFieldsFragmentDoc}
${AssetFieldsFragmentDoc}
${NavigationFieldsFragmentDoc}`;

export const useCtfHeaderQuery = <
      TData = CtfHeaderQuery,
      TError = unknown
    >(
      variables: CtfHeaderQueryVariables,
      options?: Omit<UseQueryOptions<CtfHeaderQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CtfHeaderQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CtfHeaderQuery, TError, TData>(
      {
    queryKey: ['CtfHeader', variables],
    queryFn: customFetcher<CtfHeaderQuery, CtfHeaderQueryVariables>(CtfHeaderDocument, variables),
    ...options
  }
    )};

useCtfHeaderQuery.getKey = (variables: CtfHeaderQueryVariables) => ['CtfHeader', variables];


useCtfHeaderQuery.fetcher = (variables: CtfHeaderQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfHeaderQuery, CtfHeaderQueryVariables>(CtfHeaderDocument, variables, options);
