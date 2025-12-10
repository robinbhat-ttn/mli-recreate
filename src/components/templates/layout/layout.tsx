import { CssBaseline } from '@mui/material';
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
