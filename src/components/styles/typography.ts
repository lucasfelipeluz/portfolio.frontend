import { styled, Typography } from '@mui/material';
import { colors } from 'src/core/theme/theme';

export const PortfolioTitle = styled(Typography)(({ theme }) => ({
  // color: theme.palette.mode === 'dark' ? colors.text.dark.main : colors.text.light.main,

  '@media (min-width: 992px)': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
}));

export const SectionTitle = styled(Typography)(() => ({
  fontSize: '30px',
  fontWeight: 400,
  textAlign: 'center',
}));

export const HelpTextSkillContainer = styled(Typography)(({ theme }) => ({
  display: 'none',
  color: theme.palette.text.disabled,
  fontWeight: 400,
  textAlign: 'center',
  fontSize: '15px',

  '@media (min-width: 992px)': {
    display: 'block',
  },
}));

export const AboutMeText = styled(Typography)(({ theme }) => ({
  padding: '0 25px',
  color: theme.palette.text.primary,
  textAlign: 'center',
  fontSize: '15px',

  '@media (min-width: 992px)': {
    gridRow: '2',
    gridColumn: '1',
  },
}));

export const SkillProjectDetails = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: '3px',
  fontSize: '12px',
  borderRadius: '5px',
  userSelect: 'none',
}));
