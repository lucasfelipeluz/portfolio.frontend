import { Container } from '@mui/material';
import { useLanguage } from 'src/core/context/languageContext';
import { Project } from 'src/types/Project';
import strings from 'src/utils/strings';
import CardProjectComponent from '../card/CardProject';
import { ProjectContentContainer } from '../styles/container';
import { ProjectSection } from '../styles/section';
import { ProjectSectionTitle } from '../styles/typography';

interface Props {
  projects: Project[];
}

export default function SectionProjectComponent({ projects }: Props) {
  const { language } = useLanguage();

  return (
    <ProjectSection id={`${strings.classNames.projects}`}>
      <Container>
        <ProjectSectionTitle>{strings.projects[language.code]}</ProjectSectionTitle>

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
      </Container>
    </ProjectSection>
  );
}
