import React, { useEffect, useState } from 'react';
import { StyleSkillDescription } from 'src/core/theme/Skills';
import Skill from 'src/types/Skill';
import { calculateHowMuchTimeHasPassed } from 'src/utils/helpers';

interface Props {
  skillSelected: Skill | null;
}

export default function SkillDescription({ skillSelected }: Props) {
  const [experience, setExperience] = useState<{ years: number; months: number }>({
    years: 0,
    months: 0,
  });

  useEffect(() => {
    if (skillSelected?.startedAt) {
      const { years, months } = calculateHowMuchTimeHasPassed(new Date(skillSelected.startedAt));
      setExperience({ years, months });
    }
  }, [skillSelected]);

  return (
    <StyleSkillDescription
      className={`skill-description ${skillSelected?.description ? 'selected' : '.'}`}
    >
      <p>{skillSelected?.description}</p>
      {skillSelected?.startedAt && (
        <p className='xp'>
          {experience.years} anos e {experience.months} meses de experiência
        </p>
      )}
    </StyleSkillDescription>
  );
}
