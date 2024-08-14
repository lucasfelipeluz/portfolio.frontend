import React, { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import { ContactLink as LinkStyled } from 'src/components/styles/link';

interface Props {
  color: string;
  link: string;
  title: string;
  target?: string;
  icon: ReactNode;
}

export default function ContactLink({ color, link, title, target, icon }: Props) {
  return (
    <LinkStyled href={link} className={title.trim().replace(' ', '-')} target={target}>
      <Box className='container-icon' style={{ backgroundColor: color }}>
        {icon}
      </Box>
      <Typography className='title'>{title}</Typography>
    </LinkStyled>
  );
}
