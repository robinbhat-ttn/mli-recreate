import Image from 'next/image';
import Link from 'next/link';

import styles from './ctf-header.module.scss';
import type { AssetFieldsFragment } from '../ctf-asset/__generated/ctf-asset.generated';

export const ImageContainer = (props: AssetFieldsFragment) => {
  return (
    <div className={styles.logoContainer}>
      <Link href={'/'}>
        <Image
          src={props.url ?? ''}
          alt={props.title ?? ''}
          width={props.width ?? `${140}`}
          height={props.height ?? `${40}`}
        />
      </Link>
    </div>
  );
};
