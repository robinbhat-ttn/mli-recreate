import { Theme, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import { SettingsForm } from '@src/components/features/settings/settings-form';
import SettingsIcon from '@src/icons/settings-icon.svg';

const ToggleButton = styled('button')(({ theme }: { theme: Theme }) => ({
  alignItems: 'center',
  appearance: 'none',
  backgroundColor: '#192737',
  border: 0,
  borderRadius: '50%',
  bottom: theme.spacing(3),
  boxShadow: '0 2px 6px rgba(0,0,0,0.29)',
  cursor: 'pointer',
  display: 'flex',
  height: '6rem',
  justifyContent: 'center',
  position: 'fixed',
  right: theme.spacing(3),
  width: '6rem',
  zIndex: 1130,
  [theme.breakpoints.up('md')]: {
    bottom: theme.spacing(9),
    right: theme.spacing(9),
  },
}));

const ToggleImage = styled(SettingsIcon)({
  display: 'block',
  transform: 'translateX(-1px)',
  width: '3rem',
});

const animationClasses = {
  enter: 'settings-animation-enter',
  enterActive: 'settings-animation-enter-active',
  exit: 'settings-animation-exit',
  exitActive: 'settings-animation-exit-active',
};

export const Settings = () => {
  const theme = useTheme();
  const [enabled, setEnabled] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    if (settingsOpen === false) {
      document.body.classList.remove('is-scroll-locked');
      return;
    }

    if (window.matchMedia(theme.breakpoints.up('md').replace('@media ', '')).matches === true) {
      return;
    }

    document.body.classList.add('is-scroll-locked');
  }, [settingsOpen, theme.breakpoints]);

  useEffect(() => {
    try {
      if (window.top?.location.href === window.location.href) {
        // Dont show the settings panel when embedded into an iframe (e.g. live preview)
        setEnabled(true);
      }
    } catch (err) {
      // window.top.location.href is not accessable for non same origin iframes
    }
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <CSSTransition in={settingsOpen} unmountOnExit timeout={300} classNames={animationClasses}>
        <SettingsForm
          onClose={() => {
            setSettingsOpen(false);
          }}
        />
      </CSSTransition>
      <ToggleButton
        type="button"
        onClick={() => {
          setSettingsOpen(open => !open);
        }}
        title="Toggle editorial toolbox"
      >
        <ToggleImage />
      </ToggleButton>
    </>
  );
};
