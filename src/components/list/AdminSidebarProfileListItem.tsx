import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';

export default function AdminSidebarProfileListItem() {
  return (
    <ListItemButton component={Link} href='/'>
      <Stack spacing={1} alignItems='center'>
        <Avatar src='/' sx={{ height: 36, width: 36, bgcolor: 'primary.main' }} />
        <Stack direction='column'>
          <Typography variant='subtitle2' color='text.primary' letterSpacing={0.5}>
            Lucas Fe
          </Typography>
          <Typography variant='caption' color='text.secondary' fontWeight={400}>
            Account Settings
          </Typography>
        </Stack>
      </Stack>
    </ListItemButton>
  );
}
