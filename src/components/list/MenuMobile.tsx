import React from 'react';
import { List as MuiList, ListItem, styled, Link as MuiLink } from '@mui/material';
import { NavItensProps } from 'src/types/Components';

const List = styled(MuiList)(() => ({
  margin: '60px 0 50px 0',
  height: '90%',
  display: 'grid',
  gap: '10px',
  placeItems: 'center',
  listStyleType: 'none',
}));

const Link = styled(MuiLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  width: '100%',
  height: '100%',
  fontSize: '22px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',

  '&:after': {
    transition: '0.3s',
    content: '""',
    width: '40px',
    height: '2px',
    background: 'red',
    position: 'absolute',
    opacity: 0,
  },

  '&:hover:after': {
    opacity: 1,
    content: '""',
    height: '2px',
    background: '#1ad78a',
    position: 'absolute',
  },
}));

interface Props {
  itens: NavItensProps[];
  handleCloseMenu: () => void;
}

export default function MenuMobileList({ itens, handleCloseMenu }: Props) {
  return (
    <List>
      {itens.map((item, index) => (
        <ListItem
          sx={{ width: '100%', height: '50px' }}
          onClick={handleCloseMenu}
          key={index as number}
        >
          <Link href={`#${item.classNames}`}>{item.name}</Link>
        </ListItem>
      ))}
    </List>
  );
}
