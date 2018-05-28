import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';
import withRoot from '../../material/withRoot';
import Header from '../Header';
import Footer from '../Footer';
import Hero from '../Hero';
import WhatIsBlockbuildr from '../WhatIsBlockbuildr';

class Main extends Component {
  render() {
    return (
      <div className={this.props.classes.main}>
        <Header />
        <Hero />
        <WhatIsBlockbuildr />
        <Footer />
      </div>
    );
  }
}
export default withRoot(withStyles(styles)(Main));
