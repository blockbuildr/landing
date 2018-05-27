import {createMuiTheme} from '@material-ui/core/styles';
import {colors, fonts} from '../styles/globals';

const theme = createMuiTheme({
  typography: {
    root: {
      color: colors.white,
    },
  },
  fonts,
  colors,
});

export default theme;
