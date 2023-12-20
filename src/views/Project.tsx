import React, { useEffect } from 'react';
import ProjectCardComponent from '../components/ProjectCard';
import { LanguageContext } from '../context/LanguageContext';
import { Button, SectionTitle } from '../style/Globals';
import {
  ButtonSeeAllProjects,
  ContainerButtonSeeAllProjects,
  MoreDetailsContainer,
  ProjectContentSection,
  ProjectSection,
} from '../style/Project';
import strings from '../utils/strings';
import ProjectDetails from '../components/ProjectDetails';
import { Outlet, useLocation, useParams } from 'react-router-dom';

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
    <ProjectSection className="container-fluid container-lg">
      <SectionTitle>{strings.projects[language.code]}</SectionTitle>
      <ProjectContentSection>
        <ProjectCardComponent setShowMoreDetails={setShowMoreDetails} />
        <ProjectCardComponent setShowMoreDetails={setShowMoreDetails} />
        <ProjectCardComponent setShowMoreDetails={setShowMoreDetails} />
      </ProjectContentSection>
      <MoreDetailsContainer className={`${showMoreDetails ? 'active' : ''}`}>
        <div className="container">
          <Outlet />
        </div>
      </MoreDetailsContainer>
      <ContainerButtonSeeAllProjects>
        <ButtonSeeAllProjects>Ver Todos</ButtonSeeAllProjects>
      </ContainerButtonSeeAllProjects>
    </ProjectSection>
  );
}
