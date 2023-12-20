import styled from 'styled-components';
import { colors, fonts } from '../style/theme';

export const GradientBar = styled.div`
  width: 100%;
  height: 2px;
  /* background: linear-gradient(90deg, #808e9b 9%, #5a87ae 31%, #0be881 61%, #ff3f34 91%); */
  background-color: ${colors.corDestaque};
`;

export const MobileGradientBar = styled(GradientBar)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: $cordestaque;
  /* background: linear-gradient(90deg, #808e9b 9%, #5a87ae 31%, #0be881 61%, #ff3f34 91%); */
  display: grid;
  place-items: center;
`;

export const Section = styled.section`
  height: 100vh;
  width: 100%;
  /* border: 1px solid white; */
`;

export const SectionTitle = styled.h2`
  padding: 15px;
  color: ${colors.cor2};
  text-align: center;
  font-weight: 400;
  font-size: 1%.7;
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
