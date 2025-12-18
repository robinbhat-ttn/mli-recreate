import * as Types from '../../__generated/graphql.types';

import { AssetFieldsFragment } from '../../../components/features/ctf-components/ctf-asset/__generated/ctf-asset.generated';
import { AssetFieldsFragmentDoc } from '../../../components/features/ctf-components/ctf-asset/__generated/ctf-asset.generated';
export type LinkFieldsFragment = { __typename: 'Link', linkHeading?: string | null, linkSubHeading?: string | null, linkUrl?: string | null, slug?: string | null, sys: { __typename?: 'Sys', id: string }, icon?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null };


export const LinkFieldsFragmentDoc = `
    fragment LinkFields on Link {
  __typename
  sys {
    id
  }
  linkHeading
  linkSubHeading
  linkUrl
  slug
  icon {
    ...AssetFields
  }
}
    `;