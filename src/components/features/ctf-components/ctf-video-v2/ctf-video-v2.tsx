import { useContentfulInspectorMode } from '@contentful/live-preview/react';

import { VideoSectionFieldsFragment } from './__generated/ctf-video-v2.generated';
import styles from './ctf-video-v2.module.scss';

export const CtfVideoV2 = (props: VideoSectionFieldsFragment) => {
  const inspectorMode = useContentfulInspectorMode();
  return (
    <div
      className={`container-sec ${styles.videoContainer}`}
      {...inspectorMode({ entryId: props.sys.id, fieldId: 'videoSection' })}
    >
      <iframe
        src={`https://www.youtube.com/embed/${props.youtubeId}`}
        title={props.videoTitle ?? 'Video'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
};
