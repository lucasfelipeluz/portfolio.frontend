import Link from '@mui/material/Link';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ReactNode, useState } from 'react';

interface Props {
  title: string;
  icon: ReactNode;
  href: string;
}

export default function AdminSidebarListItem({ title, icon, href }: Props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ListItemButton
      component={Link}
      href={href}
      onClick={handleClick}
      sx={{ opacity: active ? 1 : 0.3 }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText
        primary={title}
        sx={{
          '& .MuiListItemText-primary': 'primary.main',
        }}
      />
    </ListItemButton>
  );
}
