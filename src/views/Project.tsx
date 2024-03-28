import React from 'react';
import ProjectCardComponent from '../components/ProjectCard';
import { LanguageContext } from '../context/LanguageContext';
import { SectionTitle } from '../style/Globals';
import { ProjectContentSection, ProjectSection } from '../style/Project';
import { ProjectProps } from '../types/ServicesProps';
import strings from '../utils/strings';

interface Props {
  projects: ProjectProps[];
}

export default function ProjectView({ projects }: Props) {
  const { language } = React.useContext(LanguageContext);

  return (
    <ProjectSection className="container-fluid container-lg" id={`${strings.classNames.projects}`}>
      <SectionTitle>{strings.projects[language.code]}</SectionTitle>
      <ProjectContentSection>
        {projects.map((project) => {
          return (
            <ProjectCardComponent key={project.id} project={project} langCode={language.code} />
          );
        })}
      </ProjectContentSection>
      {/* <ContainerButtonSeeAllProjects>
        <ButtonSeeAllProjects>Ver Todos</ButtonSeeAllProjects>
      </ContainerButtonSeeAllProjects> */}
    </ProjectSection>
  );
}
