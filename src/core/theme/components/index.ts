import { Components, Theme } from '@mui/material';
import CheckboxTheme from './inputs/Checkbox';
import FilledInputTheme from './inputs/FilledInput';
import FormControlLabelTheme from './inputs/FormControlLabel';
import InputAdornmentTheme from './inputs/InputAdornment';
import InputBaseTheme from './inputs/InputBase';
import OutlinedInputTheme from './inputs/OutlinedInput';
import TextFieldTheme from './inputs/TextField';
import ButtonTheme from './button/Button';
import ButtonBaseTheme from './button/ButtonBase';
import IconButtonTheme from './button/IconButton';
import ToolbarTheme from './button/Toolbar';
import ChipTheme from './data-display/Chip';
import DividerTheme from './data-display/Divider';
import StackTheme from './layout/Stack';
import ListTheme from './list/List';
import MenuItemTheme from './list/MenuItem';
import ListItemTextTheme from './list/ListItemText';
import ListItemIconTheme from './list/ListItemIcon';
import ListItemButtonTheme from './list/ListItemButton';
import CollapseTheme from './list/Collapse';
import DrawerTheme from './navigation/Drawer';
import PaginationItemTheme from './pagination/PaginationItem';
import PaperTheme from './surfaces/Paper';
import CssBaselineTheme from './utils/CssBaseline';
import TypographyTheme from './typography/Typography';

const components: Components<Omit<Theme, 'components'>> = {
  MuiButton: ButtonTheme,
  MuiButtonBase: ButtonBaseTheme,
  MuiIconButton: IconButtonTheme,
  MuiToolbar: ToolbarTheme,
  MuiChip: ChipTheme,
  MuiDivider: DividerTheme,
  MuiTextField: TextFieldTheme,
  MuiInputBase: InputBaseTheme,
  MuiFilledInput: FilledInputTheme,
  MuiOutlinedInput: OutlinedInputTheme,
  MuiInputAdornment: InputAdornmentTheme,
  MuiFormControlLabel: FormControlLabelTheme,
  MuiCheckbox: CheckboxTheme,
  MuiStack: StackTheme,
  MuiList: ListTheme,
  MuiMenuItem: MenuItemTheme,
  MuiListItemText: ListItemTextTheme,
  MuiListItemIcon: ListItemIconTheme,
  MuiListItemButton: ListItemButtonTheme,
  MuiCollapse: CollapseTheme,
  MuiDrawer: DrawerTheme,
  MuiPaginationItem: PaginationItemTheme,
  MuiPaper: PaperTheme,
  MuiCssBaseline: CssBaselineTheme,
  MuiTypography: TypographyTheme,
};

export default components;
