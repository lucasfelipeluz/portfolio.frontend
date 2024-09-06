import { Theme } from '@mui/material';
import { grey } from '../colors';

const scrollbar = (theme: Theme) => ({
  '::-webkit-scrollbar-track': {
    backgroundColor: theme.palette.background.default,
  },

  '::-webkit-scrollbar': {
    width: '6px',
  },

  '::-webkit-scrollbar-thumb': {
    background: grey[600],
  },
});

export default scrollbar;
