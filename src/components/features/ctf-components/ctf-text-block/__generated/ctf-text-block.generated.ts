import * as Types from '../../../../../lib/__generated/graphql.types';

import { ComponentReferenceFields_Accordion_Fragment, ComponentReferenceFields_Banner_Fragment, ComponentReferenceFields_Button_Fragment, ComponentReferenceFields_ButtonWithLinks_Fragment, ComponentReferenceFields_Card_Fragment, ComponentReferenceFields_Carousel_Fragment, ComponentReferenceFields_ComponentTextBlock_Fragment, ComponentReferenceFields_Disclaimer_Fragment, ComponentReferenceFields_Footer_Fragment, ComponentReferenceFields_Form_Fragment, ComponentReferenceFields_FormField_Fragment, ComponentReferenceFields_FormTab_Fragment, ComponentReferenceFields_FormWrapper_Fragment, ComponentReferenceFields_HamburgerMenu_Fragment, ComponentReferenceFields_Header_Fragment, ComponentReferenceFields_Journey_Fragment, ComponentReferenceFields_Link_Fragment, ComponentReferenceFields_NavigationItems_Fragment, ComponentReferenceFields_OptionSet_Fragment, ComponentReferenceFields_Page_Fragment, ComponentReferenceFields_Question_Fragment, ComponentReferenceFields_SubNavigationItem_Fragment, ComponentReferenceFields_TabbedFormContainer_Fragment, ComponentReferenceFields_Template_Fragment, ComponentReferenceFields_VideoSection_Fragment } from '../../../../../lib/shared-fragments/__generated/ctf-componentMap.generated';
import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { ComponentReferenceFieldsFragmentDoc } from '../../../../../lib/shared-fragments/__generated/ctf-componentMap.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type TextBlockFieldsFragment = { __typename: 'ComponentTextBlock', variations?: string | null, sys: { __typename?: 'Sys', id: string }, body?: { __typename?: 'ComponentTextBlockBody', json: any, links: { __typename?: 'ComponentTextBlockBodyLinks', entries: { __typename?: 'ComponentTextBlockBodyEntries', block: Array<
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
         | null>, inline: Array<
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
        ) | null> } } } | null };

export type CtfTextBlockQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfTextBlockQuery = { __typename?: 'Query', componentTextBlock?: (
    { __typename?: 'ComponentTextBlock' }
    & TextBlockFieldsFragment
  ) | null };


export const TextBlockFieldsFragmentDoc = `
    fragment TextBlockFields on ComponentTextBlock {
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
        inline {
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
    `;
export const CtfTextBlockDocument = `
    query CtfTextBlock($id: String!, $locale: String, $preview: Boolean) {
  componentTextBlock(id: $id, locale: $locale, preview: $preview) {
    ...TextBlockFields
  }
}
    ${TextBlockFieldsFragmentDoc}
${ComponentReferenceFieldsFragmentDoc}
${AssetFieldsFragmentDoc}`;

export const useCtfTextBlockQuery = <
      TData = CtfTextBlockQuery,
      TError = unknown
    >(
      variables: CtfTextBlockQueryVariables,
      options?: Omit<UseQueryOptions<CtfTextBlockQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CtfTextBlockQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CtfTextBlockQuery, TError, TData>(
      {
    queryKey: ['CtfTextBlock', variables],
    queryFn: customFetcher<CtfTextBlockQuery, CtfTextBlockQueryVariables>(CtfTextBlockDocument, variables),
    ...options
  }
    )};

useCtfTextBlockQuery.getKey = (variables: CtfTextBlockQueryVariables) => ['CtfTextBlock', variables];


useCtfTextBlockQuery.fetcher = (variables: CtfTextBlockQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfTextBlockQuery, CtfTextBlockQueryVariables>(CtfTextBlockDocument, variables, options);
