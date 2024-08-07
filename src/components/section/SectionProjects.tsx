import React from 'react';
import { useLanguage } from 'src/core/context/languageContext';
import { ProjectContentSection, ProjectSection } from 'src/core/theme/Project';
import { SectionTitle } from 'src/core/theme/globals';
import strings from 'src/utils/strings';
import { Project } from 'src/types/Project';
import CardProjectComponent from '../card/CardProject';

interface Props {
  projects: Project[];
}

export default function SectionProjectComponent({ projects }: Props) {
  const { language } = useLanguage();

  return (
    <ProjectSection className='container-fluid container-lg' id={`${strings.classNames.projects}`}>
      <SectionTitle>{strings.projects[language.code]}</SectionTitle>
      <ProjectContentSection>
        {projects.map((project, index) => {
          if (index < 9) {
            return (
              <CardProjectComponent key={project.id} project={project} langCode={language.code} />
            );
          }
          return null;
        })}
      </ProjectContentSection>
      {/* <ContainerButtonSeeAllProjects>
        <ButtonSeeAllProjects>Ver Todos</ButtonSeeAllProjects>
      </ContainerButtonSeeAllProjects> */}
    </ProjectSection>
  );
}
