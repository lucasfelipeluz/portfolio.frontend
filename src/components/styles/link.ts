import { styled, Link as MuiLink } from '@mui/material';

export const MenuListLink = styled(MuiLink)(({ theme }) => ({
  height: '100%',
  transition: '0.5s',
  fontSize: '18px',
  color: theme.palette.text.primary,
  textDecoration: 'none',
  textAlign: 'center',

  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

export const MenuMobileLink = styled(MuiLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  width: '100%',
  height: '100%',
  fontSize: '22px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',

  '&:after': {
    transition: '0.3s',
    content: '""',
    width: '40px',
    height: '2px',
    background: 'red',
    position: 'absolute',
    opacity: 0,
  },

  // '&:hover:after': {
  //   opacity: 1,
  //   content: '""',
  //   height: '2px',
  //   color: theme.palette.background.paper,
  //   position: 'absolute',
  // },
}));

export const ButtonLink = styled(MuiLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
  transition: '0.3s',

  '&:hover': {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.primary.light : '',
    // backgroundColor: theme.palette.primary.dark,
    filter: 'saturate(1.7)',
  },
}));

export const ProjectButtonLink = styled(ButtonLink)(() => ({
  borderRadius: '5px',
}));

export const SkillSmallButtonOnProject = styled(ProjectButtonLink)(() => ({
  fontSize: '14px',
  padding: '5px',
}));

export const ProjectCardLink = styled(ProjectButtonLink)(() => ({
  fontSize: '15px',
  padding: '10px',
  width: '100%',
  textAlign: 'center',
}));

export const ContactLink = styled(MuiLink)(({ theme, color }) => ({
  borderRadius: '5px',
  overflow: 'hidden',
  padding: '10px 15px',
  textDecoration: 'none',
  position: 'relative',
  transition: '0.3s',
  height: '80px',
  width: '80px',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  filter: 'saturate(0.5)',
  border: `3px solid ${color}`,

  '.container-icon': {
    transition: '0.3s',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.text.primary,

    svg: {
      transition: '0.3s linear',
      fontSize: '35px',
      color: theme.palette.text.primary,
    },
  },

  '&:hover': {
    filter: 'saturate(1.7)',
    backgroundColor: `${color}`,

    '.container-icon': {
      filter: 'saturate(1.2)',

      svg: {
        color: theme.palette.background.paper,
      },
    },
  },
}));

export const LinkProjectDetails = styled(ButtonLink)(() => ({
  width: '100%',
  borderRadius: '5px',
  textAlign: 'center',
  padding: '10px',
  fontSize: '15px',

  '.icon': {
    fontSize: '15px',
  },
}));
