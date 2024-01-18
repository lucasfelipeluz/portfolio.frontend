import styled from 'styled-components';
import { colors, fonts } from './theme';
import { Button, Section } from './Globals';

export const ContactSection = styled(Section)`
  height: auto;
  margin-top: 50px;
`;

export const AboutMeCard = styled.div`
  background-color: ${colors.dark};
  height: 100%;
  display: grid;
  grid-template-rows: 200px 1fr 1fr;
  gap: 50px;
  padding: 80px 15px;
  border-radius: 10px;

  .img-container {
    grid-row: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 180px;
      height: 180px;
      object-fit: contain;
      border-radius: 100%;
    }
  }

  .line-separator {
    display: none;
  }

  .text-container {
    grid-row: 2;
    padding: 0 25px;
    color: ${colors.letras};
    text-align: center;
  }

  .contact-links {
    grid-row: 3;
    display: grid;
    grid-template-rows: 60px 60px;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 70px 15px 10px 15px;
    position: relative;

    .title-contact-links {
      position: absolute;

      width: 100%;
      color: ${colors.letras};
      text-align: center;
      font-size: 1.4rem;
    }
  }

  @media (min-width: 768px) {
    & {
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 10px 1fr;
      gap: 0px;
    }

    .img-container {
      grid-row: 1;
      grid-column: 1;
    }

    .text-container {
      grid-row: 2;
      grid-column: 1;
    }

    .contact-links {
      grid-row: 1/3;
      grid-column: 3;
    }

    .line-separator {
      grid-row: 1/3;
      grid-column: 2;

      content: '';
      display: block;
      background-color: ${colors.cor1};
      width: 1px;
    }
  }
`;

export const ContactLinkStyled = styled.a`
  background-color: ${colors.dark2};
  border-radius: 5px;
  overflow: hidden;
  padding: 10px 15px;
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease-in-out;
  height: 40px;

  &:hover {
    background-color: #334253;

    .container-icon {
      filter: saturate(1.7);
    }
  }

  .container-icon {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    color: ${colors.cor1};
  }

  .title {
    font-family: ${fonts.font1};
    font-size: 1rem;
    color: ${colors.letras};
    margin-left: 50px;
  }
`;
