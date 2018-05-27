import {createMuiTheme} from '@material-ui/core/styles';
import {colors, fonts} from '../styles/globals';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        color: colors.white,
      },
    },
  },
  fonts,
  colors,
});

export default theme;
