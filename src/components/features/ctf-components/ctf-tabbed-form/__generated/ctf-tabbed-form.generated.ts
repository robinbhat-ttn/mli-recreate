import * as Types from '../../../../../lib/__generated/graphql.types';

import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { LinkFieldsFragment } from '../../../../../lib/shared-fragments/__generated/ctf-linkFragment.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { LinkFieldsFragmentDoc } from '../../../../../lib/shared-fragments/__generated/ctf-linkFragment.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type FormFieldFieldsFragment = { __typename?: 'FormField', label?: string | null, placeholder?: string | null, name?: string | null, fieldType?: string | null, required?: boolean | null, conditionalRule?: any | null, validationRule?: any | null, options?: { __typename: 'OptionSet', items?: any | null, sys: { __typename?: 'Sys', id: string } } | null };

export type FieldCollectionFieldsFragment = { __typename?: 'FormFieldsCollection', items: Array<(
    { __typename: 'FormField', sys: { __typename?: 'Sys', id: string } }
    & FormFieldFieldsFragment
  ) | null> };

export type FormFieldsFragment = { __typename?: 'Form', formType?: string | null, title?: string | null, formId?: string | null, description?: { __typename?: 'FormDescription', json: any, links: { __typename?: 'FormDescriptionLinks', entries: { __typename?: 'FormDescriptionEntries', block: Array<
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
          | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
         | null> }, assets: { __typename?: 'FormDescriptionAssets', block: Array<(
          { __typename?: 'Asset' }
          & AssetFieldsFragment
        ) | null> } } } | null, fieldsCollection?: (
    { __typename?: 'FormFieldsCollection' }
    & FieldCollectionFieldsFragment
  ) | null, submitButton?: (
    { __typename?: 'Link' }
    & LinkFieldsFragment
  ) | null };

export type TabsFieldsFragment = { __typename: 'FormTab', sys: { __typename?: 'Sys', id: string }, tabLabel?: { __typename?: 'FormTabTabLabel', json: any, links: { __typename?: 'FormTabTabLabelLinks', entries: { __typename?: 'FormTabTabLabelEntries', block: Array<
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
          | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'NavigationItems', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'OptionSet', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Question', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'SubNavigationItem', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Template', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
         | null> }, assets: { __typename?: 'FormTabTabLabelAssets', block: Array<(
          { __typename?: 'Asset' }
          & AssetFieldsFragment
        ) | null> } } } | null, form?: (
    { __typename: 'Form', sys: { __typename?: 'Sys', id: string } }
    & FormFieldsFragment
  ) | null };

export type TabbedFormContainerFieldsFragment = { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string }, formImage?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null, tabsCollection?: { __typename?: 'TabbedFormContainerTabsCollection', items: Array<(
      { __typename?: 'FormTab' }
      & TabsFieldsFragment
    ) | null> } | null };

export type CtfTabbedFormContainerQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfTabbedFormContainerQuery = { __typename?: 'Query', tabbedFormContainer?: (
    { __typename?: 'TabbedFormContainer' }
    & TabbedFormContainerFieldsFragment
  ) | null };


export const FormFieldFieldsFragmentDoc = `
    fragment FormFieldFields on FormField {
  label
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
  conditionalRule
  validationRule
}
    `;
export const FieldCollectionFieldsFragmentDoc = `
    fragment FieldCollectionFields on FormFieldsCollection {
  items {
    __typename
    sys {
      id
    }
    ...FormFieldFields
  }
}
    `;
export const FormFieldsFragmentDoc = `
    fragment FormFields on Form {
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
  fieldsCollection {
    ...FieldCollectionFields
  }
  submitButton {
    ...LinkFields
  }
}
    `;
export const TabsFieldsFragmentDoc = `
    fragment TabsFields on FormTab {
  __typename
  sys {
    id
  }
  tabLabel {
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
  form {
    __typename
    sys {
      id
    }
    ...FormFields
  }
}
    `;
export const TabbedFormContainerFieldsFragmentDoc = `
    fragment TabbedFormContainerFields on TabbedFormContainer {
  __typename
  sys {
    id
  }
  formImage {
    ...AssetFields
  }
  tabsCollection(limit: 3) {
    items {
      ...TabsFields
    }
  }
}
    `;
export const CtfTabbedFormContainerDocument = `
    query CtfTabbedFormContainer($id: String!, $locale: String, $preview: Boolean) {
  tabbedFormContainer(id: $id, locale: $locale, preview: $preview) {
    ...TabbedFormContainerFields
  }
}
    ${TabbedFormContainerFieldsFragmentDoc}
${AssetFieldsFragmentDoc}
${TabsFieldsFragmentDoc}
${FormFieldsFragmentDoc}
${FieldCollectionFieldsFragmentDoc}
${FormFieldFieldsFragmentDoc}
${LinkFieldsFragmentDoc}`;

export const useCtfTabbedFormContainerQuery = <
      TData = CtfTabbedFormContainerQuery,
      TError = unknown
    >(
      variables: CtfTabbedFormContainerQueryVariables,
      options?: Omit<UseQueryOptions<CtfTabbedFormContainerQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CtfTabbedFormContainerQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CtfTabbedFormContainerQuery, TError, TData>(
      {
    queryKey: ['CtfTabbedFormContainer', variables],
    queryFn: customFetcher<CtfTabbedFormContainerQuery, CtfTabbedFormContainerQueryVariables>(CtfTabbedFormContainerDocument, variables),
    ...options
  }
    )};

useCtfTabbedFormContainerQuery.getKey = (variables: CtfTabbedFormContainerQueryVariables) => ['CtfTabbedFormContainer', variables];


useCtfTabbedFormContainerQuery.fetcher = (variables: CtfTabbedFormContainerQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfTabbedFormContainerQuery, CtfTabbedFormContainerQueryVariables>(CtfTabbedFormContainerDocument, variables, options);
