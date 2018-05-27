import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '../Typography';
import styles from './styles';

const Footer = ({classes}) => {
  return (
    <Grid
      container
      className={classes.footer}
      direction="row"
      alignItems="center"
      justify="space-between"
    >
      <Grid item>
        <Typography
          className={classes.copyright}
          variant="title"
          color="inherit"
        >
          Copyright © Blockbuildr 2018 • All Rights Reserved
        </Typography>
      </Grid>

      <Grid item>
        <Grid container direction="row" alignItems="center">
          <Grid item>
            <Typography
              className={classes.privacyPolicy}
              variant="title"
              color="inherit"
            >
              Privacy Policy
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              className={classes.separator}
              variant="title"
              color="inherit"
            >
              •
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              className={classes.termsOfUse}
              variant="title"
              color="inherit"
            >
              Terms of Use
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
