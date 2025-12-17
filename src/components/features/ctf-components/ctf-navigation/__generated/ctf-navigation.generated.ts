import * as Types from '../../../../../lib/__generated/graphql.types';

import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
export type NavigationFieldsFragment = { __typename?: 'HeaderNavigationItemsCollection', items: Array<{ __typename: 'NavigationItems', navigationTitle?: string | null, navigationLink?: string | null, sys: { __typename?: 'Sys', id: string }, subNavigationMenuCollection?: { __typename?: 'NavigationItemsSubNavigationMenuCollection', items: Array<{ __typename: 'SubNavigationItem', subNavigationItemTitle?: string | null, sys: { __typename?: 'Sys', id: string }, mainLink?: { __typename: 'Link', linkHeading?: string | null, linkUrl?: string | null, slug?: string | null, sys: { __typename?: 'Sys', id: string }, icon?: (
            { __typename?: 'Asset' }
            & AssetFieldsFragment
          ) | null } | null, secondaryLinksCollection?: { __typename?: 'SubNavigationItemSecondaryLinksCollection', items: Array<{ __typename: 'Link', linkHeading?: string | null, linkUrl?: string | null, slug?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | null> } | null } | null> };


export const NavigationFieldsFragmentDoc = `
    fragment NavigationFields on HeaderNavigationItemsCollection {
  items {
    __typename
    sys {
      id
    }
    navigationTitle
    navigationLink
    subNavigationMenuCollection {
      items {
        __typename
        sys {
          id
        }
        subNavigationItemTitle
        mainLink {
          __typename
          sys {
            id
          }
          linkHeading
          linkUrl
          slug
          icon {
            ...AssetFields
          }
        }
        secondaryLinksCollection(limit: 10) {
          items {
            __typename
            sys {
              id
            }
            linkHeading
            linkUrl
            slug
          }
        }
      }
    }
  }
}
    `;