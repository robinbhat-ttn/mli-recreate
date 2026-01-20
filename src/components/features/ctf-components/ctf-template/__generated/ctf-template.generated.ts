import * as Types from '../../../../../lib/__generated/graphql.types';

import { ComponentReferenceFields_Header_Fragment, ComponentReferenceFields_Footer_Fragment } from '../../../../../lib/shared-fragments/__generated/ctf-componentMap.generated';
import { ComponentReferenceFieldsFragmentDoc } from '../../../../../lib/shared-fragments/__generated/ctf-componentMap.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type TemplateFieldsFragment = { __typename: 'Template', sys: { __typename?: 'Sys', id: string }, header?: (
    { __typename?: 'Header' }
    & ComponentReferenceFields_Header_Fragment
  ) | null, footer?: (
    { __typename?: 'Footer' }
    & ComponentReferenceFields_Footer_Fragment
  ) | null };

export type CtfTemplateQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['String']['input']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type CtfTemplateQuery = { __typename?: 'Query', template?: (
    { __typename?: 'Template' }
    & TemplateFieldsFragment
  ) | null };


export const TemplateFieldsFragmentDoc = `
    fragment TemplateFields on Template {
  __typename
  sys {
    id
  }
  header {
    ...ComponentReferenceFields
  }
  footer {
    ...ComponentReferenceFields
  }
}
    `;
export const CtfTemplateDocument = `
    query CtfTemplate($id: String!, $locale: String, $preview: Boolean) {
  template(id: $id, locale: $locale, preview: $preview) {
    ...TemplateFields
  }
}
    ${TemplateFieldsFragmentDoc}
${ComponentReferenceFieldsFragmentDoc}`;

export const useCtfTemplateQuery = <
      TData = CtfTemplateQuery,
      TError = unknown
    >(
      variables: CtfTemplateQueryVariables,
      options?: Omit<UseQueryOptions<CtfTemplateQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CtfTemplateQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CtfTemplateQuery, TError, TData>(
      {
    queryKey: ['CtfTemplate', variables],
    queryFn: customFetcher<CtfTemplateQuery, CtfTemplateQueryVariables>(CtfTemplateDocument, variables),
    ...options
  }
    )};

useCtfTemplateQuery.getKey = (variables: CtfTemplateQueryVariables) => ['CtfTemplate', variables];


useCtfTemplateQuery.fetcher = (variables: CtfTemplateQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfTemplateQuery, CtfTemplateQueryVariables>(CtfTemplateDocument, variables, options);
