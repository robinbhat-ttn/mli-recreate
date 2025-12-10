import { Container } from '@mui/material';
import React from 'react';

import { TextBlockFieldsFragment } from './__generated/ctf-text-block.generated';

import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext';

const variationToCssClassMap: Record<string, string> = {
  Disclaimer: 'disclaimer',
  Default: 'default',
};

export const CtfTextBlock = ({ body, variations }: TextBlockFieldsFragment) => {
  const isDisclaimer = variationToCssClassMap[variations ?? ''] === 'disclaimer';

  return (
    <Container
      maxWidth="lg"
      disableGutters={false}
      className={isDisclaimer ? 'disclaimer-wrapper' : 'life-insurance-wrapper'}
      sx={isDisclaimer ? { p: 4, pt: 1 } : { p: 6 }}
    >
      {body && <CtfRichtext {...body} disableContainer={true} />}
    </Container>
  );
};
