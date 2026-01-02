import * as Types from '../../../../../lib/__generated/graphql.types';

import { FormFieldsFragment, FieldCollectionFieldsFragment, FormFieldFieldsFragment } from '../../ctf-tabbed-form/__generated/ctf-tabbed-form.generated';
import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { LinkFieldsFragment } from '../../../../../lib/shared-fragments/__generated/ctf-linkFragment.generated';
import { FormFieldsFragmentDoc, FieldCollectionFieldsFragmentDoc, FormFieldFieldsFragmentDoc } from '../../ctf-tabbed-form/__generated/ctf-tabbed-form.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { LinkFieldsFragmentDoc } from '../../../../../lib/shared-fragments/__generated/ctf-linkFragment.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type CtfFormQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfFormQuery = { __typename?: 'Query', form?: (
    { __typename?: 'Form' }
    & FormFieldsFragment
  ) | null };



export const CtfFormDocument = `
    query CtfForm($id: String!, $locale: String, $preview: Boolean) {
  form(id: $id, locale: $locale, preview: $preview) {
    ...FormFields
  }
}
    ${FormFieldsFragmentDoc}
${AssetFieldsFragmentDoc}
${FieldCollectionFieldsFragmentDoc}
${FormFieldFieldsFragmentDoc}
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
