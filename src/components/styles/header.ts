import { Box, Container, styled } from '@mui/material';

export const Header = styled('header')(({ theme }) => ({
  transition: '0.3s linear',
  backgroundColor: theme.palette.background.paper,
  height: '60px',
  position: 'relative',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',

  '@media (min-width: 992px)': {
    color: theme.palette.text.primary,
    height: '55px',
  },
}));

export const NavBar = styled(Container)(() => ({
  width: '100%',
  height: '100%',
  display: 'grid',
  placeItems: 'center',
  position: 'relative',
  zIndex: 999,

  '@media (min-width: 992px)': {
    height: '53px',
    display: 'grid',
    gridTemplateColumns: '2fr 2fr',
    position: 'relative',
    zIndex: 5,
  },
}));

export const NavButton = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '50px',
  color: theme.palette.text.primary,
  fontSize: '35px',
  display: 'grid',
  placeItems: 'center',

  '@media (min-width: 992px)': {
    display: 'none',
  },
}));

export const BurgerButton = styled(Box)(({ theme }) => ({
  height: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '.burger-button': {
    height: '3px',
    width: '35px',
    backgroundColor: theme.palette.text.primary,
    borderRadius: '20px',
    transition: '0.3s',

    '&.ativo': {
      '&:nth-of-type(1)': {
        transform: 'rotate(40deg) translate(9px, 9px)',
      },
      '&:nth-of-type(2)': {
        opacity: 0,
      },
      '&:nth-of-type(3)': {
        transform: 'rotate(-40deg) translate(9px, -9px)',
      },
    },
  },
}));

export const TitleContainer = styled(Box)(() => ({
  height: '100%',
  display: 'grid',
  placeItems: 'center',
  fontSize: '28px',
  userSelect: 'none',
  cursor: 'pointer',

  '@media (min-width: 992px)': {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: '28px',
    userSelect: 'none',
    width: '100%',
  },
}));

export const MenuMobile = styled(Box)(() => ({
  position: 'fixed',
  left: '-1200px',
  bottom: '0px',
  zIndex: 1,
  width: '100%',
  height: '100vh',
  transition: '0.3s linear',
  display: 'grid',

  '@media (min-width: 992px)': {
    display: 'none',
  },

  '&.ativo': {
    left: '0px',
    bottom: '0px',
  },
}));

export const MenuContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  position: 'relative',
}));
