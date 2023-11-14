import styled from 'styled-components';
import { colors, fonts } from '../style/theme';

export const UnavailableStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${colors.letras};
  height: 100vh;

  .img-dev {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    img {
      width: 380px;
      @media (min-width: 992px) {
        width: 520px;
      }
    }
  }
`;

export const UnavailableInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;

  h1 {
    font-size: 22px;
  }
  p {
    margin-top: 20px;
    font-size: 15px;

    a {
      text-decoration: none;
    }
  }
`;

export const UnavailableHelpfulLink = styled.div`
  display: flex;
  flex-direction: column;
  .btns {
    display: flex;
    justify-content: space-around;

    button {
      padding: 5px;
      background-color: ${colors.corDestaque};
      border: 1px solid ${colors.corDestaque};
      border-radius: 2px;
      color: ${colors.cor2};
      transition: 0.1s linear;
      font-family: ${fonts.font2};

      &:hover {
        box-shadow: rgba(255, 255, 255, 0.24) 0px 3px 8px;
      }
    }
  }
  .info-porque {
    margin-top: 20px;
    text-align: center;
    padding: 0 20px;
    height: 10px;
    opacity: 0;
    transition: 0.1s linear;
    font-size: 15px;
    z-index: 1;
    max-width: 600px;

    &.ativo {
      opacity: 1;
      height: 100px;
    }
    a {
      text-decoration: none;
    }
  }

  .links-uteis {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    gap: 20px;
    color: ${colors.cor1};
    transition: 0.3s;

    .link {
      z-index: 1000;
      width: 50px;
      height: 50px;
      /* border-radius: 100%; */
      color: ${colors.cor2};
      font-size: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      transition: 0.3s;
      text-align: start;
      padding: 10px;

      i {
        z-index: 2;
      }

      &:hover {
        color: ${colors.corDestaque};
      }
    }
  }
`;

export const ToggleLanguageStyled = styled.div`
  width: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  bottom: 0;
  padding: 10px;
  margin-top: 50px;
  padding-bottom: 50px;

  button {
    background-color: transparent;
    color: ${colors.cor3};
    border: none;
    transition: 0.3s ease-in-out;

    &:hover {
      color: ${colors.corDestaque};
    }

    &.active {
      font-weight: bold;
    }
  }
`;
