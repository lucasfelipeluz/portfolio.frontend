import React from 'react';
import { StyleSkillButtons } from '../style/Skills';

interface Props {
  title: string;
  description: string;
  icon: string;
  color: string;
  setDescriptionHover: Function;
}

export default function SkillButtons({
  title,
  description,
  icon,
  color,
  setDescriptionHover,
}: Props) {
  const [skillSelected, setSkillSelected] = React.useState(false);

  return (
    <StyleSkillButtons
      className={`skill ${skillSelected ? 'selected' : ''}`}
      color={color}
      onMouseEnter={() => {
        setDescriptionHover({ description, links: [] });
      }}
      onMouseLeave={() => {
        setDescriptionHover(null);
      }}
      onClick={() => setSkillSelected(!skillSelected)}
    >
      <div className="skill-header">
        <i className={`skill-icon ${icon}`}></i>
        <div className="skill-title">{title}</div>
      </div>
      <div className="skill-content">
        <p>{description}</p>
      </div>
    </StyleSkillButtons>
  );
}
