import { Box, Button, styled, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { colors } from 'src/core/theme/theme';
import { LanguageCode } from 'src/core/types/languageContext';

import { Project } from 'src/types/Project';
import strings from 'src/utils/strings';

export const ProjectCardStyled = styled(Box)`
  color: ${colors.letras};
  background-color: ${colors.dark};
  height: 350px;
  width: 350px;
  display: grid;
  grid-template-rows: 1fr 3fr 1fr 1fr;
  padding: 5px 15px;
  border-radius: 10px;
  max-width: 400px;

  @media (min-width: 725px) {
  }
`;

export const ProjectCardLink = styled(Link)`
  background-color: ${colors.cor1};
  width: 100%;
  text-align: center;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 5px;
  color: ${colors.letras};

  &:hover {
    color: ${colors.cor2};
    filter: saturate(1.5);
  }
`;

const DescriptionBox = styled(Box)`
  padding: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SkillsBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  flex-wrap: nowrap;
`;

const ButtonSkills = styled(Button)`
  max-width: 35%;
  padding: 5px;
  font-size: 15px;
  text-decoration: none;
`;

interface Props {
  project: Project;
  langCode: LanguageCode;
}

function CardProjectComponent({ project, langCode }: Props) {
  return (
    <ProjectCardStyled>
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
      <DescriptionBox>
        <Typography>{project.description}</Typography>
      </DescriptionBox>
      <SkillsBox>
        {project.skills?.map((skill, index) => {
          if (index < 5) return <ButtonSkills href='t'>{skill.title}</ButtonSkills>;
          return null;
        })}
      </SkillsBox>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          href={`/project/${project.id}`}
          variant='contained'
          color='primary'
          sx={{
            padding: '5px 10px',
            height: '80%',
            fontSize: '17px',
          }}
        >
          {strings.moreDetails[langCode]}
        </Button>
      </Box>
    </ProjectCardStyled>
  );
}

export default CardProjectComponent;
