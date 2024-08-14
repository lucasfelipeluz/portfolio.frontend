import React from 'react';
import { useLanguage } from 'src/core/context/languageContext';
import strings from 'src/utils/strings';
import { Project } from 'src/types/Project';
import CardProjectComponent from '../card/CardProject';
import { ProjectSection } from '../styles/section';
import { SectionTitle } from '../styles/typography';
import { ProjectContentContainer } from '../styles/container';

interface Props {
  projects: Project[];
}

export default function SectionProjectComponent({ projects }: Props) {
  const { language } = useLanguage();

  return (
    <ProjectSection className='container-fluid container-lg' id={`${strings.classNames.projects}`}>
      <SectionTitle>{strings.projects[language.code]}</SectionTitle>

      <ProjectContentContainer>
        {projects.map((project, index) => {
          if (index < 9) {
            return (
              <CardProjectComponent key={project.id} project={project} langCode={language.code} />
            );
          }
          return null;
        })}
      </ProjectContentContainer>
    </ProjectSection>
  );
}
