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

  '&:hover:after': {
    opacity: 1,
    content: '""',
    height: '2px',
    background: '#1ad78a',
    position: 'absolute',
  },
}));

export const ButtonLink = styled(MuiLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  transition: '0.3s',

  '&:hover': {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.primary.dark,
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

export const ContactLink = styled(MuiLink)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '5px',
  overflow: 'hidden',
  padding: '10px 15px',
  textDecoration: 'none',
  position: 'relative',
  transition: '0.3s',
  height: '40px',
  cursor: 'pointer',

  '.container-icon': {
    transition: '0.3s',
    filter: 'saturate(0.5)',
    position: 'absolute',
    left: '0',
    top: '0',
    bottom: '0',
    width: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.text.primary,
  },

  '.title': {
    fontSize: '16px',
    marginLeft: '50px',
  },

  '&:hover': {
    filter: 'saturate(1.7)',

    '.container-icon': {
      filter: 'saturate(1.2)',
    },
  },
}));

export const LinkProjectDetails = styled(ButtonLink)(({ theme }) => ({
  width: '100%',
  borderRadius: '5px',
  textAlign: 'center',
  padding: '10px',
  fontSize: '15px',

  '.icon': {
    fontSize: '15px',
  },
}));
