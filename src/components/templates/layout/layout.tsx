import { CssBaseline, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { ReactElement } from 'react';

//import { CtfMobileMenuGql } from '@src/components/features/ctf-components/ctf-mobile-menu/ctf-mobile-menu-gql';

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    ...theme.typography.body1,
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

interface LayoutPropsInterface {
  preview: boolean;
  children: ReactElement[];
}

export const Layout: React.FC<LayoutPropsInterface> = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />

      {/* content */}
      <div className={classes.content}>{children}</div>
    </>
  );
};
