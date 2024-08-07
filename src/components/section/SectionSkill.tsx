import React, { useState } from 'react';
import { useLanguage } from 'src/core/context/languageContext';
import {
  ContainerSkill,
  HelperText,
  SkillContent,
  SkillsSection,
  SkillsSectionTitle,
} from 'src/core/theme/Skills';
import Skill from 'src/types/Skill';
import strings from 'src/utils/strings';
import { SeparatorBar } from 'src/core/theme/globals';
import SkillDescription from '../container/SkillDescription';
import SkillButtons from '../buttons/SkillButtons';

interface Props {
  skills: Skill[];
}

function SectionSkillComponent({ skills }: Props) {
  const { language } = useLanguage();

  const [skillSelected, setSkillSelected] = useState<Skill | null>(null);

  return (
    <SkillsSection>
      <SkillsSectionTitle id='skills'>{strings.skills[language.code]}</SkillsSectionTitle>
      <HelperText>{strings.hoverUpTheMouseAboveTheSkill[language.code]}</HelperText>
      <SkillContent className='container-fluid container-lg'>
        <SkillDescription skillSelected={skillSelected} />
        <SeparatorBar />
        <ContainerSkill>
          {skills.map((skill) => (
            <SkillButtons key={skill.id} skill={skill} setSkillSelected={setSkillSelected} />
          ))}
        </ContainerSkill>
      </SkillContent>
    </SkillsSection>
  );
}

export default SectionSkillComponent;
