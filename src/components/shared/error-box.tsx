import { Theme, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string;
  children?: any;
}

const ErrorBoxRoot = styled('div')(({ theme }: { theme: Theme }) => ({
  color: theme.palette.error.dark,
  border: `1px solid ${theme.palette.error.dark}`,
  padding: theme.spacing(1),
  margin: theme.spacing(12, 0),
}));

export const ErrorBox = (props: Props) => {
  return (
    <ErrorBoxRoot className={clsx(props.className)}>
      <Typography variant="body1">{props.children}</Typography>
    </ErrorBoxRoot>
  );
};
