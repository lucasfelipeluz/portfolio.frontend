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
  font-weight: 200;
  font-size: 1%.7;
`;
