import { ListItem } from '@mui/material';
import { MenuList as List } from 'src/components/styles/list';
import { NavItensProps } from 'src/types/Components';
import DarkModeIcon from '../icon/DarkModeIcon';
import { MenuListLink } from '../styles/link';

interface Props {
  data: NavItensProps[];
}

export default function MenuList({ data }: Props) {
  return (
    <List>
      {data.map((item, index) => (
        <ListItem className={`${item.classNames}`} key={index as number}>
          <MenuListLink href={`/#${item.classNames}`}>{item.name}</MenuListLink>
        </ListItem>
      ))}
      <DarkModeIcon />
    </List>
  );
}
