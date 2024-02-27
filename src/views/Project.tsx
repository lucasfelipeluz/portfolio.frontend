import React, { useEffect } from 'react';
import ProjectCardComponent from '../components/ProjectCard';
import { LanguageContext } from '../context/LanguageContext';
import { SectionTitle } from '../style/Globals';
import { ProjectContentSection, ProjectSection } from '../style/Project';
import strings from '../utils/strings';

export default function ProjectView() {
  const { language } = React.useContext(LanguageContext);
  const [showMoreDetails, setShowMoreDetails] = React.useState(false);

  useEffect(() => {
    if (showMoreDetails) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showMoreDetails]);

  return (
    <ProjectSection className="container-fluid container-lg" id="projects">
      <SectionTitle>{strings.projects[language.code]}</SectionTitle>
      <ProjectContentSection>
        <ProjectCardComponent setShowMoreDetails={setShowMoreDetails} />
        <ProjectCardComponent setShowMoreDetails={setShowMoreDetails} />
        <ProjectCardComponent setShowMoreDetails={setShowMoreDetails} />
      </ProjectContentSection>
      {/* <ContainerButtonSeeAllProjects>
        <ButtonSeeAllProjects>Ver Todos</ButtonSeeAllProjects>
      </ContainerButtonSeeAllProjects> */}
    </ProjectSection>
  );
}
