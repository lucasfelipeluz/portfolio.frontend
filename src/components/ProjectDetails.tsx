import React from 'react';
import { useEffect } from 'react';
import {
  ImagesContainerProjectDetail,
  InfoContainerProjectDetail,
  MoreDetailsContainer,
} from '../style/Project';
import { Button } from '../style/Globals';
import { Outlet, useLocation, useParams } from 'react-router-dom';

interface Props {
  showMoreDetails: boolean;
  setShowMoreDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProjectDetails({ showMoreDetails, setShowMoreDetails }: Props) {
  const [projectId, setProjectId] = React.useState('' as string);

  const params = useParams();

  useEffect(() => {
    if (params && params.id) {
      setProjectId(params.id);
    }
  }, [params.id, params]);

  return (
    <>
      <InfoContainerProjectDetail>
        <div className="title">
          <button
            onClick={() => {
              setShowMoreDetails(false);
            }}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <h2>Project Name</h2>
        </div>
        <div className="description">
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, reiciendis fuga ducimus
            sequi aliquam amet earum alias autem sapiente, quisquam, corporis labore in aliquid
            beatae voluptatum deleniti eum laborum ea. Hic modi, molestiae necessitatibus doloribus
            exercitationem expedita nesciunt fuga quam earum voluptas repellendus numquam fugit
            sequi illo quia. Veritatis voluptatem minima corrupti ut tempore inventore reprehenderit
            ipsum voluptatum nihil excepturi! Et quod, unde voluptas deleniti soluta voluptatem
            itaque, nisi temporibus vel sapiente officiis explicabo suscipit quas doloremque nobis
            iste?
          </p>
          <div className="duration">
            <p className="started_at">Iniciado em: 20/01/2022</p>
            <p className="finished_at">Terminado em: Em andamento</p>
          </div>
        </div>
        <div className="container-skills">
          <p className="title-skills">Tecnologias utilizadas:</p>
          <div className="skills">
            <a href="">HTML</a>
            <a href="">CSS</a>
            <a href="">JavaScript</a>
            <a href="">C#</a>
            <a href="">.NET</a>
            <a href="">.NET</a>
            <a href="">.NET</a>
            <a href="">.NET</a>
            <a href="">JavaScript</a>
            <a href="">.NET</a>
            <a href="">.NET</a>
            <a href="">.NET</a>
            <a href="">.NET</a>
            <a href="">.NET</a>
            <a href="">.NET</a>
          </div>
        </div>
        <div className="links">
          <Button>Ver Repositorio</Button>
          <Button>Visitar site</Button>
        </div>
      </InfoContainerProjectDetail>
      <ImagesContainerProjectDetail></ImagesContainerProjectDetail>
    </>
  );
}
