import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { Theme } from '@mui/material';
import { styled } from '@mui/material/styles';

import { NavigationFieldsFragment } from './__generated/ctf-navigation.generated';

import { Link } from '@src/components/shared/link';

const Menu = styled('ul')({
  alignItems: 'center',
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

const Submenu = styled('ul')(({ theme }: { theme: Theme }) => ({
  backgroundColor: '#fff',
  boxShadow: '0 3px 6px #00000029',
  borderRadius: '14px',
  left: theme.spacing(10 * -1),
  listStyle: 'none',
  opacity: 0,
  padding: theme.spacing(4, 10),
  pointerEvents: 'none',
  position: 'absolute',
  top: 'calc(100% - 2rem)',
  transform: 'translateY(20%)',
  transition: 'all 0.3s ease-in-out',
}));

const MenuItem = styled('li')(({ theme }: { theme: Theme }) => ({
  alignItems: 'center',
  cursor: 'default',
  display: 'inline-flex',
  fontSize: '1.7rem',
  fontWeight: 400,
  height: '8rem',
  lineHeight: 1.9,
  marginRight: theme.spacing(8),
  position: 'relative',
  [theme.breakpoints.up('lg')]: {
    marginRight: theme.spacing(10),
  },
  '& a': {
    cursor: 'pointer',
    display: 'inline-block',
    transition: 'transform 0.2s ease-in-out',
  },
  '&:hover, &:focus, &:focus-within': {
    '& > a': {
      transform: 'translateY(-4px)',
    },
    [`& ${Submenu}`]: {
      opacity: 1,
      pointerEvents: 'all',
      transform: 'translateY(0)',
    },
  },
}));

const SubmenuItem = styled('li')({
  '&:hover, &:focus, &:focus-within': {
    '& > a': {
      transform: 'translateY(-4px)',
    },
  },
});

export const CtfNavigation = (props: NavigationFieldsFragment) => {
  const inspectorMode = useContentfulInspectorMode();

  const navigationContent = props;

  const renderNavigationLinks = (menuGroup, listClassName) => {
    return menuGroup?.items?.map(menuItem => {
      const href = menuItem?.mainLink?.linkUrl;
      const linkText = menuItem?.mainLink?.linkHeading;

      return (
        <SubmenuItem
          key={menuItem.sys.id}
          {...inspectorMode({
            entryId: menuItem.sys.id,
            fieldId: 'mainLink',
          })}
        >
          <Link href={href}>{linkText}</Link>
        </SubmenuItem>
      );
    });
  };

  return (
    <>
      {navigationContent?.items.length && (
        <nav role="navigation">
          <Menu>
            {navigationContent.items.map(
              menuItem =>
                menuItem && (
                  <MenuItem
                    key={menuItem.sys.id}
                    {...inspectorMode({
                      entryId: menuItem.sys.id,
                      fieldId: 'navigationTitle',
                    })}
                  >
                    {!menuItem.navigationLink ? (
                      menuItem.navigationTitle
                    ) : (
                      <Link href={`${menuItem.navigationLink}`}>{menuItem.navigationTitle}</Link>
                    )}
                    {!menuItem.navigationLink && menuItem.subNavigationMenuCollection && (
                      <Submenu>
                        {renderNavigationLinks(menuItem.subNavigationMenuCollection, SubmenuItem)}
                      </Submenu>
                    )}
                  </MenuItem>
                ),
            )}
          </Menu>
        </nav>
      )}
    </>
  );
};
