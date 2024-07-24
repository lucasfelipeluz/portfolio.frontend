import { Square } from 'mdi-material-ui';
import React, { useEffect } from 'react';
import { StyleSkillButtons } from 'src/core/theme/Skills';
import Skill from 'src/types/Skill';

interface Props {
  skill: Skill;
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
    const data = new Date(skill.startedAt);
    const anosMeses = calcularAnosMesesPassados(data);
    setExperiencia(anosMeses);
  }, [skill.startedAt]);

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
      <div className='skill-header'>
        <div className='container-icon'>
          <Square />
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
