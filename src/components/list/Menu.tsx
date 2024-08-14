import { ListItem } from '@mui/material';
import React from 'react';
import { NavItensProps } from 'src/types/Components';
import { MenuList as List } from 'src/components/styles/list';
import { MenuListLink } from '../styles/link';

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
          <MenuListLink href={`#${item.classNames}`}>{item.name}</MenuListLink>
        </ListItem>
      ))}
    </List>
  );
}
