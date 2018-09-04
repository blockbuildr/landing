import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';
import withRoot from '../../material/withRoot';
import Header from '../Header';
import Footer from '../Footer';
import Hero from '../Hero';
import WhatIsBlockbuildr from '../WhatIsBlockbuildr';
import StayInformed from '../StayInformed';
import Features from '../Features';
import HowItWorks from '../HowItWorks';
import BlockbuildrWhitepaper from '../BlockbuildrWhitepaper';
import UseCases from '../UseCases';
import Roadmap from '../Roadmap';
import AboutUs from '../AboutUs';
import Faq from '../Faq';

class Main extends Component {
  render() {
    return (
      <div className={this.props.classes.main}>
        <Header />
        <Hero />
        <WhatIsBlockbuildr />
        <Features />
        <UseCases />
        <Faq />
        <StayInformed />
        <Footer />
      </div>
    );
  }
}
export default withRoot(withStyles(styles)(Main));
