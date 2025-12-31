import * as Types from '../../../../../lib/__generated/graphql.types';

import { LinkFieldsFragment } from '../../../../../lib/shared-fragments/__generated/ctf-linkFragment.generated';
import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { LinkFieldsFragmentDoc } from '../../../../../lib/shared-fragments/__generated/ctf-linkFragment.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
export type NavigationFieldsFragment = { __typename?: 'HeaderNavigationItemsCollection', items: Array<{ __typename: 'NavigationItems', navigationTitle?: string | null, navigationLink?: string | null, sys: { __typename?: 'Sys', id: string }, subNavigationMenuCollection?: { __typename?: 'NavigationItemsSubNavigationMenuCollection', items: Array<{ __typename: 'SubNavigationItem', subNavigationItemTitle?: string | null, sys: { __typename?: 'Sys', id: string }, mainLink?: (
          { __typename?: 'Link' }
          & LinkFieldsFragment
        ) | null, secondaryLinksCollection?: { __typename?: 'SubNavigationItemSecondaryLinksCollection', items: Array<{ __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null } | null> } | null } | null> } | null } | null> };


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
          ...LinkFields
        }
        secondaryLinksCollection(limit: 5) {
          items {
            __typename
            sys {
              id
            }
            linkType
            linkHeading
            linkSubHeading
            pageLink {
              slug
            }
            linkUrl
          }
        }
      }
    }
  }
}
    `;