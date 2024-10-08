import { Box, Container, styled } from '@mui/material';

export const WelcomeContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '@media (min-width: 992px)': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
}));

export const WelcomeInformation = styled(Box)(() => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: '200px',

  '@media (min-width: 992px)': {
    textAlign: 'start',
  },
}));

export const DeveloperIlustration = styled(Box)(() => ({
  position: 'relative',
  display: 'none',
  justifyContent: 'end',
  alignItems: 'center',
  marginBottom: '80px',

  'img, .svg': {
    display: 'flex',
    position: 'relative',
    zIndex: 3,
    width: '80%',
    height: '100%',

    '@media (max-width: 500px)': {
      margin: '0 auto',
    },
  },

  '@media (min-width: 992px)': {
    display: 'flex',
  },
}));
