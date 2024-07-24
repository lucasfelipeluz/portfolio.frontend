import Link from 'next/link';
import React from 'react';
import { colors } from 'src/core/theme/theme';
import { LanguageCode } from 'src/core/types/languageContext';

import { Project } from 'src/types/Project';
import strings from 'src/utils/strings';
import styled from 'styled-components';

export const ProjectCardStyled = styled.div`
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

  .container-title .title {
    text-align: center;
    font-size: 1.5rem;
  }

  .description {
    padding: 10px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
    flex-wrap: nowrap;

    a {
      background-color: ${colors.dark2};
      padding: 5px 10px;
      font-size: 0.8rem;
      text-decoration: none;
      color: ${colors.letras};
      transition: 0.1s linear;
      border-radius: 5px;

      &:hover {
        background-color: ${colors.corDestaque};
      }
    }
  }

  .more-info {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      background-color: ${colors.dark2};
      padding: 5px;
      font-size: 0.8rem;
      text-decoration: none;
      color: ${colors.letras};
      transition: 0.1s linear;
      border: none;
      padding: 5px 10px;
      width: 100%;
      height: 80%;
      border-radius: 5px;

      &:hover {
        background-color: ${colors.corDestaque};
      }
    }
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

interface Props {
  project: Project;
  langCode: LanguageCode;
}

function CardProjectComponent({ project, langCode }: Props) {
  return (
    <ProjectCardStyled>
      <div className='container-title'>
        <p className='title'>{project.title}</p>
      </div>
      <div className='description'>
        <p>{project.description}</p>
      </div>
      <div className='skills'>
        {project.skills?.map((skill, index) => {
          if (index < 5) return <a href='t'>{skill.title}</a>;
          return null;
        })}
      </div>
      <div className='more-info'>
        <ProjectCardLink href='/project/1'>{strings.moreDetails[langCode]}</ProjectCardLink>
      </div>
    </ProjectCardStyled>
  );
}

export default CardProjectComponent;
