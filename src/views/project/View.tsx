import React, { useEffect, useState } from 'react';
import { ArrowBack } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
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
import { NavItensProps } from 'src/types/Components';
import { useLanguage } from 'src/core/context/languageContext';
import strings from 'src/utils/strings';
import Header from 'src/components/header/HomeHeader';

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
  const { language } = useLanguage();
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

  const headerData: NavItensProps[] = [
    { name: strings.projects[language.code], classNames: strings.classNames.projects },
    { name: strings.skills[language.code], classNames: strings.classNames.skills },
    { name: strings.aboutMe[language.code], classNames: strings.classNames.aboutMe },
    { name: strings.contact[language.code], classNames: strings.classNames.contact },
  ];

  return (
    <>
      <Header data={headerData} />
      <ProjectDetails>
        <div className='container-project container-lg container-fluid'>
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
          <SlideProjectDetails>
            <div className='slide'>
              <Carousel>{project?.images.map((img) => <Item key={img.id} img={img} />)}</Carousel>
            </div>
          </SlideProjectDetails>
          {project ? (
            <DescriptionProjectDetails>
              <Typography variant='h5'>{project.title}</Typography>
              <Typography variant='body1' marginBottom='10px'>
                {project.description}
              </Typography>
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
              <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: '10px' }}>
                <LinkProjectDetails href={project.urlGithub} target='_blank' rel='noreferrer'>
                  Github
                </LinkProjectDetails>
                <LinkProjectDetails href={project.urlWebsite} target='_blank' rel='noreferrer'>
                  Site do projeto
                </LinkProjectDetails>
              </Box>
            </DescriptionProjectDetails>
          ) : (
            <Typography>Carregando...</Typography>
          )}
          <SeparatorProjectDetails />
        </div>
      </ProjectDetails>
    </>
  );
}

export default View;
