import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import scrollbar from '../../styles/scrollbar';
import simplebar from '../../styles/simplebar';
import echart from '../../styles/echart';

const CssBaselineTheme: Components<Omit<Theme, 'components'>>['MuiCssBaseline'] = {
  defaultProps: {},
  styleOverrides: (theme) => ({
    '*, *::before, *::after': {
      margin: 0,
      padding: 0,
    },
    html: {
      scrollBehavior: 'smooth',
    },
    body: {
      fontVariantLigatures: 'none',
      backgroundColor: theme.palette.background.default,
      ...scrollbar(theme),
    },
    ...simplebar(theme),
    ...echart(),
  }),
};

export default CssBaselineTheme;
