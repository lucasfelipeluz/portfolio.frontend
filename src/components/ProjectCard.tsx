import React from 'react';
import { ProjectCardStyled } from '../style/Project';
import { Link } from 'react-router-dom';

export default function ProjectCardComponent({ setShowMoreDetails }: { setShowMoreDetails: any }) {
  return (
    <ProjectCardStyled>
      <div className="container-title">
        <p className="title">Projct</p>
      </div>
      <div className="description">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ex, esse quasi dolor
          corporis fugit perspiciatis nostrum accusantium. Ducimus adipisci modi atque quaerat quae
          nesciunt? Nihil ipsa quisquam iure ratione?
        </p>
      </div>
      <div className="skills">
        <a href="">HTML</a>
        <a href="">CSS</a>
        <a href="">JavaScript</a>
        <a href="">C#</a>
        <a href="">.NET</a>
      </div>
      <div className="more-info">
        <Link
          to="/project/1"
          onClick={() => {
            setShowMoreDetails(true);
          }}
        >
          Saber Mais
        </Link>
      </div>
    </ProjectCardStyled>
  );
}
