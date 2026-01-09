import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { Box } from '@mui/material';
import React from 'react';

import { TextBlockFieldsFragment } from './__generated/ctf-text-block.generated';
import styles from './ctf-text-block.module.scss';

import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext';

const variationToCssClassMap: Record<string, string> = {
  Disclaimer: 'disclaimer-wrapper',
  Default: 'life-insurance-wrapper',
  'Term Insurance Page Form Text Block': 'form-text-block-wrapper',
  'Term Insurance Page Testimonial Carousel Text Block': 'testimonial-carousel-text-block',
};

export const CtfTextBlock = ({ sys, body, variations }: TextBlockFieldsFragment) => {
  const inspectorMode = useContentfulInspectorMode();
  const variationKey = variations && variationToCssClassMap[variations] ? variations : 'Default';
  const variationClassKey = variationToCssClassMap[variationKey];
  const variationClass = styles[variationClassKey];
  return (
    <Box
      className={`container-sec ${variationClass}`}
      //sx={isDisclaimer ? { pt: 1 } : { p: 6 }}
      {...inspectorMode({ entryId: sys.id, fieldId: 'componentTextBlock' })}
    >
      {body && <CtfRichtext {...body} disableContainer />}
    </Box>
  );
};
