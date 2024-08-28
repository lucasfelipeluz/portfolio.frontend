import { styled } from '@mui/material';

export const Section = styled('section')(() => ({
  height: '100vh',
  width: '100%',
}));

export const ProjectSection = styled(Section)(() => ({
  minHeight: '100vh',
  height: 'auto',
  paddingBottom: '25px',
}));

export const SkillSection = styled(Section)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.palette.background.paper,
  padding: '25px 0',
  height: 'auto',

  '@media (min-width: 992px)': {
    minHeight: '100vh',
  },
}));

export const ContactSection = styled(Section)(() => ({
  height: 'auto',
  marginTop: '50px',
}));

export const FooterSection = styled('section')(({ theme }) => ({
  height: '100px',
  marginTop: '50px',
  backgroundColor: theme.palette.background.paper,
  userSelect: 'none',

  '.container': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 16px',
    alignItems: 'center',
    height: '100%',
    gap: '5px',

    '.copyright': {
      textAlign: 'end',
    },

    '.version': {
      color: theme.palette.text.disabled,
      fontSize: '10px',

      '@media (min-width: 654px)': {
        fontSize: '14px',
      },

      '@media (min-width: 992px)': {
        fontSize: '14px',
      },
    },

    '.copyright, .icon': {
      color: theme.palette.text.disabled,
      fontSize: '12px',

      '@media (min-width: 654px)': {
        fontSize: '16px',
      },

      '@media (min-width: 992px)': {
        fontSize: '20px',
      },
    },
  },
}));
