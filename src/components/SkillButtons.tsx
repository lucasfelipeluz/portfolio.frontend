import React, { useEffect } from 'react';
import { SkillIcon, StyleSkillButtons } from '../style/Skills';
import { SkillProps } from '../types/ServicesProps';
import Icon from '@mdi/react';
import * as IconPath from '@mdi/js';
import styled from 'styled-components';

interface Props {
  skill: SkillProps;
  setDescriptionHover: Function;
}

function calcularAnosMesesPassados(data: Date) {
  const dataAtual = new Date();

  const anosPassados = dataAtual.getFullYear() - data.getFullYear();
  const mesesPassados = anosPassados * 12 + dataAtual.getMonth() - data.getMonth();

  return { anos: anosPassados, meses: mesesPassados };
}

export default function SkillButtons({ skill, setDescriptionHover }: Props) {
  const [color, setColor] = React.useState('white');
  const [skillSelected, setSkillSelected] = React.useState(false);
  const [experiencia, setExperiencia] = React.useState({ anos: 0, meses: 0 });

  useEffect(() => {
    const data = new Date(skill.experience);
    const anosMeses = calcularAnosMesesPassados(data);
    setExperiencia(anosMeses);
  }, [skill.experience]);

  return (
    <StyleSkillButtons
      className={`skill ${skillSelected ? 'selected' : ''}`}
      color={skill.color}
      colorSkill={skill.color}
      onMouseEnter={() => {
        setDescriptionHover({ description: skill.description, links: [] });
        setColor(skill.color);
      }}
      onMouseLeave={() => {
        setDescriptionHover(null);
        setColor('white');
      }}
      onClick={() => setSkillSelected(!skillSelected)}
    >
      <div className="skill-header">
        <div className="container-icon">
          <SkillIcon className="skill-icon" path={IconPath[skill.icon]} />
        </div>
        <div className="skill-title">{skill.title}</div>
      </div>
      <div className="skill-content">
        <p>
          {skill.description} <br />
          Experiência: {experiencia.anos} anos.
        </p>
      </div>
    </StyleSkillButtons>
  );
}
