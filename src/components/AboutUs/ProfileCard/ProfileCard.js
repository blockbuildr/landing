import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '../../Typography';
import styles from './styles';

const ProfileCard = ({classes, name}) => {
  return (
    <Grid className={classes.container} container direction="column" alignItems="center">
      <Grid item>
        <div className={classes.image} />
      </Grid>
      <Grid item>
        <Typography className={classes.name}>
          {name}
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.title}>
          Title
        </Typography>
      </Grid>
    </Grid>
  );
};

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

export default withStyles(styles)(ProfileCard);
