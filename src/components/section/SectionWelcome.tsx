import { useLanguage } from 'src/core/context/languageContext';
import { getAboutMe } from 'src/store';
import WelcomeInfomationComponent from '../container/WelcomeInfomation';
import { Section } from '../styles/section';
import { DeveloperIlustration, WelcomeContainer } from '../styles/welcome';
import WelcomeSvg from '../svg/Welcome';

function SectionWelcomeComponent() {
  const { language } = useLanguage();
  const aboutMe = getAboutMe();

  return (
    <Section>
      <WelcomeContainer sx={{ transition: '0.3s ease-in-out' }}>
        <WelcomeInfomationComponent
          language={language}
          jobTitle={aboutMe.jobTitle}
          name={aboutMe.name}
        />
        <DeveloperIlustration>
          <WelcomeSvg />
        </DeveloperIlustration>
      </WelcomeContainer>
    </Section>
  );
}

export default SectionWelcomeComponent;
