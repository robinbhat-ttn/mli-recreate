import * as Types from '../../__generated/graphql.types';

import { AssetFieldsFragment } from '../../../components/features/ctf-components/ctf-asset/__generated/ctf-asset.generated';
import { AssetFieldsFragmentDoc } from '../../../components/features/ctf-components/ctf-asset/__generated/ctf-asset.generated';
export type LinkFieldsFragment = { __typename: 'Link', linkType?: string | null, linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, sys: { __typename?: 'Sys', id: string }, pageLink?: { __typename?: 'Page', slug?: string | null } | null, icon?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null };


export const LinkFieldsFragmentDoc = `
    fragment LinkFields on Link {
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
  icon {
    ...AssetFields
  }
}
    `;