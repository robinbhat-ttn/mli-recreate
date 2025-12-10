import Link from 'next/link';

import { LinkFieldsFragment } from './__generated/ctf-link.generated';

export const CtfLink = (props: LinkFieldsFragment) => {
  return (
    <Link href={props?.slug ?? props?.linkUrl ?? '/'} style={{ color: 'blue' }}>
      {props?.linkHeading}
    </Link>
  );
};
