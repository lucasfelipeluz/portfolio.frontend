import { Box, styled, Typography } from '@mui/material';
import { white } from 'src/core/theme/colors';

export const PortfolioTitle = styled(Typography)(({ theme }) => ({
  transition: '0.3s',

  '@media (min-width: 992px)': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

export const SectionTitle = styled(Typography)(() => ({
  fontSize: '35px',
  fontWeight: 600,
  textAlign: 'center',
}));

export const ProjectSectionTitle = styled(SectionTitle)(() => ({}));

export const HelpTextSkillContainer = styled(Typography)(({ theme }) => ({
  display: 'none',
  color: theme.palette.text.disabled,
  fontWeight: 600,
  textAlign: 'center',
  fontSize: '15px',

  '@media (min-width: 992px)': {
    display: 'block',
  },
}));

export const AboutMeText = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',

  p: {
    padding: '0 10px',
    color: white[50],
    fontWeight: 400,
    textAlign: 'center',
    fontSize: '18px',

    '@media (min-width: 992px)': {
      gridRow: '1',
      gridColumn: '3',
    },
  },
}));

export const SkillProjectDetails = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: '3px',
  fontSize: '12px',
  borderRadius: '5px',
  userSelect: 'none',
  color: white[50],
  transition: '0.3s',
}));
