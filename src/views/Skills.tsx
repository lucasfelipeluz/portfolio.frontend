import React from 'react';
import SkillButtons from '../components/SkillButtons';
import SkillDescription from '../components/SkillDescription';
import {
  ContainerSkill,
  HelperText,
  SkillContent,
  SkillsSection,
  SkillsSectionTitle,
} from '../style/Skills';
import { SeparatorBar } from '../style/Globals';
import strings from '../utils/strings';
import { LanguageContext } from '../context/LanguageContext';
import { SkillProps } from '../types/ServicesProps';

interface Props {
  skills: SkillProps[];
}

interface DescriptionHoverProps {
  description: string;
  links: string[];
}

export default function SkillsView({ skills }: Props) {
  const { language } = React.useContext(LanguageContext);

  const [descriptionHover, setDescriptionHover] = React.useState<DescriptionHoverProps | null>(
    null
  );

  return (
    <SkillsSection>
      <SkillsSectionTitle id="skills">{strings.skills[language.code]}</SkillsSectionTitle>
      <HelperText>{strings.hoverUpTheMouseAboveTheSkill[language.code]}</HelperText>
      <SkillContent className="container-fluid container-lg">
        <SkillDescription description={descriptionHover?.description} />
        <SeparatorBar />
        <ContainerSkill>
          {skills.map((skill) => {
            return (
              <SkillButtons
                key={skill.id}
                skill={skill}
                setDescriptionHover={setDescriptionHover}
              />
            );
          })}
        </ContainerSkill>
      </SkillContent>
    </SkillsSection>
  );
}
