import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '../Typography';
import styles from './styles';
import SignUp from './SignUp/SignUp';
import ContactUs from '../../svgs/contact-us.svg';

const StayInformed = ({classes}) => {
  return (
    <Grid
      container
      className={classes.container}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item>
        <Typography variant="title" className={classes.title}>
          Stay Informed
        </Typography>
      </Grid>

      <Grid item>
        <Grid
          container
          className={classes.containerInner}
          direction="row"
          alignItems="center"
          justify="center"
        >
          <Grid item>
            <img src={ContactUs} />
          </Grid>
          <Grid item>
            <SignUp />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

StayInformed.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StayInformed);
