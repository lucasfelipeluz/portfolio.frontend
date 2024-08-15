import { IconButton, ListItem } from '@mui/material';
import React from 'react';
import { NavItensProps } from 'src/types/Components';
import { MenuList as List } from 'src/components/styles/list';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useSettings } from 'src/core/context/settingsContext';
import { MenuListLink } from '../styles/link';

interface Props {
  data: NavItensProps[];
}

export default function MenuList({ data }: Props) {
  const { toggleLayoutMode, layoutMode } = useSettings();

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
      <IconButton onClick={toggleLayoutMode}>
        {layoutMode === 'dark' ? <DarkMode /> : <LightMode />}
      </IconButton>
    </List>
  );
}
