import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { Box } from '@mui/material';
import React from 'react';

import { TextBlockFieldsFragment } from './__generated/ctf-text-block.generated';
import styles from './ctf-text-block.module.scss';

import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext';

const variationToCssClassMap: Record<string, string> = {
  Disclaimer: 'disclaimer',
  Default: 'default',
};

export const CtfTextBlock = ({ sys, body, variations }: TextBlockFieldsFragment) => {
  const inspectorMode = useContentfulInspectorMode();
  const isDisclaimer = variationToCssClassMap[variations ?? ''] === 'disclaimer';

  return (
    <Box
      //maxWidth="lg"
      // disableGutters={false}
      className={`container-sec ${isDisclaimer ? styles['disclaimer-wrapper'] : styles['life-insurance-wrapper']}`}
      sx={isDisclaimer ? { pt: 1 } : { p: 6 }}
      {...inspectorMode({ entryId: sys.id, fieldId: 'componentTextBlock' })}
    >
      {body && <CtfRichtext {...body} disableContainer={true} />}
    </Box>
  );
};
