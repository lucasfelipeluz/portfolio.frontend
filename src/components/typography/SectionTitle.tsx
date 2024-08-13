import { Typography } from '@mui/material';
import React from 'react';

interface Props {
  title: string;
}

export default function SectionTitle({ title }: Props) {
  return (
    <Typography variant='h4' fontWeight='400' textAlign='center'>
      {title}
    </Typography>
  );
}
