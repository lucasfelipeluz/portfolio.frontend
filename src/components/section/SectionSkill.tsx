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

interface DescriptionHoverProps {
  description: string;
  links: string[];
}

function SectionSkillComponent({ skills }: Props) {
  const { language } = useLanguage();

  const [descriptionHover, setDescriptionHover] = useState<DescriptionHoverProps | null>(null);

  return (
    <SkillsSection>
      <SkillsSectionTitle id='skills'>{strings.skills[language.code]}</SkillsSectionTitle>
      <HelperText>{strings.hoverUpTheMouseAboveTheSkill[language.code]}</HelperText>
      <SkillContent className='container-fluid container-lg'>
        <SkillDescription description={descriptionHover?.description} />
        <SeparatorBar />
        <ContainerSkill>
          {skills.map((skill) => (
            <SkillButtons key={skill.id} skill={skill} setDescriptionHover={setDescriptionHover} />
          ))}
        </ContainerSkill>
      </SkillContent>
    </SkillsSection>
  );
}

export default SectionSkillComponent;
