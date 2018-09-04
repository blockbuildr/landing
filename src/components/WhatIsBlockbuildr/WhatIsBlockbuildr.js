import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '../Typography';
import styles from './styles';
import Button from '../Button';
import Computer from '../../svgs/what-is-bb.svg';

const WhatIsBlockbuildr = ({classes}) => {
  return (
    <Grid
      className={classes.container}
      container
      direction="row"
      justify="center"
    >
      <Grid item>
        <img src={Computer} />
      </Grid>

      <Grid item>
        <Grid
          container
          direction="column"
          justify="space-between"
          className={classes.textContainer}
        >
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="title" className={classes.header}>
                  What is Blockbuildr?
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="title" className={classes.subheader}>
                  Specializing in blockchain and software technologies
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="title" className={classes.description}>
                  Developing blockchain and software solutions since 2016, Blockbuildr
                  creates robust solutions and streamlines your business processes.
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Button className={classes.button}>
              <Typography className={classes.buttonText}>Contact Us</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

WhatIsBlockbuildr.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WhatIsBlockbuildr);
