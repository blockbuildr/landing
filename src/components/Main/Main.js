import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';
import withRoot from '../../material/withRoot';
import Header from '../Header';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        hello world
      </div>
    );
  }
}
export default withRoot(withStyles(styles)(Main));
