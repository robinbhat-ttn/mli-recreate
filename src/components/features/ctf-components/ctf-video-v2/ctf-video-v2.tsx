import { useContentfulInspectorMode } from '@contentful/live-preview/react';

import { VideoSectionFieldsFragment } from './__generated/ctf-video-v2.generated';
import styles from './ctf-video-v2.module.scss';
import { useState } from 'react';

export const CtfVideoV2 = (props: VideoSectionFieldsFragment) => {
  const inspectorMode = useContentfulInspectorMode();
  const [isPlaying, setIsPlaying] = useState(false);
  const { youtubeId, videoTitle } = props;
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  const videoUrl = `https://www.youtube.com/embed/${props.youtubeId}?autoplay=1`;
  return (
    <div
      className={`container-sec ${styles.videoContainer}`}
      {...inspectorMode({ entryId: props.sys.id, fieldId: 'videoSection' })}
    >
      {!isPlaying ? (
        <button
          type="button"
          className={styles.ytLiteButton}
          onClick={() => setIsPlaying(true)}
          aria-label="Play video"
        >
          <img
            src={thumbnailUrl}
            alt="Video thumbnail"
            loading="lazy"
            className={styles.ytLiteThumb}
          />
          <span className={styles.ytLitePlayIcon} aria-hidden="true" />
        </button>
      ) : (
        <iframe
          src={videoUrl}
          title={props.videoTitle ?? 'Video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      )}
    </div>
  );
};
