import { Box, styled } from '@mui/material';

export const MenuLine = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '2px',
  backgroundColor: theme.palette.primary.dark,
}));

export const MenuMobileLine = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '0',
  width: '100%',
  height: '2px',
  backgroundColor: theme.palette.primary.dark,
  display: 'grid',
  placeItems: 'center',
}));

export const SeparatorSkillDescription = styled(Box)(({ theme }) => ({
  width: '1px',
  height: '90%',
  marginTop: '25px',
  backgroundColor: theme.palette.text.disabled,
  display: 'none',

  '@media (min-width: 992px)': {
    display: 'block',
  },
}));

export const SeparatorAboutMe = styled(Box)(({ theme }) => ({
  display: 'none',

  '@media (min-width: 992px)': {
    gridRow: '1/3',
    gridColumn: '2',

    content: '""',
    display: 'block',
    backgroundColor: theme.palette.text.disabled,
    width: '1px',
  },
}));

export const SeparatorProjectDetails = styled(Box)(({ theme }) => ({
  display: 'none',
  gridRow: '1/5',
  gridColumn: '2',
  backgroundColor: theme.palette.divider,
  width: '1px',
  height: '90%',

  '@media (min-width: 992px)': {
    display: 'block',
  },
}));

export const LoginLine = styled(Box)(({ theme }) => ({
  position: 'absolute',
  zIndex: 0,
  width: '2000px',
  height: '300px',
  backgroundColor: theme.palette.primary.dark,
  right: '-400px',
  bottom: '-400px',
  rotate: '-30deg',

  '@media (min-width: 768px)': {
    display: 'none',
  },
}));
