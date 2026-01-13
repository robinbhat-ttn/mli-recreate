import * as Types from '../../../../../lib/__generated/graphql.types';

import { FormFieldsFragment, FieldCollectionFieldsFragment, FormFieldFieldsFragment } from '../../ctf-tabbed-form/__generated/ctf-tabbed-form.generated';
import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { LinkFieldsFragment } from '../../../../../lib/shared-fragments/__generated/ctf-linkFragment.generated';
import { FormFieldsFragmentDoc, FieldCollectionFieldsFragmentDoc, FormFieldFieldsFragmentDoc } from '../../ctf-tabbed-form/__generated/ctf-tabbed-form.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { LinkFieldsFragmentDoc } from '../../../../../lib/shared-fragments/__generated/ctf-linkFragment.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type FormWrapperFieldsFragment = { __typename?: 'FormWrapper', internalName?: string | null, sys: { __typename?: 'Sys', id: string }, formsCollection?: { __typename?: 'FormWrapperFormsCollection', items: Array<(
      { __typename?: 'Form' }
      & FormFieldsFragment
    ) | null> } | null };

export type CtfFormWrapperQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfFormWrapperQuery = { __typename?: 'Query', formWrapper?: (
    { __typename?: 'FormWrapper' }
    & FormWrapperFieldsFragment
  ) | null };


export const FormWrapperFieldsFragmentDoc = `
    fragment FormWrapperFields on FormWrapper {
  sys {
    id
  }
  internalName
  formsCollection(limit: 5) {
    items {
      ...FormFields
    }
  }
}
    `;
export const CtfFormWrapperDocument = `
    query CtfFormWrapper($id: String!, $locale: String, $preview: Boolean) {
  formWrapper(id: $id, locale: $locale, preview: $preview) {
    ...FormWrapperFields
  }
}
    ${FormWrapperFieldsFragmentDoc}
${FormFieldsFragmentDoc}
${AssetFieldsFragmentDoc}
${FieldCollectionFieldsFragmentDoc}
${FormFieldFieldsFragmentDoc}
${LinkFieldsFragmentDoc}`;

export const useCtfFormWrapperQuery = <
      TData = CtfFormWrapperQuery,
      TError = unknown
    >(
      variables: CtfFormWrapperQueryVariables,
      options?: Omit<UseQueryOptions<CtfFormWrapperQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CtfFormWrapperQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CtfFormWrapperQuery, TError, TData>(
      {
    queryKey: ['CtfFormWrapper', variables],
    queryFn: customFetcher<CtfFormWrapperQuery, CtfFormWrapperQueryVariables>(CtfFormWrapperDocument, variables),
    ...options
  }
    )};

useCtfFormWrapperQuery.getKey = (variables: CtfFormWrapperQueryVariables) => ['CtfFormWrapper', variables];


useCtfFormWrapperQuery.fetcher = (variables: CtfFormWrapperQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfFormWrapperQuery, CtfFormWrapperQueryVariables>(CtfFormWrapperDocument, variables, options);
