import { Box, Card, styled } from '@mui/material';

export const ProjectContentContainer = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '15px',
  marginTop: '35px',
  justifyItems: 'center',

  '@media (min-width: 725px)': {
    gridTemplateColumns: '1fr 1fr',
  },
  '@media (min-width: 992px)': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
}));

export const SkillsContainerOnProject = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '5px',
  WebkitFlexWrap: 'nowrap',
}));

export const ProjectCard = styled(Card)(({ theme }) => ({
  color: theme.palette.text.primary,
  // backgroundColor: theme.palette.background.default,
  height: '350px',
  width: '350px',
  display: 'grid',
  gridTemplateRows: '1fr 3fr 1fr 1fr',
  padding: '5px 15px',
  borderRadius: '10px',
  maxWidth: '400px',
}));

export const DescriptionProjectCard = styled(Box)(() => ({
  padding: '10px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const SkillsContainer = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '1fr',
  color: theme.palette.text.primary,
  minHeight: '80vh',

  '@media (min-width: 992px)': {
    gridTemplateColumns: '1fr 3px 1fr',
    height: '100%',
  },
}));

export const SkillDescription = styled(Box)(() => ({
  textAlign: 'start',
  padding: '50px 10px',
  transition: '0.3s',
  opacity: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',

  '@media (max-width: 992px)': {
    display: 'none',
  },

  '&.selected': {
    opacity: 1,
  },

  p: {
    fontSize: '16px',
  },
}));

export const SkillSelector = styled(Box)(() => ({
  padding: '30px 5px',
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  gap: '10px',
}));

export const HeaderSkillButton = styled(Box)(() => ({
  transition: '0.3s',
  textAlign: 'center',
  userSelect: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',

  '.container-icon': {
    position: 'static',
    width: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  '.skill-icon': {},
}));

export const SkillButton = styled(Box)(({ theme, color }) => ({
  border: `1px solid ${theme.palette.text.primary}`,
  width: '120px',
  height: '120px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '5px',
  transition: '0.3s',

  '.skill-header': {
    transition: '0.3s',
    textAlign: 'center',
    userSelect: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: theme.palette.text.primary,

    '.container-icon': {
      position: 'static',
      width: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      transition: '0.3s',

      '.skill-icon': {},
    },
  },

  '.skill-content': {
    display: 'none',
  },

  // Animation on hover
  '&:hover': {
    '@media (min-width: 992px)': {
      border: `1px solid ${color}`,
      '.skill-header': {
        '.skill-title, .container-icon': {
          color,
        },
      },
    },
  },

  // Mobile Behavior
  '@media (max-width: 992px)': {
    '&.selected': {
      flexBasis: '100%',
      minHeight: '300px',
      height: 'auto',
      display: 'grid',
      gridTemplateRows: '80px 1fr',
      gridTemplateColumns: '1fr',
      border: `1px solid ${color}`,

      '.skill-header': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingLeft: '20px',
        borderBottom: `1px solid ${theme.palette.background.paper}`,
        position: 'relative',
        overflow: 'hidden',
        height: '100%',

        '.container-icon': {
          fontSize: '30px',
          backgroundColor: color,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100px',
          height: '100%',

          '.skill-icon': {
            width: '70px',
            height: '70px',
          },
        },

        '.skill-title': {
          fontSize: '20px',
        },
      },

      '.skill-content': {
        padding: '30px',
        display: 'block',
        textAlign: 'center',
      },
    },
  },
}));

export const AboutMeContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  height: '100%',
  display: 'grid',
  gridTemplateRows: '200px 1fr 1fr',
  gap: '50px',
  padding: '80px 15px',
  borderRadius: '10px',

  '@media (min-width: 992px)': {
    gridTemplateColumns: '1fr 10px 1fr',
    gridTemplateRows: '1fr 1fr',
    gap: '0',
  },
}));

export const AboutMeImgDev = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '20px',

  img: {
    width: '180px',
    height: '180px',
    objectFit: 'contain',
    borderRadius: '100%',
  },

  '@media (min-width: 992px)': {
    gridRow: '1',
    gridColumn: '1',
  },
}));

export const ContactLinks = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateRows: '60px 60px',
  gridTemplateColumns: '1fr 1fr',
  gap: '20px',
  padding: '70px 15px 10px 15px',
  position: 'relative',

  '.title-contact-links': {
    position: 'absolute',
    width: '100%',
    color: theme.palette.text.primary,
    textAlign: 'center',
    fontSize: '18px',
  },

  '@media (min-width: 992px)': {
    gridRow: '1/3',
    gridColumn: '3',
  },
}));

export const ProjectDetails = styled(Box)(({ theme }) => ({
  display: 'flex',
  color: theme.palette.text.primary,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 2000,
  backgroundColor: theme.palette.background.paper,
  transition: '0.3s linear',

  '.container-project': {
    backgroundColor: theme.palette.background.default,
    height: '100%',
    padding: '60px 0px 20px 0px',
    position: 'relative',
    display: 'grid',
    gap: '10px',
    overflowY: 'auto',

    '@media (min-width: 992px)': {
      gridTemplateColumns: '1fr 10px 1.5fr',
      gridTemplateRows: '1fr 1fr 1fr 1fr',
      width: '95%',
      padding: '60px 20px 20px 20px',
      gap: '20px',
    },
  },
}));

export const ActionsProjectDetails = styled(Box)(() => ({
  padding: '0 15px',
  position: 'absolute',
  width: '100%',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  marginTop: '10px',
}));

export const SlideProjectDetails = styled(Box)(() => ({
  marginBottom: '30px',

  '@media (min-width: 992px)': {
    gridRow: '1/5',
    gridColumn: '3/4',
    marginBottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  '.slide': {
    width: '100%',
  },
}));

export const DescriptionProjectDetails = styled(Box)(() => ({
  padding: '0 15px',
}));
