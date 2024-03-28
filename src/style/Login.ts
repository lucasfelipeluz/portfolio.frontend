import styled from 'styled-components';
import { colors, fonts } from './theme';

export const LoginContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
  height: 100%;

  @media (min-width: 768px) {
    grid-template-columns: 40% 1fr;
    grid-template-rows: 100vh;
  }
`;

export const LoginSideBar = styled.div`
  background-color: ${colors.dark};
  overflow-x: hidden;
  padding-top: 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-main-text {
    padding: 20px;
    color: #fff;

    h2 {
      font-weight: 300;
    }
  }
`;

export const LoginMainContainer = styled.div`
  padding: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  /* @media (min-width: 768px) {
    margin-left: 40%;
  } */
`;

export const LoginForm = styled.div`
  margin-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .form-group {
      flex-grow: 1;
      width: 90%;
      max-width: 550px;
    }

    .btn {
      margin-top: 30px;
    }
  }
`;
