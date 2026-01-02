import * as Types from '../../../../lib/__generated/graphql.types';

export type PageLinkFieldsFragment = { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, contentCollection?: { __typename?: 'PageContentCollection', items: Array<
      | { __typename: 'Accordion', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'Banner', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'Button', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'Carousel', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'Form', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'Link', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'TabbedFormContainer', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'VideoSection', sys: { __typename?: 'Sys', id: string } }
     | null> } | null };


export const PageLinkFieldsFragmentDoc = `
    fragment PageLinkFields on Page {
  __typename
  slug
  sys {
    id
  }
  pageName
  contentCollection(locale: $locale, preview: $preview) {
    items {
      ... on Entry {
        __typename
        sys {
          id
        }
      }
    }
  }
}
    `;