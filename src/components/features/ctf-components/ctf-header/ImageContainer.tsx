import Image from 'next/image';

import styles from './ctf-header.module.scss';
import type { AssetFieldsFragment } from '../ctf-asset/__generated/ctf-asset.generated';

export const ImageContainer = (props: AssetFieldsFragment) => {
  return (
    <div className={styles.logoContainer}>
      <Image
        src={props.url ?? ''}
        alt={props.title ?? ''}
        width={props.width ?? `${140}`}
        height={props.height ?? `${40}`}
      />
    </div>
  );
};
