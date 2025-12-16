import { styled } from '@mui/material/styles';
import React from 'react';

import { AssetFieldsFragment } from '@src/components/features/ctf-components/ctf-asset/__generated/ctf-asset.generated';

const VideoElement = styled('video')({
  width: '100%',
});

const Caption = styled('p')({
  color: '#797979',
  fontSize: '1.8rem',
  fontStyle: 'italic',
  lineHeight: 1.389,
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '4.7rem',
  maxWidth: '77rem',
  textAlign: 'center',
});

interface CtfVideoPropsInterface extends AssetFieldsFragment {
  showDescription?: boolean;
  autoplay?: boolean;
  className?: string;
}

export const CtfVideo = (props: CtfVideoPropsInterface) => {
  const { description, url, showDescription, autoplay, className } = props;

  return (
    <div className={className}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <VideoElement src={url!} autoPlay={autoplay} controls />
      {showDescription && <Caption>{description}</Caption>}
    </div>
  );
};
