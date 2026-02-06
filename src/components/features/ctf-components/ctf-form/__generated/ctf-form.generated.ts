import * as Types from '../../../../../lib/__generated/graphql.types';

import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { ComponentReferenceFields_Accordion_Fragment, ComponentReferenceFields_Banner_Fragment, ComponentReferenceFields_Button_Fragment, ComponentReferenceFields_ButtonWithLinks_Fragment, ComponentReferenceFields_Card_Fragment, ComponentReferenceFields_Carousel_Fragment, ComponentReferenceFields_ComponentTextBlock_Fragment, ComponentReferenceFields_Disclaimer_Fragment, ComponentReferenceFields_Footer_Fragment, ComponentReferenceFields_Form_Fragment, ComponentReferenceFields_FormField_Fragment, ComponentReferenceFields_FormTab_Fragment, ComponentReferenceFields_FormWrapper_Fragment, ComponentReferenceFields_HamburgerMenu_Fragment, ComponentReferenceFields_Header_Fragment, ComponentReferenceFields_Journey_Fragment, ComponentReferenceFields_Link_Fragment, ComponentReferenceFields_NavigationItems_Fragment, ComponentReferenceFields_OptionSet_Fragment, ComponentReferenceFields_Page_Fragment, ComponentReferenceFields_Question_Fragment, ComponentReferenceFields_SubNavigationItem_Fragment, ComponentReferenceFields_TabbedFormContainer_Fragment, ComponentReferenceFields_Template_Fragment, ComponentReferenceFields_VideoSection_Fragment } from '../../../../../lib/shared-fragments/__generated/ctf-componentMap.generated';
import { LinkFieldsFragment } from '../../../../../lib/shared-fragments/__generated/ctf-linkFragment.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { ComponentReferenceFieldsFragmentDoc } from '../../../../../lib/shared-fragments/__generated/ctf-componentMap.generated';
import { LinkFieldsFragmentDoc } from '../../../../../lib/shared-fragments/__generated/ctf-linkFragment.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type ExpandedFormFieldFragmentFragment = { __typename?: 'FormField', label?: string | null, subLabel?: string | null, placeholder?: string | null, name?: string | null, fieldType?: string | null, required?: boolean | null, bottomText?: string | null, conditionalRule?: any | null, validationRule?: any | null, icon?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null, popUp?: { __typename?: 'FormFieldPopUp', json: any, links: { __typename?: 'FormFieldPopUpLinks', entries: { __typename?: 'FormFieldPopUpEntries', block: Array<
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
         | null> }, assets: { __typename?: 'FormFieldPopUpAssets', block: Array<(
          { __typename?: 'Asset' }
          & AssetFieldsFragment
        ) | null> } } } | null, options?: { __typename: 'OptionSet', items?: any | null, sys: { __typename?: 'Sys', id: string } } | null };

export type ExpandedFormFieldsFragment = { __typename?: 'Form', formType?: string | null, title?: string | null, formId?: string | null, description?: { __typename?: 'FormDescription', json: any, links: { __typename?: 'FormDescriptionLinks', entries: { __typename?: 'FormDescriptionEntries', block: Array<
          | { __typename: 'Accordion', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Banner', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Button', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ButtonWithLinks', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Card', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Carousel', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Disclaimer', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Footer', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Form', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'FormField', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'FormTab', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'FormWrapper', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'HamburgerMenu', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Journey', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
         | null> }, assets: { __typename?: 'FormDescriptionAssets', block: Array<(
          { __typename?: 'Asset' }
          & AssetFieldsFragment
        ) | null> } } } | null, fieldsCollection?: { __typename?: 'FormFieldsCollection', items: Array<(
      { __typename: 'FormField', sys: { __typename?: 'Sys', id: string } }
      & ExpandedFormFieldFragmentFragment
    ) | null> } | null, submitButton?: (
    { __typename?: 'Link' }
    & LinkFieldsFragment
  ) | null };

export type CtfFormQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfFormQuery = { __typename?: 'Query', form?: (
    { __typename?: 'Form' }
    & ExpandedFormFieldsFragment
  ) | null };


export const ExpandedFormFieldFragmentFragmentDoc = `
    fragment ExpandedFormFieldFragment on FormField {
  label
  subLabel
  icon {
    ...AssetFields
  }
  popUp {
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
  placeholder
  name
  fieldType
  required
  options {
    __typename
    sys {
      id
    }
    items
  }
  bottomText
  conditionalRule
  validationRule
}
    `;
export const ExpandedFormFieldsFragmentDoc = `
    fragment ExpandedFormFields on Form {
  formType
  title
  description {
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
          ...AssetFields
        }
      }
    }
  }
  formId
  fieldsCollection(limit: 9) {
    items {
      __typename
      sys {
        id
      }
      ...ExpandedFormFieldFragment
    }
  }
  submitButton {
    ...LinkFields
  }
}
    `;
export const CtfFormDocument = `
    query CtfForm($id: String!, $locale: String, $preview: Boolean) {
  form(id: $id, locale: $locale, preview: $preview) {
    ...ExpandedFormFields
  }
}
    ${ExpandedFormFieldsFragmentDoc}
${AssetFieldsFragmentDoc}
${ExpandedFormFieldFragmentFragmentDoc}
${ComponentReferenceFieldsFragmentDoc}
${LinkFieldsFragmentDoc}`;

export const useCtfFormQuery = <
      TData = CtfFormQuery,
      TError = unknown
    >(
      variables: CtfFormQueryVariables,
      options?: Omit<UseQueryOptions<CtfFormQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CtfFormQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CtfFormQuery, TError, TData>(
      {
    queryKey: ['CtfForm', variables],
    queryFn: customFetcher<CtfFormQuery, CtfFormQueryVariables>(CtfFormDocument, variables),
    ...options
  }
    )};

useCtfFormQuery.getKey = (variables: CtfFormQueryVariables) => ['CtfForm', variables];


useCtfFormQuery.fetcher = (variables: CtfFormQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfFormQuery, CtfFormQueryVariables>(CtfFormDocument, variables, options);
