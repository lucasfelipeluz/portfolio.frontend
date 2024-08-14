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
  backgroundColor: theme.palette.background.default,
  padding: '25px 0',
}));

export const ContactSection = styled(Section)(() => ({
  height: 'auto',
  marginTop: '50px',
}));

export const FooterSection = styled('section')(({ theme }) => ({
  height: '100px',
  marginTop: '50px',
  backgroundColor: theme.palette.background.default,
  userSelect: 'none',

  '.container': {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    height: '100%',

    '.copyright': {
      color: theme.palette.text.disabled,
      fontSize: '14px',
    },
  },
}));
