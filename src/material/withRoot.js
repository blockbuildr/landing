import React from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from './muiTheme';

function withRoot(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
