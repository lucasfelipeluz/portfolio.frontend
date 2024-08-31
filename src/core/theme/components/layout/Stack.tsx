import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const StackTheme: Components<Omit<Theme, 'components'>>['MuiStack'] = {
  defaultProps: {
    useFlexGap: true,
    direction: 'row',
  },
};

export default StackTheme;
