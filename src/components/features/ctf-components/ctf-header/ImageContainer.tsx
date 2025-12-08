import { AssetFieldsFragment } from '../ctf-asset/__generated/ctf-asset.generated';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import styles from './ctf-header.module.css';
import Image from 'next/image';

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
