import { Container } from '@mui/material';
import React from 'react';
import { Section } from 'src/components/styles/section';
import View from 'src/views/admin/home/View';

function Register() {
  return (
    <Section>
      <Container sx={{ pt: 3 }}>
        <View />
      </Container>
    </Section>
  );
}

export default Register;
