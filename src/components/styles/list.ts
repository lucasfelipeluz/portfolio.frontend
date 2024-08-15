import { List as MuiList, styled } from '@mui/material';

export const MenuList = styled(MuiList)(() => ({
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

export const MenuMobileList = styled(MuiList)(() => ({
  margin: '60px 0 50px 0',
  height: '90%',
  display: 'grid',
  gap: '10px',
  placeItems: 'center',
  listStyleType: 'none',
}));
