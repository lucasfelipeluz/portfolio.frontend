import React, { useEffect } from 'react';
import * as mdiIconPath from '@mdi/js';
import Icon from '@mdi/react';
import { Box, Typography } from '@mui/material';
import Skill from 'src/types/Skill';
import { SkillButton } from '../styles/container';

interface Props {
  skill: Skill;
  setSkillSelected: Function;
}

function calcularAnosMesesPassados(data: Date) {
  const dataAtual = new Date();

  const anosPassados = dataAtual.getFullYear() - data.getFullYear();
  const mesesPassados = anosPassados * 12 + dataAtual.getMonth() - data.getMonth();

  return { anos: anosPassados, meses: mesesPassados };
}

export default function SkillButtons({ skill, setSkillSelected }: Props) {
  const [isSkillSelected, setIsSkillSelected] = React.useState(false);
  const [experiencia, setExperiencia] = React.useState({ anos: 0, meses: 0 });

  const iconPath = (mdiIconPath as any)[skill.icon];

  useEffect(() => {
    const data = new Date(skill.startedAt);
    const anosMeses = calcularAnosMesesPassados(data);
    setExperiencia(anosMeses);
  }, [skill.startedAt]);

  return (
    <SkillButton
      className={`skill ${isSkillSelected ? 'selected' : ''}`}
      color={skill.color}
      onMouseEnter={() => {
        setSkillSelected(skill);
      }}
      onMouseLeave={() => {
        setSkillSelected(null);
      }}
      onClick={() => setIsSkillSelected(!isSkillSelected)}
    >
      <Box className='skill-header'>
        <Box className='container-icon'>
          <Icon path={iconPath} className='skill-icon' />
        </Box>
        <Box className='skill-title'>{skill.title}</Box>
      </Box>
      <Box className='skill-content'>
        <Typography>
          {skill.description} <br />
          Experiência: {experiencia.anos} anos.
        </Typography>
      </Box>
    </SkillButton>
  );
}
