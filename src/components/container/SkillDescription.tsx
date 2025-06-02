import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import Skill from 'src/types/Skill';
import { calculateHowMuchTimeHasPassed } from 'src/utils/helpers';
import { SkillDescription as SkillDescriptionStyle } from '../styles/container';

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
    <SkillDescriptionStyle
      className={`skill-description ${skillSelected?.description ? 'selected' : '.'}`}
    >
      <Typography>{skillSelected?.description}</Typography>
      {skillSelected?.startedAt && (
        <Typography className='xp'>{experience.years} anos de experiência.</Typography>
      )}
    </SkillDescriptionStyle>
  );
}
