import Menu from '@mui/icons-material/Menu';
import { AppBar, Container, IconButton, Theme, Toolbar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';

//import { CtfNavigationGql } from '@src/components/features/ctf-components/ctf-navigation/ctf-navigation-gql';
import { Link } from '@src/components/shared/link';
import Logo from '@src/icons/mli-logo.svg';
import { HEADER_HEIGHT, HEADER_HEIGHT_MD, CONTAINER_WIDTH } from '@src/theme';

const StyledAppBar = styled(AppBar)({
  boxShadow: '0 2px 6px #00000021',
});

const ToolbarContent = styled(Container)(({ theme }: { theme: Theme }) => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  justifyContent: 'space-between',
  maxWidth: `${CONTAINER_WIDTH / 10}rem`,
  [theme.breakpoints.up('md')]: {
    height: HEADER_HEIGHT,
  },
}));

const CorporateLogo = styled(Logo)({
  display: 'block',
  height: 'auto',
  width: '113px',
});

const MenuWrapper = styled('div')({
  alignItems: 'center',
  display: 'flex',
});

interface HeaderPropsInterface {
  isMenuOpen?: boolean;
  onMenuClick?: () => any;
}

export const Header = (props: HeaderPropsInterface) => {
  const { t } = useTranslation();

  const { onMenuClick, isMenuOpen } = props;

  return (
    <StyledAppBar position="sticky" color="secondary">
      <Toolbar>
        <ToolbarContent disableGutters maxWidth={false}>
          <Link href="/" withoutMaterial title={t('common.homepage')}>
            <CorporateLogo />
          </Link>
          <Box display={{ xs: 'none', md: 'block' }}>
            <MenuWrapper>{/* <CtfNavigationGql /> */}</MenuWrapper>
          </Box>
        </ToolbarContent>

        {/* menu button */}
        <Box display={{ md: 'none' }}>
          <IconButton
            title={t('navigation.mobileMenuButton')}
            onClick={() => onMenuClick?.()}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-haspopup="dialog"
          >
            <Menu />
          </IconButton>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};
