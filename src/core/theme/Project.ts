import styled from 'styled-components';
import Link from 'next/link';
import { colors, fonts } from './theme';
import { Button, Section } from './globals';

export const ProjectSection = styled(Section)`
  min-height: 100vh;
  height: auto;
  padding-bottom: 25px;
`;

export const ProjectContentSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  margin-top: 35px;
  justify-items: center;

  @media (min-width: 725px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ProjectCardStyled = styled.div`
  color: ${colors.letras};
  background-color: ${colors.dark};
  height: 350px;
  width: 350px;
  display: grid;
  grid-template-rows: 1fr 3fr 1fr 1fr;
  padding: 5px 15px;
  border-radius: 10px;
  max-width: 400px;

  @media (min-width: 725px) {
  }

  .container-title .title {
    text-align: center;
    font-size: 1.5rem;
  }

  .description {
    padding: 10px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
    flex-wrap: nowrap;

    a {
      background-color: ${colors.dark2};
      padding: 5px 10px;
      font-size: 0.8rem;
      text-decoration: none;
      color: ${colors.letras};
      transition: 0.1s linear;
      border-radius: 5px;

      &:hover {
        background-color: ${colors.corDestaque};
      }
    }
  }

  .more-info {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      background-color: ${colors.dark2};
      padding: 5px;
      font-size: 0.8rem;
      text-decoration: none;
      color: ${colors.letras};
      transition: 0.1s linear;
      border: none;
      padding: 5px 10px;
      width: 100%;
      height: 80%;
      border-radius: 5px;

      &:hover {
        background-color: ${colors.corDestaque};
      }
    }
  }
`;

export const ContainerButtonSeeAllProjects = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

export const ButtonSeeAllProjects = styled(Button)`
  width: 90%;
  max-width: 400px;

  @media (min-width: 725px) {
    max-width: none;
    width: 100%;
  }
`;

export const MoreDetailsContainer = styled.div`
  display: flex;
  color: ${colors.letras};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2000;
  background-color: ${colors.dark2};
  transition: 0.5s linear;
`;

export const ContainerProject = styled.div`
  background-color: ${colors.dark};
  height: 100%;
  padding: 60px 0px 20px 0px;
  position: relative;
  display: grid;
  gap: 10px;
  position: relative;
  overflow-y: auto;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 10px 1.5fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    width: 95%;
    padding: 60px 20px 20px 20px;
    gap: 20px;
  }

  .actions {
    /* border: 1px solid white; */
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    .title {
      font-size: 1.5rem;

      @media (min-width: 992px) {
        opacity: 0;
      }
    }

    .fas {
      position: absolute;
      left: 10px;
      font-size: 2rem;

      @media (min-width: 992px) {
        left: 30px;
      }
    }
  }

  .slide-photos {
    /* border: 1px solid white; */
    margin-bottom: 30px;

    .carousel {
      width: 100%;
    }

    @media (min-width: 992px) {
      grid-row: 1/5;
      grid-column: 3/4;
      margin-bottom: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .slide {
      width: 100%;
    }
  }

  .description {
    padding: 0 15px;

    @media (min-width: 992px) {
      grid-row: 1/5;
      grid-column: 1/2;
    }

    .title-project {
      display: none;

      @media (min-width: 992px) {
        display: block;
        font-size: 1.9rem;
        margin-bottom: 50px;
      }
    }

    .text {
      font-size: 15px;
      margin-bottom: 20px;
    }

    .duration {
      font-size: 12px;
      margin-bottom: 20px;
    }

    .skills {
      margin-bottom: 50px;

      .title-skills {
        font-size: 15px;
        margin-bottom: 5px;
      }

      .content-skill {
        display: flex;
        justify-content: start;
        gap: 10px;
        flex-wrap: wrap;

        .skill {
          background-color: ${colors.dark2};
          padding: 8px;
          border-radius: 5px;
          font-size: 12px;
        }
      }
    }

    .links {
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
      gap: 10px;

      .link {
        text-decoration: none;
        background-color: ${colors.dark2};
        width: 100%;
        border-radius: 5px;
        text-align: center;
        padding: 8px;
        color: ${colors.letras};
      }
    }
  }

  .separation-bar {
    display: none;

    @media (min-width: 992px) {
      display: grid;
      grid-row: 1/5;
      grid-column: 2;
      background-color: ${colors.cor3};
      width: 1px;
      height: 95%;
    }
  }
`;

export const InfoContainerProjectDetail = styled.div`
  display: grid;
  grid-template-rows: 50px 1.5fr 1fr 60px;
  width: 100%;

  .title {
    display: grid;
    grid-template-columns: 50px 1fr;
    gap: 20px;
    align-items: center;
    justify-items: center;

    button {
      background-color: ${colors.dark};
      color: ${colors.letras};
      /* position: absolute;
          top: 10px;
          left: 10px; */
      font-size: 2rem;
      border: none;
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .text {
      margin-top: 10px;
    }
  }

  .container-skills {
    border-top: 1px solid white;
    display: grid;
    grid-template-rows: auto 1fr;

    .title-skills {
      padding-top: 5px;
      font-size: 1.2rem;
    }

    .skills {
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      align-content: start;
      gap: 10px;
      padding: 3px 0px;

      a {
        background-color: ${colors.dark2};
        padding: 5px 10px;
        font-size: 0.9rem;
        height: 31px;
        text-decoration: none;
        color: ${colors.letras};
        transition: 0.1s linear;
        border-radius: 5px;

        &:hover {
          background-color: ${colors.corDestaque};
        }
      }
    }
  }
  .links {
    border-top: 1px solid white;
    padding-top: 10px;

    display: flex;
    justify-content: space-around;
    align-items: start;
    gap: 10px;

    button {
      width: 100%;
    }
  }
`;

export const ImagesContainerProjectDetail = styled.div`
  display: none;
  height: 100%;
  width: 500px;
  padding: 10px;
  border-left: 1px solid white;
  justify-content: center;
  align-items: center;

  @media (min-width: 992px) {
    display: flex;
  }
`;

export const ProjectCardLink = styled(Link)`
  background-color: ${colors.cor1};
  width: 100%;
  text-align: center;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 5px;
  color: ${colors.letras};

  &:hover {
    color: ${colors.cor2};
    filter: saturate(1.5);
  }
`;
