import React from 'react';
import { ProjectCardLink, ProjectCardStyled } from '../style/Project';
import { Link } from 'react-router-dom';
import { ProjectProps } from '../types/ServicesProps';
import strings from '../utils/strings';

interface Props {
  project: ProjectProps;
  langCode: string;
}

export default function ProjectCardComponent({ project, langCode }: Props) {
  return (
    <ProjectCardStyled>
      <div className="container-title">
        <p className="title">{project.title}</p>
      </div>
      <div className="description">
        <p>{project.description}</p>
      </div>
      <div className="skills">
        {project.skills?.map((skill, index) => {
          if (index < 5) return <a href="">{skill.title}</a>;
          else return null;
        })}
      </div>
      <div className="more-info">
        <ProjectCardLink to="/project/1">{strings.moreDetails[langCode]}</ProjectCardLink>
      </div>
    </ProjectCardStyled>
  );
}
