import React from 'react';
import { Box, Typography } from '@mui/material';
import { LanguageCode } from 'src/core/types/languageContext';
import { Project } from 'src/types/Project';
import strings from 'src/utils/strings';
import { ProjectCardLink, SkillSmallButtonOnProject } from '../styles/link';
import { DescriptionProjectCard, ProjectCard, SkillsContainerOnProject } from '../styles/container';

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
      <SkillsContainerOnProject>
        {project.skills?.map((skill, index) => {
          if (index < 3) {
            return (
              <SkillSmallButtonOnProject href={`/skill/${skill.id}`} key={skill.id as number}>
                {skill.title}
              </SkillSmallButtonOnProject>
            );
          }
          return null;
        })}
      </SkillsContainerOnProject>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ProjectCardLink href={`/project/${project.id}`} color='primary'>
          {strings.moreDetails[langCode]}
        </ProjectCardLink>
      </Box>
    </ProjectCard>
  );
}

export default CardProjectComponent;
