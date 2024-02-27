import styled from 'styled-components';
import { colors, fonts } from './theme';
import { Button, Section } from './Globals';

export const FooterSection = styled(Section)`
  height: 100px;
  margin-top: 50px;
  background-color: ${colors.dark};
  user-select: none;

  .container {
    display: flex;
    justify-content: end;
    align-items: center;
    height: 100%;

    .copyright {
      color: #435468;
      font-size: 1.2rem;
      font-family: ${fonts.font2};
    }
  }
`;
