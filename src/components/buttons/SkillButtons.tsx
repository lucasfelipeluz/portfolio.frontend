import { Square } from 'mdi-material-ui';
import React, { useEffect } from 'react';
import { StyleSkillButtons } from 'src/core/theme/Skills';
import Skill from 'src/types/Skill';
import * as mdiIconPath from '@mdi/js';
import Icon from '@mdi/react';

type MdiIcons = typeof import('@mdi/js');

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
  const [color, setColor] = React.useState('white');
  const [isSkillSelected, setIsSkillSelected] = React.useState(false);
  const [experiencia, setExperiencia] = React.useState({ anos: 0, meses: 0 });

  const iconPath = (mdiIconPath as any)[skill.icon];

  useEffect(() => {
    const data = new Date(skill.startedAt);
    const anosMeses = calcularAnosMesesPassados(data);
    setExperiencia(anosMeses);
  }, [skill.startedAt]);

  return (
    <StyleSkillButtons
      className={`skill ${isSkillSelected ? 'selected' : ''}`}
      color={skill.color}
      colorSkill={skill.color}
      onMouseEnter={() => {
        setSkillSelected(skill);
        setColor(skill.color);
      }}
      onMouseLeave={() => {
        setSkillSelected(null);
        setColor('white');
      }}
      onClick={() => setIsSkillSelected(!isSkillSelected)}
    >
      <div className='skill-header'>
        <div className='container-icon'>
          <Icon path={iconPath} />
        </div>
        <div className='skill-title'>{skill.title}</div>
      </div>
      <div className='skill-content'>
        <p>
          {skill.description} <br />
          Experiência: {experiencia.anos} anos.
        </p>
      </div>
    </StyleSkillButtons>
  );
}
