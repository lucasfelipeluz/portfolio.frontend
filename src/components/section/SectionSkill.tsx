import { useState } from 'react';
import { useLanguage } from 'src/core/context/languageContext';
import Skill from 'src/types/Skill';
import strings from 'src/utils/strings';
import { getSkills } from 'src/store';
import SkillDescription from '../container/SkillDescription';
import { SkillsContainer, SkillSelector } from '../styles/container';
import { SeparatorSkillDescription } from '../styles/line';
import { SkillSection } from '../styles/section';
import { HelpTextSkillContainer, SectionTitle } from '../styles/typography';
import SkillButtons from '../buttons/SkillButtons';

function SectionSkillComponent() {
  const skills = getSkills().sort((a, b) => b.viewPriority - a.viewPriority);
  const { language } = useLanguage();

  const [skillSelected, setSkillSelected] = useState<Skill | null>(null);

  const handleClickSelectSkill = (skill: Skill) => {
    if (skill.id === skillSelected?.id) {
      setSkillSelected(null);
    } else {
      setSkillSelected(skill);
    }
  };

  return (
    <SkillSection id='skills'>
      <SectionTitle>{strings.skills[language.code]}</SectionTitle>
      <HelpTextSkillContainer>
        {strings.clickToSeeMoreDetailsAboutTheSkill[language.code]}
      </HelpTextSkillContainer>
      <SkillsContainer>
        <SkillDescription skillSelected={skillSelected} />
        <SeparatorSkillDescription />
        <SkillSelector>
          {skills.map((skill) => (
            <SkillButtons
              key={skill.id}
              skill={skill}
              skillSelected={skillSelected}
              handleClickSelectSkill={handleClickSelectSkill}
            />
          ))}
        </SkillSelector>
      </SkillsContainer>
    </SkillSection>
  );
}

export default SectionSkillComponent;
