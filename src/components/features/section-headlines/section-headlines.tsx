import type { InspectorModeTags } from '@contentful/live-preview/dist/inspectorMode/types';
import { Theme, Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

import { Markdown } from '@src/components/features/markdown';

const ContainerCentered = styled('div')({
  textAlign: 'center',
});

const Headline = styled(Typography)({
  fontSize: '2.25rem',
  fontWeight: 600,
  lineHeight: 1.083,
});

const Subline = styled(Typography)(({ theme }: { theme: Theme }) => ({
  fontWeight: 400,
  lineHeight: 1.56,
  marginTop: theme.spacing(6),
  fontSize: '1.8rem',
  color: '#414D63',
}));

const Text = styled(Markdown)({
  '& p': {
    fontSize: '2.5rem',
    lineHeight: 1.52,
  },
});

interface SectionHeadlinesPropsInterface {
  headline?: string | null;
  headlineProps?: TypographyProps;
  headlineLivePreviewProps?: InspectorModeTags;
  subline?: string | null;
  sublineProps?: TypographyProps;
  sublineLivePreviewProps?: InspectorModeTags;
  body?: string | null;
  align?: 'center' | 'left';
  className?: string;
}

export const SectionHeadlines = (props: SectionHeadlinesPropsInterface) => {
  const {
    headline,
    headlineProps = {},
    headlineLivePreviewProps = {},
    subline,
    sublineProps = {},
    sublineLivePreviewProps = {},
    body,
    align = 'center',
    className = '',
  } = props;

  const computedHeadlineProps: TypographyProps & { component?: string } = {
    variant: 'h1',
    component: 'h2',
    ...headlineProps,
    ...headlineLivePreviewProps,
  };
  const computedSublineProps: TypographyProps = {
    variant: 'h3',
    ...sublineProps,
    ...sublineLivePreviewProps,
  };

  if (!headline && !subline && !body) {
    return null;
  }

  const WrapperComponent = align === 'center' ? ContainerCentered : 'div';

  return (
    <WrapperComponent className={className}>
      {headline && <Headline {...(computedHeadlineProps as any)}>{headline}</Headline>}
      {subline && <Subline {...(computedSublineProps as any)}>{subline}</Subline>}
      {body && <Text text={body} />}
    </WrapperComponent>
  );
};
