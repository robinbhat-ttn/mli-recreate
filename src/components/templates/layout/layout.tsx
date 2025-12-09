import { CssBaseline, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { ReactElement } from 'react';
interface LayoutPropsInterface {
  preview: boolean;
  children: ReactElement[];
}

export const Layout: React.FC<LayoutPropsInterface> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      {/* content */}
      {children}
    </>
  );
};
