import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';
import withRoot from '../../material/withRoot';

class Main extends Component {
  render() {
    return (
      <div className="main">
        hello world
      </div>
    );
  }
}
export default withRoot(withStyles(styles)(Main));