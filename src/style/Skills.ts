import styled from 'styled-components';
import { SectionTitle } from './Globals';
import { colors } from './theme';

export const SkillsSection = styled.section`
  background-color: ${colors.dark};
  min-height: 100vh;
`;

export const SkillsSectionTitle = styled(SectionTitle)``;

export const SkillContent = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  color: white;
  min-height: 80vh;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 3px 1fr;
    height: 100%;
  }
`;

export const ContainerSkill = styled.div`
  padding: 30px 5px;

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
`;

export const StyleSkillDescription = styled.div`
  text-align: center;
  padding: 50px 10px;
  transition: 0.3s;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: start;

  @media (max-width: 992px) {
    display: none;
  }

  &.selected {
    opacity: 1;
  }
`;

export const StyleSkillButtons = styled.div`
  border: 1px solid ${colors.cor1};
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: 0.5s;

  .skill-header {
    transition: 0.5s;
    text-align: center;

    .skill-icon {
      font-size: 50px;
    }
  }

  .skill-content {
    display: none;
  }

  &:hover {
    border: 1px solid ${(props) => props.color};

    @media (min-width: 992px) {
      .skill-header {
        .skill-title,
        .skill-icon {
          color: ${(props) => props.color};
        }
      }
    }
  }

  // Mobile Behavior
  @media (max-width: 992px) {
    &.selected {
      flex-basis: 100%;
      min-height: 300px;
      height: auto;
      border: 1px solid ${colors.cor2};
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 80px 1fr;

      .skill-header {
        display: flex;
        justify-content: center;
        text-align: center;
        padding-left: 20px;

        .skill-icon {
          font-size: 30px;
        }
        .skill-title {
          padding-left: 10px;
          font-size: 20px;
          padding-bottom: 10px;
        }
      }
      .skill-content {
        padding: 30px;
        display: block;
        text-align: center;
      }
    }
  }
`;

export const HelperText = styled.p`
  display: none;
  color: #7a7a7a7f;
  font-weight: bold;
  text-align: center;

  @media (min-width: 992px) {
    display: block;
  }
`;
