import styled from 'styled-components';

import { colors, fonts } from './theme';

export const Section = styled.section`
  height: 100vh;
  width: 100%;
`;

export const Button = styled.button`
  background-color: ${colors.dark2};
  border: none;
  color: ${colors.letras};
  padding: 10px;
  transition: 0.1s linear;
  border-radius: 5px;

  &:hover {
    background-color: ${colors.corDestaque};
  }
`;

export const SeparatorBar = styled.div`
  display: none;
  width: 1px;
  height: 90%;
  margin-top: 25px;
  background-color: ${colors.cor1};

  @media (min-width: 992px) {
    display: block;
  }
`;
