import styled from 'styled-components';
import { colors, fonts } from './theme';

export const WelcomeStyled = styled.section`
  /* border: 1px solid white; */
  color: ${colors.cor2};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    /* border: 1px solid white; */
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const WelcomeInformationStyled = styled.div`
  /* border: 1px solid white; */
  width: 100%;
  text-align: center;
  margin-bottom: 200px;

  & > p {
    font-family: ${fonts.font1};
  }

  .hello,
  .position {
    font-size: 1.6rem;
  }
  .hello {
    line-height: 0;
  }
  .name {
    font-size: 4.2rem;
    font-weight: 500;
    line-height: 1;
  }
  .position {
    line-height: 1;
    margin-top: 10px;
  }

  @media (max-width: 500px) {
    .hello {
      margin-bottom: 10px;
    }
    .name {
      font-size: 3rem;
    }
  }

  @media (min-width: 992px) {
    margin-bottom: 0;

    & > p {
      text-align: left;
    }
    .hello,
    .position {
      font-size: 1.2rem;
    }
    .name {
      font-size: 4rem;
      margin-left: -4px;
    }
  }

  @media (min-width: 1200px) {
    .name {
      font-size: 4.8rem;
      margin-left: -4px;
    }
  }
`;

export const DeveloperIlustrationStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 80px;
  /* border: 1px solid white; */
`;

export const WelcomeIllustrationDeveloperStyled = styled('img')`
  position: relative;
  z-index: 3;
  width: 80%;
  height: 100%;

  @media (max-width: 991px) {
    display: none;
  }
`;
