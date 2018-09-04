import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '../Typography';
import styles from './styles';
import Button from '../Button';
import Logo from '../../svgs/hero.svg';

const Hero = ({classes}) => {
  window.particlesJS.load('particles-js', './particles.json');

  return (
    <div className={classes.container}>
      <div id="particles-js" className={classes.particle} />
      <Grid
        className={classes.gridContainer}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <img src={Logo} />
        </Grid>

        <Grid item className={classes.subTitleContainer}>
          <Typography className={classes.subTitle}>
            Creating end-to-end custom designs and software.  We focus on solving
            world changing problems with modern technologies.
          </Typography>
        </Grid>

        <Grid item>
          <Button className={classes.button}>
            <Typography>GET STARTED</Typography>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);
