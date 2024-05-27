import React from 'react';
import { useForm } from 'react-hook-form';
import { LoginForm } from '../style/Login';
import { Alert, Button } from '@mui/material';
import { LoginVariant } from 'mdi-material-ui';
import { LoginProps } from '../core/types/Services';

interface Props {
  onSubmit: any;
}

export default function NicknameLoginComponent({ onSubmit }: Props) {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginProps>();

  return (
    <LoginForm className="login-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue=""
          value="string"
          type="text"
          className="form-control"
          placeholder="Nome de usuário"
          {...register('nickname', { required: true })}
        />
        {errors.nickname && (
          <Alert sx={{ mt: 3 }} severity="warning">
            Nickname is required!
          </Alert>
        )}

        <input
          defaultValue=""
          value="string"
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
