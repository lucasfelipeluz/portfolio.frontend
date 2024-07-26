import { ArrowLeft } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { ContainerProject, MoreDetailsContainer } from 'src/core/theme/Project';
import { Project } from 'src/types/Project';
import { formatISODateToBRDate } from 'src/utils/helpers';

function Item(props: { item: string }) {
  return (
    <div style={{ height: '350px' }}>
      <img
        src={props.item}
        style={{ height: '100%', width: '100%', objectFit: 'contain' }}
        alt='ok'
      />
    </div>
  );
}

interface Props {
  project: Project;
}

function View({ project }: Props) {
  const router = useRouter();

  const onHandleToBackPage = () => {
    router.back();
  };

  const items = [
    {
      src: '/images/illustration/illustration-contact.png',
    },
    {
      src: '/images/illustration/illustration-contact.png',
    },
    {
      src: '/images/illustration/illustration-contact.png',
    },
    {
      src: '/images/illustration/illustration-contact.png',
    },
  ];

  return (
    <MoreDetailsContainer>
      <ContainerProject className='container-lg container-fluid'>
        <div className='actions'>
          <IconButton
            className='fas fa-arrow-left'
            onClick={() => {
              onHandleToBackPage();
            }}
          >
            <ArrowLeft sx={{ color: 'white' }} />
          </IconButton>
          <p className='title' style={{ color: 'white' }}>
            Projeto
          </p>
        </div>
        <div className='slide-photos'>
          <div className='slide'>
            <Carousel>
              {items.map((item, i) => (
                <Item key={i as number} item={item.src} />
              ))}
            </Carousel>
          </div>
        </div>
        <div className='description'>
          <p className='title-project'>{project.title}</p>
          <p className='text'>{project.description}</p>
          <div className='duration'>
            <p className='started-at'>Iniciado em: {formatISODateToBRDate(project.startedAt)}</p>
            {project.finishedAt && (
              <p className='started-at'>
                Terminado em: {formatISODateToBRDate(project.finishedAt)}
              </p>
            )}
          </div>

          <div className='skills'>
            <p className='title-skills'>Tecnologias utilizadas:</p>
            <div className='content-skill'>
              {project.skills.map((skill) => (
                <p className='skill'>{skill.title}</p>
              ))}
              {/* <p className='skill'>HTML</p>
              <p className='skill'>CSS</p>
              <p className='skill'>JavaScript</p>
              <p className='skill'>JavaScript</p>
              <p className='skill'>JavaScript</p>
              <p className='skill'>JavaScript</p>
              <p className='skill'>JavaScript</p>
              <p className='skill'>JavaScript</p>
              <p className='skill'>JavaScript</p> */}
            </div>
          </div>
          <div className='links'>
            <a className='link' href={project.urlGithub} target='_blank' rel='noreferrer'>
              Github
            </a>
            <a className='link' href={project.urlWebsite} target='_blank' rel='noreferrer'>
              Site do projeto
            </a>
          </div>
        </div>
        <div className='separation-bar' />
      </ContainerProject>
    </MoreDetailsContainer>
  );
}

export default View;
