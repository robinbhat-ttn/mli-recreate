import { Drawer, Theme } from '@mui/material';
import { styled } from '@mui/material/styles';

import { NavigationFieldsFragment } from '@src/components/features/ctf-components/ctf-navigation/__generated/ctf-navigation.generated';
import { Link } from '@src/components/shared/link';

const Menu = styled('ul')(({ theme }: { theme: Theme }) => ({
  listStyle: 'none',
  margin: 0,
  padding: theme.spacing(4, 8),
}));

const MenuItem = styled('li')({
  cursor: 'default',
  display: 'block',
  fontSize: '2.1rem',
  lineHeight: '1.8',
  position: 'relative',
  '& a': {
    cursor: 'pointer',
  },
});

const Submenu = styled('ul')(({ theme }: { theme: Theme }) => ({
  borderLeft: '1px solid #eee',
  listStyle: 'none',
  padding: theme.spacing(0, 0, 0, 2),
}));

interface MobileMenuPropsInterface extends NavigationFieldsFragment {
  isOpen?: boolean;
  onOpenChange: (isOpen: boolean) => any;
}

export const CtfMobileMenu = (props: MobileMenuPropsInterface) => {
  const { isOpen, onOpenChange } = props;

  const onCloseClick = (e, reason) => {
    if (reason === 'backdropClick') {
      onOpenChange(false);
    }
  };

  const mobileMenuContent = props;

  const renderMobileMenuLinks = menuGroup => {
    return menuGroup?.items?.map(menuItem => {
      const href = menuItem?.mainLink?.linkUrl;
      const linkText = menuItem?.mainLink?.linkHeading;
      return (
        <MenuItem key={menuItem.sys.id}>
          <Link href={href}>{linkText}</Link>
        </MenuItem>
      );
    });
  };

  return (
    <Drawer
      open={isOpen}
      anchor="right"
      onClose={onCloseClick}
      role="dialog"
      id="mobile-menu"
      aria-modal={true}
    >
      {mobileMenuContent?.items.length && (
        <nav role="navigation">
          <Menu>
            {mobileMenuContent.items.map(
              menuItem =>
                menuItem && (
                  <MenuItem key={menuItem.sys.id}>
                    {!menuItem.navigationLink ? (
                      menuItem.navigationTitle
                    ) : (
                      <Link href={`/${menuItem.navigationLink}`}>{menuItem.navigationTitle}</Link>
                    )}
                    {!menuItem.navigationLink && menuItem.subNavigationMenuCollection && (
                      <Submenu>
                        {renderMobileMenuLinks(menuItem.subNavigationMenuCollection)}
                      </Submenu>
                    )}
                  </MenuItem>
                ),
            )}
          </Menu>
        </nav>
      )}
    </Drawer>
  );
};
