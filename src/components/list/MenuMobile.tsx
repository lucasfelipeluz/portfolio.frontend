import React from 'react';
import { ListItem } from '@mui/material';
import { NavItensProps } from 'src/types/Components';
import { MenuMobileList as List } from 'src/components/styles/list';
import { MenuMobileLink } from '../styles/link';

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
          <MenuMobileLink href={`#${item.classNames}`}>{item.name}</MenuMobileLink>
        </ListItem>
      ))}
    </List>
  );
}
