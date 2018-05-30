import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '../../Typography';
import styles from './styles';

const FooterTop = ({classes}) => {
  return (
    <Grid
      container
      className={classes.footer}
      direction="row"
      alignItems="center"
      justify="space-between"
    >
      <Grid item>
        <Grid
          container
          direction="column"
          alignItems="flex-start"
          justify="center"
        >
          <Grid item>
            <Typography className={classes.moreInfo} variant="title">
              More Information
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              className={classes.contactUs}
              variant="title"
              color="inherit"
            >
              Contact Us
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              className={classes.consulting}
              variant="title"
              color="inherit"
            >
              Consulting
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          alignItems="flex-start"
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.followUs}
              variant="title"
              color="inherit"
            >
              Follow Us
            </Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="center"
            >
              <Grid item>
                <div className={classes.logo} />
              </Grid>
              <Grid item>
                <div className={classes.logo} />
              </Grid>
              <Grid item>
                <div className={classes.logo} />
              </Grid>
              <Grid item>
                <div className={classes.logo} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

FooterTop.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FooterTop);
