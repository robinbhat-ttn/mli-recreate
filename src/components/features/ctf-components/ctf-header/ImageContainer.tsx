import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import Image from 'next/image';

import styles from './ctf-header.module.css';
import type { AssetFieldsFragment } from '../ctf-asset/__generated/ctf-asset.generated';

export const ImageContainer = (props: AssetFieldsFragment) => {
  const inspectorMode = useContentfulInspectorMode();
  return (
    <div
      className={styles.imageContainer}
      {...inspectorMode({ entryId: props.sys.id, fieldId: 'logo' })}
    >
      <Image
        src={props.url ?? ''}
        alt={props.title ?? ''}
        width={props.width ?? `${140}`}
        height={props.height ?? `${40}`}
      />
    </div>
  );
};
