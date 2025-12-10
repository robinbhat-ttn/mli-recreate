import { Drawer } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { NavigationFieldsFragment } from '@src/components/features/ctf-components/ctf-navigation/__generated/ctf-navigation.generated';
import { Link } from '@src/components/shared/link';

const useStyles = makeStyles(theme => ({
  menu: {
    listStyle: 'none',
    margin: 0,
    padding: theme.spacing(4, 8),
  },
  menuItem: {
    cursor: 'default',
    display: 'block',
    fontSize: '2.1rem',
    lineHeight: '1.8',
    position: 'relative',

    a: {
      cursor: 'pointer',
    },
  },
  submenu: {
    borderLeft: '1px solid #eee',
    listStyle: 'none',
    padding: theme.spacing(0, 0, 0, 2),
  },
}));

interface MobileMenuPropsInterface extends NavigationFieldsFragment {
  isOpen?: boolean;
  onOpenChange: (isOpen: boolean) => any;
}

export const CtfMobileMenu = (props: MobileMenuPropsInterface) => {
  const classes = useStyles();

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
        <li key={menuItem.sys.id}>
          <Link href={href} className={classes.menuItem}>
            {linkText}
          </Link>
        </li>
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
          <ul className={classes.menu}>
            {mobileMenuContent.items.map(
              menuItem =>
                menuItem && (
                  <li key={menuItem.sys.id} className={classes.menuItem}>
                    {!menuItem.navigationLink ? (
                      menuItem.navigationTitle
                    ) : (
                      <Link href={`/${menuItem.navigationLink}`}>{menuItem.navigationTitle}</Link>
                    )}
                    {!menuItem.navigationLink && menuItem.subNavigationMenuCollection && (
                      <ul className={classes.submenu}>
                        {renderMobileMenuLinks(menuItem.subNavigationMenuCollection)}
                      </ul>
                    )}
                  </li>
                ),
            )}
          </ul>
        </nav>
      )}
    </Drawer>
  );
};
