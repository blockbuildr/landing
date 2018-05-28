import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';
import withRoot from '../../material/withRoot';
import Header from '../Header';
import Footer from '../Footer';
import Hero from '../Hero';
import WhatIsBlockbuildr from '../WhatIsBlockbuildr';
<<<<<<< HEAD
import Features from '../Features';
=======
>>>>>>> e92d5a07c9a42c9bca51566fef74f90bda3590c4

class Main extends Component {
  render() {
    return (
      <div className={this.props.classes.main}>
        <Header />
        <Hero />
        <WhatIsBlockbuildr />
<<<<<<< HEAD
        <Features />
=======
>>>>>>> e92d5a07c9a42c9bca51566fef74f90bda3590c4
        <Footer />
      </div>
    );
  }
}
export default withRoot(withStyles(styles)(Main));
