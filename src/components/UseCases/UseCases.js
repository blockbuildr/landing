import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '../Typography';
import styles from './styles';
import Card from './Card';

const UseCases = ({classes}) => {
  return (
    <Grid className={classes.container} container direction="row" justify="center">
      <Grid className={classes.gridContainer} container direction="column" alignItems="center">
        <Grid item className={classes.titleContainer}>
          <Typography variant="title" className={classes.title}>
            Use Cases
          </Typography>
        </Grid>

        <Grid item>
          <Grid container direction="row">
            <Grid item>
              <Card header="Collectibles" />
            </Grid>
            <Grid item className={classes.card}>
              <Card header="Reward Programs" />
            </Grid>
            <Grid item className={classes.card}>
              <Card header="Crowdfunding" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

UseCases.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UseCases);
