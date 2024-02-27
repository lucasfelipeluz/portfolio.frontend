import React from 'react';
import { StyleSkillDescription } from '../style/Skills';

interface Props {
  description?: string;
}

export default function SkillDescription({ description }: Props) {
  return (
    <StyleSkillDescription className={`skill-description ${description ? 'selected' : '.'}`}>
      <p>{description}</p>
    </StyleSkillDescription>
  );
}
