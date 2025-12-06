import { LinkFieldsFragment } from './__generated/ctf-link.generated';
import Link from 'next/link';

export const CtfLink = (props: LinkFieldsFragment) => {
  return (
    <Link href={props?.slug ?? props?.linkHeading ?? '/'} style={{ color: 'blue' }}>
      {props?.linkHeading}
    </Link>
  );
};
