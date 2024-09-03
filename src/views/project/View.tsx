import React, { useEffect, useState } from 'react';
import { ArrowBack, Start } from '@mui/icons-material';
import { Box, Container, IconButton, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import Carousel from 'react-material-ui-carousel';
import {
  ActionsProjectDetails,
  DescriptionProjectDetails,
  ProjectDetails,
  SlideProjectDetails,
} from 'src/components/styles/container';
import { LinkProjectDetails } from 'src/components/styles/link';
import { SkillProjectDetails } from 'src/components/styles/typography';
import useHomeServices from 'src/hooks/useServices/useHomeServices';
import { Project } from 'src/types/Project';
import { ProjectImage } from 'src/types/ProjectImage';
import { formatISODateToBRDate } from 'src/utils/helpers';
import { SeparatorProjectDetails } from 'src/components/styles/line';
import HomeLayout from 'src/components/layouts/Home';

function Item({ img }: { img: ProjectImage }) {
  return (
    <div style={{ height: '350px' }}>
      <img
        src={img.path}
        style={{ height: '100%', width: '100%', objectFit: 'contain' }}
        alt='ok'
      />
    </div>
  );
}

interface Props {
  id: number;
}

function View({ id }: Props) {
  const { data, refetch } = useHomeServices.getHomeProject(id);

  const [project, setProjectData] = useState<Project>();

  useEffect(() => {
    if (data) {
      setProjectData(data);
    }
    refetch();
  }, [data, project]);

  const router = useRouter();

  const onHandleToBackPage = () => {
    router.back();
  };

  return (
    <HomeLayout showFooter>
      <Box className='container-fluid container-lg'>
        <ProjectDetails>
          <ActionsProjectDetails className='actions'>
            <IconButton
              onClick={() => {
                onHandleToBackPage();
              }}
            >
              <ArrowBack sx={{ color: 'text.primary' }} />
            </IconButton>
            <Typography className='title'>Voltar</Typography>
          </ActionsProjectDetails>
          {project ? (
            <>
              <SlideProjectDetails>
                <div className='slide'>
                  <Carousel>
                    {project?.images.map((img) => <Item key={img.id} img={img} />)}
                  </Carousel>
                </div>
              </SlideProjectDetails>
              <DescriptionProjectDetails>
                <Typography variant='h5'>{project.title}</Typography>
                <Typography variant='body1' marginBottom='10px'>
                  {project.description}
                  <Box marginBottom='15px'>
                    <Typography variant='body2'>
                      Iniciado em: {formatISODateToBRDate(project.startedAt)}
                    </Typography>
                    {project.finishedAt && (
                      <Typography variant='body2'>
                        Terminado em: {formatISODateToBRDate(project.finishedAt)}
                      </Typography>
                    )}
                  </Box>
                  <Box sx={{ marginBottom: '15px' }}>
                    <Typography variant='body1'>Tecnologias utilizadas:</Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'start',
                        gap: '10px',
                        flexWrap: 'wrap',
                        padding: '5px 0',
                      }}
                    >
                      {project.skills.map((skill) => (
                        <SkillProjectDetails>{skill.title}</SkillProjectDetails>
                      ))}
                    </Box>
                  </Box>
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    gap: '10px',
                    height: '50px',
                  }}
                >
                  <LinkProjectDetails
                    sx={{
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    href={project.urlGithub}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Github
                  </LinkProjectDetails>
                  <LinkProjectDetails
                    sx={{
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    href={project.urlWebsite}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Site do projeto
                  </LinkProjectDetails>
                </Box>
              </DescriptionProjectDetails>
            </>
          ) : (
            <Typography>Carregando...</Typography>
          )}
          <SeparatorProjectDetails />
        </ProjectDetails>
      </Box>
    </HomeLayout>
  );
}

export default View;
