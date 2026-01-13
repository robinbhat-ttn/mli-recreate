import * as Types from '../../../../../lib/__generated/graphql.types';

import { ComponentReferenceFields_Accordion_Fragment, ComponentReferenceFields_Banner_Fragment, ComponentReferenceFields_Button_Fragment, ComponentReferenceFields_ButtonWithLinks_Fragment, ComponentReferenceFields_Card_Fragment, ComponentReferenceFields_Carousel_Fragment, ComponentReferenceFields_ComponentTextBlock_Fragment, ComponentReferenceFields_Disclaimer_Fragment, ComponentReferenceFields_Footer_Fragment, ComponentReferenceFields_Form_Fragment, ComponentReferenceFields_FormField_Fragment, ComponentReferenceFields_FormTab_Fragment, ComponentReferenceFields_FormWrapper_Fragment, ComponentReferenceFields_HamburgerMenu_Fragment, ComponentReferenceFields_Header_Fragment, ComponentReferenceFields_Link_Fragment, ComponentReferenceFields_NavigationItems_Fragment, ComponentReferenceFields_OptionSet_Fragment, ComponentReferenceFields_Page_Fragment, ComponentReferenceFields_Question_Fragment, ComponentReferenceFields_Seo_Fragment, ComponentReferenceFields_SubNavigationItem_Fragment, ComponentReferenceFields_TabbedFormContainer_Fragment, ComponentReferenceFields_VideoSection_Fragment } from '../../../../../lib/shared-fragments/__generated/ctf-componentMap.generated';
import { LinkFieldsFragment } from '../../../../../lib/shared-fragments/__generated/ctf-linkFragment.generated';
import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { ComponentReferenceFieldsFragmentDoc } from '../../../../../lib/shared-fragments/__generated/ctf-componentMap.generated';
import { LinkFieldsFragmentDoc } from '../../../../../lib/shared-fragments/__generated/ctf-linkFragment.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type AccordionCollectionFieldsFragment = { __typename?: 'AccordionAccordionItemsCollection', items: Array<{ __typename: 'Question', questionText?: string | null, sys: { __typename?: 'Sys', id: string }, answerText?: { __typename?: 'QuestionAnswerText', json: any, links: { __typename?: 'QuestionAnswerTextLinks', entries: { __typename?: 'QuestionAnswerTextEntries', block: Array<
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
              { __typename?: 'Seo' }
              & ComponentReferenceFields_Seo_Fragment
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
              { __typename?: 'Link' }
              & ComponentReferenceFields_Link_Fragment
              & LinkFieldsFragment
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
              { __typename?: 'Seo' }
              & ComponentReferenceFields_Seo_Fragment
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
              { __typename?: 'VideoSection' }
              & ComponentReferenceFields_VideoSection_Fragment
            )
           | null> }, assets: { __typename?: 'QuestionAnswerTextAssets', block: Array<(
            { __typename?: 'Asset' }
            & AssetFieldsFragment
          ) | null> } } } | null } | null> };

export type AccordionFieldsFragment = { __typename: 'Accordion', sys: { __typename?: 'Sys', id: string }, accordionItemsCollection?: (
    { __typename?: 'AccordionAccordionItemsCollection' }
    & AccordionCollectionFieldsFragment
  ) | null };

export type CtfAccordionQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfAccordionQuery = { __typename?: 'Query', accordion?: (
    { __typename?: 'Accordion' }
    & AccordionFieldsFragment
  ) | null };


export const AccordionCollectionFieldsFragmentDoc = `
    fragment AccordionCollectionFields on AccordionAccordionItemsCollection {
  items {
    __typename
    sys {
      id
    }
    questionText
    answerText {
      json
      links {
        entries {
          block {
            ...ComponentReferenceFields
          }
          inline {
            ...ComponentReferenceFields
            ...LinkFields
          }
        }
        assets {
          block {
            ...AssetFields
          }
        }
      }
    }
  }
}
    `;
export const AccordionFieldsFragmentDoc = `
    fragment AccordionFields on Accordion {
  __typename
  sys {
    id
  }
  accordionItemsCollection(limit: 10) {
    ...AccordionCollectionFields
  }
}
    `;
export const CtfAccordionDocument = `
    query CtfAccordion($id: String!, $locale: String, $preview: Boolean) {
  accordion(id: $id, locale: $locale, preview: $preview) {
    ...AccordionFields
  }
}
    ${AccordionFieldsFragmentDoc}
${AccordionCollectionFieldsFragmentDoc}
${ComponentReferenceFieldsFragmentDoc}
${LinkFieldsFragmentDoc}
${AssetFieldsFragmentDoc}`;

export const useCtfAccordionQuery = <
      TData = CtfAccordionQuery,
      TError = unknown
    >(
      variables: CtfAccordionQueryVariables,
      options?: Omit<UseQueryOptions<CtfAccordionQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CtfAccordionQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CtfAccordionQuery, TError, TData>(
      {
    queryKey: ['CtfAccordion', variables],
    queryFn: customFetcher<CtfAccordionQuery, CtfAccordionQueryVariables>(CtfAccordionDocument, variables),
    ...options
  }
    )};

useCtfAccordionQuery.getKey = (variables: CtfAccordionQueryVariables) => ['CtfAccordion', variables];


useCtfAccordionQuery.fetcher = (variables: CtfAccordionQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfAccordionQuery, CtfAccordionQueryVariables>(CtfAccordionDocument, variables, options);
