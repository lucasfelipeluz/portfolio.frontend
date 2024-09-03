import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Eye } from 'mdi-material-ui';
import { ChangeEvent, FormEvent, useState } from 'react';
import { LoginContainer } from 'src/components/styles/container';
import { LoginLine } from 'src/components/styles/line';

interface User {
  [key: string]: string;
}

function Login() {
  const [user, setUser] = useState<User>({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <LoginContainer>
      <Box>
        <Typography align='center' variant='h4'>
          Portfolio Administration
        </Typography>
        <Divider sx={{ my: 3, color: 'text.primary' }}>Register</Divider>
        <Stack onSubmit={handleSubmit} component='form' direction='column' gap={2}>
          <TextField
            id='email'
            name='email'
            type='email'
            value={user.email}
            onChange={handleInputChange}
            variant='filled'
            placeholder='Your Name'
            autoComplete='email'
            fullWidth
            autoFocus
            required
          />
          <TextField
            id='email'
            name='email'
            type='email'
            value={user.email}
            onChange={handleInputChange}
            variant='filled'
            placeholder='Your Nickname'
            autoComplete='email'
            fullWidth
            autoFocus
            required
          />
          <TextField
            id='email'
            name='email'
            type='email'
            value={user.email}
            onChange={handleInputChange}
            variant='filled'
            placeholder='Your Email (Optional)'
            autoComplete='email'
            fullWidth
            autoFocus
            required
          />
          <TextField
            id='password'
            name='password'
            type={showPassword ? 'text' : 'password'}
            value={user.password}
            onChange={handleInputChange}
            variant='filled'
            placeholder='Your Password'
            autoComplete='current-password'
            fullWidth
            autoFocus
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position='end' sx={{ opacity: user.password ? 1 : 0 }}>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={() => setShowPassword(!showPassword)}
                    edge='end'
                  >
                    <Eye />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button type='submit' variant='contained' size='medium' fullWidth>
            Submit
          </Button>
          <Typography
            my={3}
            color='text.secondary'
            variant='body2'
            align='center'
            letterSpacing={0.5}
          >
            Already have an account? <Link href='/admin/login'>Log in</Link>
          </Typography>
        </Stack>
      </Box>
      <LoginLine />
    </LoginContainer>
  );
}

export default Login;
