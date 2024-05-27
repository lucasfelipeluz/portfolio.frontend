import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Button, Tab } from '@mui/material';
import { Github, Google, IncognitoCircle } from 'mdi-material-ui';
import React, { useState } from 'react';
import { SubmitHandler, set } from 'react-hook-form';
import EmailLoginComponent from '../components/EmailLogin';
import NicknameLoginComponent from '../components/NicknameLogin';
import { useAuth } from '../context/AuthContext';
import LoginType from '../core/enum/LoginType';
import { LoginProps } from '../core/types/Services';
import {
  AnotherWayToSignIn,
  LoginContainer,
  LoginMainContainer,
  LoginSideBar,
} from '../style/Login';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [loginType, setLoginType] = useState<string>(LoginType.Default.toString());

  const onSubmit: SubmitHandler<LoginProps> = async (data) => {
    data.type = parseInt(loginType) as LoginType;

    const response = await login(data);

    if (response.success) {
      // navigate('/admin/home');
      console.log(response.message);
    } else {
      console.log('error', response.message);
    }
  };

  const onSubmitAnonymus = async () => {
    const data: LoginProps = {
      nickname: '',
      email: '',
      password: '',
      type: LoginType.Anonymous,
    };

    const response = await login(data);

    if (response.success) {
      console.log(response.message);
    } else {
      console.log('error', response.message);
    }
  };

  return (
    <LoginContainer>
      <LoginSideBar className="sidenav">
        <div className="login-main-text">
          <h2>
            <strong style={{ fontWeight: 'bold' }}>Portfolio</strong>
            <br /> Administrator Page
          </h2>
        </div>
      </LoginSideBar>
      <LoginMainContainer className="main">
        <div>
          <TabContext value={loginType}>
            <TabList
              onChange={(e, newValue) => setLoginType(newValue)}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
              }}
            >
              <Tab value={LoginType.Default.toString()} label="Login com NickName" />
              {/* <Tab value={LoginType.Email.toString()} label="Login com Email" /> */}
            </TabList>
            <TabPanel value={LoginType.Default.toString()}>
              <NicknameLoginComponent onSubmit={onSubmit} />
            </TabPanel>
            <TabPanel value={LoginType.Email.toString()}>
              <EmailLoginComponent onSubmit={onSubmit} />
            </TabPanel>
          </TabContext>
          <AnotherWayToSignIn>
            {/* <Button startIcon={<Google />} variant="outlined" color="info">
              Entrar com google
            </Button>
            <Button startIcon={<Github />} variant="outlined" color="info">
              Entrar com Github
            </Button> */}
            <Button
              startIcon={<IncognitoCircle />}
              variant="outlined"
              color="info"
              onClick={onSubmitAnonymus}
            >
              Entre como visitante
            </Button>
          </AnotherWayToSignIn>{' '}
        </div>
      </LoginMainContainer>
    </LoginContainer>
  );
}
