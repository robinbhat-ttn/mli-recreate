import * as Types from '../../../../../lib/__generated/graphql.types';

import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { ComponentReferenceFields_Accordion_Fragment, ComponentReferenceFields_Banner_Fragment, ComponentReferenceFields_Button_Fragment, ComponentReferenceFields_ButtonWithLinks_Fragment, ComponentReferenceFields_Card_Fragment, ComponentReferenceFields_Carousel_Fragment, ComponentReferenceFields_ComponentTextBlock_Fragment, ComponentReferenceFields_Disclaimer_Fragment, ComponentReferenceFields_Footer_Fragment, ComponentReferenceFields_Form_Fragment, ComponentReferenceFields_FormField_Fragment, ComponentReferenceFields_FormTab_Fragment, ComponentReferenceFields_FormWrapper_Fragment, ComponentReferenceFields_HamburgerMenu_Fragment, ComponentReferenceFields_Header_Fragment, ComponentReferenceFields_Journey_Fragment, ComponentReferenceFields_Link_Fragment, ComponentReferenceFields_NavigationItems_Fragment, ComponentReferenceFields_OptionSet_Fragment, ComponentReferenceFields_Page_Fragment, ComponentReferenceFields_Question_Fragment, ComponentReferenceFields_SubNavigationItem_Fragment, ComponentReferenceFields_TabbedFormContainer_Fragment, ComponentReferenceFields_Template_Fragment, ComponentReferenceFields_VideoSection_Fragment } from '../../../../../lib/shared-fragments/__generated/ctf-componentMap.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { ComponentReferenceFieldsFragmentDoc } from '../../../../../lib/shared-fragments/__generated/ctf-componentMap.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type CtfBannerQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfBannerQuery = { __typename?: 'Query', banner?: { __typename: 'Banner', bannerType?: string | null, bannerTitle?: string | null, bannerImageLink?: string | null, sys: { __typename?: 'Sys', id: string }, bannerImage?: (
      { __typename?: 'Asset' }
      & AssetFieldsFragment
    ) | null, bannerTextCollection?: { __typename?: 'BannerBannerTextCollection', items: Array<{ __typename: 'ComponentTextBlock', variations?: string | null, sys: { __typename?: 'Sys', id: string }, body?: { __typename?: 'ComponentTextBlockBody', json: any, links: { __typename?: 'ComponentTextBlockBodyLinks', entries: { __typename?: 'ComponentTextBlockBodyEntries', block: Array<
                | (
                  { __typename?: 'Accordion' }
                  & ComponentReferenceFields_Accordion_Fragment
                )
                | (
                  { __typename?: 'Banner' }
                  & ComponentReferenceFields_Banner_Fragment
                )
                | (
                  { __typename?: 'Button' }
                  & ComponentReferenceFields_Button_Fragment
                )
                | (
                  { __typename?: 'ButtonWithLinks' }
                  & ComponentReferenceFields_ButtonWithLinks_Fragment
                )
                | (
                  { __typename?: 'Card' }
                  & ComponentReferenceFields_Card_Fragment
                )
                | (
                  { __typename?: 'Carousel' }
                  & ComponentReferenceFields_Carousel_Fragment
                )
                | (
                  { __typename?: 'ComponentTextBlock' }
                  & ComponentReferenceFields_ComponentTextBlock_Fragment
                )
                | (
                  { __typename?: 'Disclaimer' }
                  & ComponentReferenceFields_Disclaimer_Fragment
                )
                | (
                  { __typename?: 'Footer' }
                  & ComponentReferenceFields_Footer_Fragment
                )
                | (
                  { __typename?: 'Form' }
                  & ComponentReferenceFields_Form_Fragment
                )
                | (
                  { __typename?: 'FormField' }
                  & ComponentReferenceFields_FormField_Fragment
                )
                | (
                  { __typename?: 'FormTab' }
                  & ComponentReferenceFields_FormTab_Fragment
                )
                | (
                  { __typename?: 'FormWrapper' }
                  & ComponentReferenceFields_FormWrapper_Fragment
                )
                | (
                  { __typename?: 'HamburgerMenu' }
                  & ComponentReferenceFields_HamburgerMenu_Fragment
                )
                | (
                  { __typename?: 'Header' }
                  & ComponentReferenceFields_Header_Fragment
                )
                | (
                  { __typename?: 'Journey' }
                  & ComponentReferenceFields_Journey_Fragment
                )
                | (
                  { __typename?: 'Link' }
                  & ComponentReferenceFields_Link_Fragment
                )
                | (
                  { __typename?: 'NavigationItems' }
                  & ComponentReferenceFields_NavigationItems_Fragment
                )
                | (
                  { __typename?: 'OptionSet' }
                  & ComponentReferenceFields_OptionSet_Fragment
                )
                | (
                  { __typename?: 'Page' }
                  & ComponentReferenceFields_Page_Fragment
                )
                | (
                  { __typename?: 'Question' }
                  & ComponentReferenceFields_Question_Fragment
                )
                | (
                  { __typename?: 'SubNavigationItem' }
                  & ComponentReferenceFields_SubNavigationItem_Fragment
                )
                | (
                  { __typename?: 'TabbedFormContainer' }
                  & ComponentReferenceFields_TabbedFormContainer_Fragment
                )
                | (
                  { __typename?: 'Template' }
                  & ComponentReferenceFields_Template_Fragment
                )
                | (
                  { __typename?: 'VideoSection' }
                  & ComponentReferenceFields_VideoSection_Fragment
                )
               | null> }, assets: { __typename?: 'ComponentTextBlockBodyAssets', block: Array<(
                { __typename?: 'Asset' }
                & AssetFieldsFragment
              ) | null> } } } | null } | null> } | null, policyCardsCollection?: { __typename?: 'BannerPolicyCardsCollection', items: Array<{ __typename: 'Card', cardTitle?: string | null, cardLink?: string | null, sys: { __typename?: 'Sys', id: string }, cardImage?: (
          { __typename?: 'Asset' }
          & AssetFieldsFragment
        ) | null, cardContent?: { __typename?: 'CardCardContent', json: any, links: { __typename?: 'CardCardContentLinks', entries: { __typename?: 'CardCardContentEntries', block: Array<
                | (
                  { __typename?: 'Accordion' }
                  & ComponentReferenceFields_Accordion_Fragment
                )
                | (
                  { __typename?: 'Banner' }
                  & ComponentReferenceFields_Banner_Fragment
                )
                | (
                  { __typename?: 'Button' }
                  & ComponentReferenceFields_Button_Fragment
                )
                | (
                  { __typename?: 'ButtonWithLinks' }
                  & ComponentReferenceFields_ButtonWithLinks_Fragment
                )
                | (
                  { __typename?: 'Card' }
                  & ComponentReferenceFields_Card_Fragment
                )
                | (
                  { __typename?: 'Carousel' }
                  & ComponentReferenceFields_Carousel_Fragment
                )
                | (
                  { __typename?: 'ComponentTextBlock' }
                  & ComponentReferenceFields_ComponentTextBlock_Fragment
                )
                | (
                  { __typename?: 'Disclaimer' }
                  & ComponentReferenceFields_Disclaimer_Fragment
                )
                | (
                  { __typename?: 'Footer' }
                  & ComponentReferenceFields_Footer_Fragment
                )
                | (
                  { __typename?: 'Form' }
                  & ComponentReferenceFields_Form_Fragment
                )
                | (
                  { __typename?: 'FormField' }
                  & ComponentReferenceFields_FormField_Fragment
                )
                | (
                  { __typename?: 'FormTab' }
                  & ComponentReferenceFields_FormTab_Fragment
                )
                | (
                  { __typename?: 'FormWrapper' }
                  & ComponentReferenceFields_FormWrapper_Fragment
                )
                | (
                  { __typename?: 'HamburgerMenu' }
                  & ComponentReferenceFields_HamburgerMenu_Fragment
                )
                | (
                  { __typename?: 'Header' }
                  & ComponentReferenceFields_Header_Fragment
                )
                | (
                  { __typename?: 'Journey' }
                  & ComponentReferenceFields_Journey_Fragment
                )
                | (
                  { __typename?: 'Link' }
                  & ComponentReferenceFields_Link_Fragment
                )
                | (
                  { __typename?: 'NavigationItems' }
                  & ComponentReferenceFields_NavigationItems_Fragment
                )
                | (
                  { __typename?: 'OptionSet' }
                  & ComponentReferenceFields_OptionSet_Fragment
                )
                | (
                  { __typename?: 'Page' }
                  & ComponentReferenceFields_Page_Fragment
                )
                | (
                  { __typename?: 'Question' }
                  & ComponentReferenceFields_Question_Fragment
                )
                | (
                  { __typename?: 'SubNavigationItem' }
                  & ComponentReferenceFields_SubNavigationItem_Fragment
                )
                | (
                  { __typename?: 'TabbedFormContainer' }
                  & ComponentReferenceFields_TabbedFormContainer_Fragment
                )
                | (
                  { __typename?: 'Template' }
                  & ComponentReferenceFields_Template_Fragment
                )
                | (
                  { __typename?: 'VideoSection' }
                  & ComponentReferenceFields_VideoSection_Fragment
                )
               | null> }, assets: { __typename?: 'CardCardContentAssets', block: Array<(
                { __typename?: 'Asset' }
                & AssetFieldsFragment
              ) | null> } } } | null } | null> } | null } | null };



export const CtfBannerDocument = `
    query CtfBanner($id: String!, $locale: String, $preview: Boolean) {
  banner(id: $id, locale: $locale, preview: $preview) {
    __typename
    sys {
      id
    }
    bannerType
    bannerImage {
      ...AssetFields
    }
    bannerTitle
    bannerTextCollection(limit: 4) {
      items {
        __typename
        sys {
          id
        }
        body {
          json
          links {
            entries {
              block {
                ...ComponentReferenceFields
              }
            }
            assets {
              block {
                ...AssetFields
              }
            }
          }
        }
        variations
      }
    }
    policyCardsCollection(limit: 6) {
      items {
        __typename
        sys {
          id
        }
        cardImage {
          ...AssetFields
        }
        cardTitle
        cardContent {
          json
          links {
            entries {
              block {
                ...ComponentReferenceFields
              }
            }
            assets {
              block {
                ...AssetFields
              }
            }
          }
        }
        cardLink
      }
    }
    bannerImageLink
  }
}
    ${AssetFieldsFragmentDoc}
${ComponentReferenceFieldsFragmentDoc}`;

export const useCtfBannerQuery = <
      TData = CtfBannerQuery,
      TError = unknown
    >(
      variables: CtfBannerQueryVariables,
      options?: Omit<UseQueryOptions<CtfBannerQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CtfBannerQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CtfBannerQuery, TError, TData>(
      {
    queryKey: ['CtfBanner', variables],
    queryFn: customFetcher<CtfBannerQuery, CtfBannerQueryVariables>(CtfBannerDocument, variables),
    ...options
  }
    )};

useCtfBannerQuery.getKey = (variables: CtfBannerQueryVariables) => ['CtfBanner', variables];


useCtfBannerQuery.fetcher = (variables: CtfBannerQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfBannerQuery, CtfBannerQueryVariables>(CtfBannerDocument, variables, options);
