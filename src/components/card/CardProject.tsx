import { Box, Typography } from '@mui/material';
import { LanguageCode } from 'src/core/types/languageContext';
import { Project } from 'src/types/Project';
import strings from 'src/utils/strings';
import { DescriptionProjectCard, ProjectCard } from '../styles/container';
import { ProjectCardLink } from '../styles/link';

interface Props {
  project: Project;
  langCode: LanguageCode;
}

function CardProjectComponent({ project, langCode }: Props) {
  return (
    <ProjectCard>
      <Box>
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: '1.5rem',
          }}
        >
          {project.title}
        </Typography>
      </Box>
      <DescriptionProjectCard>
        <Typography variant='body1'>{project.description.split('.')[0]}.</Typography>
      </DescriptionProjectCard>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ProjectCardLink href={`/project/${project.id}`} color='primary' variant='outlined'>
          {strings.moreDetails[langCode]}
        </ProjectCardLink>
      </Box>
    </ProjectCard>
  );
}

export default CardProjectComponent;
