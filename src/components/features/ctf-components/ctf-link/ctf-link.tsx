import Link from 'next/link';

import { LinkFieldsFragment } from '../../../../lib/shared-fragments/__generated/ctf-linkFragment.generated';

export const CtfLink = (props: LinkFieldsFragment) => {
  return (
    <Link href={props?.slug ?? props?.linkUrl ?? '/'} style={{ color: 'blue' }}>
      {props?.linkHeading}
    </Link>
  );
};
