import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '../Typography';
import styles from './styles';
import FooterTop from './FooterTop/FooterTop';
import FooterBottom from './FooterBottom/FooterBottom';

const Footer = () => {
  return (
    <div>
      <FooterTop />
      <FooterBottom />
    </div>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Footer;
