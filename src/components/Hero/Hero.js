import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '../Typography';
import styles from './styles';
import Button from '../Button';

const Hero = ({classes}) => {
  return (
    <Grid
      container
      className={classes.container}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <div className={classes.imageHolder} />
      </Grid>

      <Grid
        container
        direction="row"
        justify="center"
        className={classes.blockbuildr}
      >
        <Grid item>
          <Typography variant="title" className={classes.block}>
            Block
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="title" className={classes.buildr}>
            buildr
          </Typography>
        </Grid>
      </Grid>

      <Grid item className={classes.subTitleContainer}>
        <Typography className={classes.subTitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        </Typography>
      </Grid>

      <Grid item>
        <Button className={classes.button}>
          <Typography>GET STARTED</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);
