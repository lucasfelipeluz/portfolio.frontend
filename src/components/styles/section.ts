import { Container, styled } from '@mui/material';
import { white } from 'src/core/theme/colors';

export const Section = styled('section')(() => ({
  height: '100vh',
  width: '100%',
}));

export const ProjectSection = styled(Section)(({ theme }) => ({
  minHeight: '100vh',
  height: 'auto',
  paddingBottom: '25px',
  backgroundColor: theme.palette.background.paper,
}));

export const SkillSection = styled(Section)(({ theme }) => ({
  minHeight: '700px',
  backgroundColor: theme.palette.background.default,
  padding: '25px 0',
  height: 'auto',

  '@media (min-width: 992px)': {},
}));

export const ProjectDetailsContainer = styled(Section)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: '20px 0 0px 0',
  height: 'auto',
}));

export const ContactSection = styled(Container)(() => ({
  height: 'auto',
  marginTop: '50px',
}));

export const FooterSection = styled('section')(({ theme }) => ({
  height: '100px',
  marginTop: '50px',
  backgroundColor: theme.palette.background.paper,
  userSelect: 'none',

  '.content': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 16px',
    alignItems: 'center',
    height: '100%',

    '.copyright': {
      textAlign: 'end',
    },

    '.version': {
      color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : white[50],
      fontSize: '16px',

      '@media (min-width: 654px)': {
        fontSize: '14px',
      },

      '@media (min-width: 992px)': {
        fontSize: '14px',
      },
    },

    '.copyright, .icon': {
      color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : white[50],
      fontSize: '16px',

      '@media (min-width: 654px)': {
        fontSize: '16px',
      },

      '@media (min-width: 992px)': {
        fontSize: '20px',
      },
    },
  },
}));
