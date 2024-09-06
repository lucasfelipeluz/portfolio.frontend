import React, { useState } from 'react';
import { useLanguage } from 'src/core/context/languageContext';
import Skill from 'src/types/Skill';
import strings from 'src/utils/strings';
import SkillButtons from '../buttons/SkillButtons';
import SkillDescription from '../container/SkillDescription';
import { SkillsContainer, SkillSelector } from '../styles/container';
import { SeparatorSkillDescription } from '../styles/line';
import { SkillSection } from '../styles/section';
import { HelpTextSkillContainer, SectionTitle } from '../styles/typography';

interface Props {
  skills: Skill[];
}

function SectionSkillComponent({ skills }: Props) {
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
        {strings.hoverUpTheMouseAboveTheSkill[language.code]}
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
              setSkillSelected={setSkillSelected}
              handleClickSelectSkill={handleClickSelectSkill}
            />
          ))}
        </SkillSelector>
      </SkillsContainer>
    </SkillSection>
  );
}

export default SectionSkillComponent;
