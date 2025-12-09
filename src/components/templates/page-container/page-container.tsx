import { Box } from '@mui/material';
import React from 'react';

type Props = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode | React.ReactNode[];
};

export const PageContainer = (props: Props) => {
  return (
    <Box sx={{ width: '100%' }} className={props.className} style={props.style}>
      {props.children}
    </Box>
  );
};
