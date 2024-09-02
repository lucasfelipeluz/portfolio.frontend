import { House, Person, Phone, Psychology, Search, Work } from '@mui/icons-material';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import AdminSidebarCollapseListItem from '../list/AdminSidebarCollapseListItem';
import AdminSidebarListItem from '../list/AdminSidebarListItem';

export default function AdminSidebarItems() {
  return (
    <>
      <Stack
        pt={5}
        pb={4}
        px={3.5}
        position='sticky'
        top={0}
        bgcolor='info.darker'
        alignItems='center'
        justifyContent='flex-start'
        zIndex={1000}
      >
        <ButtonBase component={Link} href='/' disableRipple>
          <Typography variant='h5' color='text.primary' fontWeight={600} letterSpacing={1}>
            Portfolio Admin
          </Typography>
        </ButtonBase>
      </Stack>

      {/* <Box px={3.5} pb={3} pt={1}>
        <TextField
          variant='filled'
          placeholder='Search for...'
          sx={{ width: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Box> */}

      <List component='nav' sx={{ px: 2.5 }}>
        <AdminSidebarListItem title='Home' icon={<House />} href='/' />
        <AdminSidebarListItem title='Projects' icon={<Work />} href='/admin/projects' />
        <AdminSidebarListItem title='Skills' icon={<Psychology />} href='/admin/skills' />
        <AdminSidebarListItem title='Contacts' icon={<Phone />} href='/admin/contacts' />
      </List>

      <Divider />

      <List component='nav' sx={{ px: 2.5 }}>
        <AdminSidebarCollapseListItem title='Account' icon={<Person />} />
      </List>

      {/* <List component='nav' sx={{ px: 2.5 }}>
        <AdminSidebarProfileListItem />
      </List> */}

      <Box px={3.5} py={6} width={1}>
        {/* <Button
          variant='contained'
          color='primary'
          size='large'
          endIcon={<Google />}
          sx={{ width: 1 }}
        >
          Get template
        </Button> */}
      </Box>
    </>
  );
}
