import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '../Typography';
import styles from './styles';
import Button from '../Button';

const Roadmap = ({classes}) => {
  return (
    <Grid
      className={classes.container}
      container
      direction="column"
      alignItems="center"
    >
      <Grid item>
        <Typography variant="title" className={classes.header}>
          Roadmap
        </Typography>
      </Grid>

      <Grid container justify="center" className={classes.mapContainer}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.artContainer}
        >
          <Grid container className={classes.circle}>
            <Grid item className={classes.verticalLine} />
          </Grid>
          <Grid container className={classes.circle}>
            <Grid item className={classes.verticalLine} />
          </Grid>
          <Grid container className={classes.whiteCircle}>
            <Grid item className={classes.verticalLine} />
          </Grid>
          <Grid container className={classes.whiteCircle}>
            <Grid item className={classes.verticalLine} />
          </Grid>
          <Grid item className={classes.horizontalLine} />
        </Grid>

        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.textContainer}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.descriptionContainer}
          >
            <Typography className={classes.quarter}>Q1 2018</Typography>
            <Typography className={classes.description}>
              Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc,
              viverra nec. Mauris ipsum. Curabitur sodales ligula in libero.
            </Typography>
          </Grid>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.descriptionContainer}
          >
            <Typography className={classes.quarter}>Q2 2018</Typography>
            <Typography className={classes.description}>
              Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc,
              viverra nec. Mauris ipsum. Curabitur sodales ligula in libero.
            </Typography>
          </Grid>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.descriptionContainer}
          >
            <Typography className={classes.quarter}>Q3 2018</Typography>
            <Typography className={classes.description}>
              Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc,
              viverra nec. Mauris ipsum. Curabitur sodales ligula in libero.
            </Typography>
          </Grid>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.descriptionContainer}
          >
            <Typography className={classes.quarter}>Q4 2018</Typography>
            <Typography className={classes.description}>
              Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc,
              viverra nec. Mauris ipsum. Curabitur sodales ligula in libero.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Roadmap.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Roadmap);
