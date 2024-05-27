import React from 'react';
import { LoginForm } from '../style/Login';
import { useForm } from 'react-hook-form';
import { Alert, Button } from '@mui/material';
import { AccountPlus, LoginVariant } from 'mdi-material-ui';
import LoginType from '../core/enum/LoginType';
import { LoginProps } from '../core/types/Services';

interface Props {
  onSubmit: any;
}

export default function EmailLoginComponent({ onSubmit }: Props) {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginProps>();

  return (
    <LoginForm className="login-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            defaultValue=""
            value="lucasfelipe281199@gmail.com"
            type="text"
            className="form-control"
            placeholder="Email"
            {...register('email', { required: true })}
          />
          {errors.email && (
            <Alert sx={{ mt: 3 }} severity="warning">
              Email is required!
            </Alert>
          )}
        </div>
        <div className="form-group">
          <input
            defaultValue=""
            value="lucas2012"
            type="password"
            className="form-control"
            {...register('password', { required: true })}
            placeholder="Senha"
            style={{ marginTop: 20 }}
          />
          {errors.password && (
            <Alert sx={{ mt: 3 }} severity="warning">
              Password is required!
            </Alert>
          )}
        </div>

        <div className="btns">
          <Button
            type="submit"
            onClick={() => {}}
            variant="contained"
            color="primary"
            startIcon={<LoginVariant />}
          >
            Entrar
          </Button>
        </div>
      </form>
    </LoginForm>
  );
}
