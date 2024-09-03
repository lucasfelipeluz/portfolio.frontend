import { useState } from 'react';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ArrowBackIos, ArrowBackIosNew, ArrowForwardIos, Google } from '@mui/icons-material';

interface Props {
  title: string;
  icon: React.ReactNode;
}

export default function AdminSidebarCollapseListItem({ title, icon }: Props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText
          primary={title}
          sx={{
            '& .MuiListItemText-primary': 'primary.main',
          }}
        />
        <ArrowForwardIos
          sx={{
            transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease-in-out',
          }}
        />
      </ListItemButton>

      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItemButton
            key='/login'
            component={Link}
            href='/login'
            sx={{
              pl: 1.75,
              borderLeft: 4,
              borderStyle: 'solid',
              borderColor: 'primary.main',
              bgcolor: 'info.dark',
            }}
          >
            <ListItemText
              primary='/login'
              sx={{
                '& .MuiListItemText-primary': {
                  color: 'text.primary',
                },
              }}
            />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}
