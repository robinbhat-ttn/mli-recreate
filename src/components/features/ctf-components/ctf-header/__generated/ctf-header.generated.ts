import * as Types from '../../../../../lib/__generated/graphql.types';

import { LinkFieldsFragment } from '../../../../../lib/shared-fragments/__generated/ctf-linkFragment.generated';
import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { NavigationFieldsFragment } from '../../ctf-navigation/__generated/ctf-navigation.generated';
import { LinkFieldsFragmentDoc } from '../../../../../lib/shared-fragments/__generated/ctf-linkFragment.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { NavigationFieldsFragmentDoc } from '../../ctf-navigation/__generated/ctf-navigation.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type HamburgerMenuFieldsFragment = { __typename: 'HamburgerMenu', menuTitle?: string | null, sys: { __typename?: 'Sys', id: string }, menuItemsCollection?: { __typename?: 'HamburgerMenuMenuItemsCollection', items: Array<
      | (
        { __typename: 'Link' }
        & LinkFieldsFragment
      )
      | { __typename: 'SubNavigationItem', subNavigationItemTitle?: string | null, sys: { __typename?: 'Sys', id: string }, mainLink?: (
          { __typename?: 'Link' }
          & LinkFieldsFragment
        ) | null, secondaryLinksCollection?: { __typename?: 'SubNavigationItemSecondaryLinksCollection', items: Array<(
            { __typename?: 'Link' }
            & LinkFieldsFragment
          ) | null> } | null }
     | null> } | null };

export type ButtonCollectionFieldsFragment = { __typename?: 'HeaderButtonCollection', items: Array<
    | { __typename: 'Button' }
    | { __typename: 'ButtonWithLinks', buttonText?: string | null, sys: { __typename?: 'Sys', id: string }, buttonDropDownLinksCollection?: { __typename?: 'ButtonWithLinksButtonDropDownLinksCollection', items: Array<(
          { __typename?: 'Link' }
          & LinkFieldsFragment
        ) | null> } | null }
    | (
      { __typename: 'Link' }
      & LinkFieldsFragment
    )
   | null> };

export type HeaderFieldsFragment = { __typename: 'Header', headerType?: string | null, headerTemplateType?: Array<string | null> | null, sys: { __typename?: 'Sys', id: string }, logo?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null, navigationItemsCollection?: (
    { __typename?: 'HeaderNavigationItemsCollection' }
    & NavigationFieldsFragment
  ) | null, buttonCollection?: (
    { __typename?: 'HeaderButtonCollection' }
    & ButtonCollectionFieldsFragment
  ) | null, hamburgerMenu?: (
    { __typename?: 'HamburgerMenu' }
    & HamburgerMenuFieldsFragment
  ) | null };

export type CtfHeaderQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfHeaderQuery = { __typename?: 'Query', header?: (
    { __typename?: 'Header' }
    & HeaderFieldsFragment
  ) | null };


export const ButtonCollectionFieldsFragmentDoc = `
    fragment ButtonCollectionFields on HeaderButtonCollection {
  items {
    __typename
    ... on ButtonWithLinks {
      __typename
      sys {
        id
      }
      buttonText
      buttonDropDownLinksCollection(limit: 5) {
        items {
          ...LinkFields
        }
      }
    }
    ...LinkFields
  }
}
    `;
export const HamburgerMenuFieldsFragmentDoc = `
    fragment HamburgerMenuFields on HamburgerMenu {
  __typename
  sys {
    id
  }
  menuTitle
  menuItemsCollection(limit: 10) {
    items {
      __typename
      ... on Link {
        ...LinkFields
      }
      ... on SubNavigationItem {
        __typename
        sys {
          id
        }
        subNavigationItemTitle
        mainLink {
          ...LinkFields
        }
        secondaryLinksCollection(limit: 5) {
          items {
            ...LinkFields
          }
        }
      }
    }
  }
}
    `;
export const HeaderFieldsFragmentDoc = `
    fragment HeaderFields on Header {
  __typename
  sys {
    id
  }
  headerType
  headerTemplateType
  logo {
    ...AssetFields
  }
  navigationItemsCollection(limit: 5) {
    ...NavigationFields
  }
  buttonCollection(limit: 5) {
    ...ButtonCollectionFields
  }
  hamburgerMenu {
    ...HamburgerMenuFields
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
${NavigationFieldsFragmentDoc}
${LinkFieldsFragmentDoc}
${ButtonCollectionFieldsFragmentDoc}
${HamburgerMenuFieldsFragmentDoc}`;

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
