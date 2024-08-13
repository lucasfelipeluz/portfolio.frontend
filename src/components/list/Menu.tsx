import { List as MuiList, ListItem, styled, Link as MuiLink } from '@mui/material';
import React from 'react';
import { NavItensProps } from 'src/types/Components';

const List = styled(MuiList)(() => ({
  display: 'none',

  '@media (min-width: 992px)': {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    listStyleType: 'none',
  },
}));

const Link = styled(MuiLink)(({ theme }) => ({
  height: '100%',
  transition: '0.5s',
  fontSize: '18px',
  color: theme.palette.text.primary,
  textDecoration: 'none',
  textAlign: 'center',

  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

interface Props {
  data: NavItensProps[];
}

export default function MenuList({ data }: Props) {
  return (
    <List>
      {data.map((item, index) => (
        <ListItem
          sx={{ position: 'relative' }}
          className={`${item.classNames}`}
          key={index as number}
        >
          <Link href={`#${item.classNames}`}>{item.name}</Link>
        </ListItem>
      ))}
    </List>
  );
}
