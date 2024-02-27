import React from 'react';
import SkillButtons from '../components/SkillButtons';
import SkillDescription from '../components/SkillDescription';
import { ContainerSkill, SkillContent, SkillsSection, SkillsSectionTitle } from '../style/Skills';

interface DescriptionHoverProps {
  description: string;
  links: string[];
}

export default function SkillsView() {
  const [descriptionHover, setDescriptionHover] = React.useState<DescriptionHoverProps | null>(
    null
  );

  return (
    <SkillsSection>
      <SkillsSectionTitle id="skills">Skills</SkillsSectionTitle>
      <p style={{ color: '#7a7a7a7f', fontWeight: 'bold', textAlign: 'center' }}>
        Passe o mouse por cima da tecnologia para ver a descrição
      </p>
      <SkillContent className="container-fluid container-lg">
        <SkillDescription description={descriptionHover?.description} />
        <ContainerSkill>
          <SkillButtons
            title="HTML"
            description="OPa opa aopa"
            icon="fab fa-html5"
            color="red"
            setDescriptionHover={setDescriptionHover}
          />
          <SkillButtons
            title="Pepino"
            description="OPa opa aopa"
            icon="fab fa-html5"
            color="blue"
            setDescriptionHover={setDescriptionHover}
          />
        </ContainerSkill>
      </SkillContent>
    </SkillsSection>
  );
}
