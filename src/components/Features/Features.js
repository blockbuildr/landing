import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '../Typography';
import styles from './styles';
import Button from '../Button';
import DescriptionCard from '../DescriptionCard';

const Features = ({classes}) => {
  return (
    <Grid className={classes.container} container direction="row" justify="center">
      <Grid item className={classes.featureContainer}>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="title" className={classes.header}>
              Features
            </Typography>
          </Grid>

          <Grid item>
            <Typography className={classes.subheader}>
              This is a subheader. It’s split onto 3 lines. But it’s also
              important content!
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid
          container
          direction="column"
          justify="space-between"
          className={classes.descriptionContainer}
        >
          <Grid item>
            <Grid container direction="column">
              <Grid item className={classes.descriptionCard}>
                <DescriptionCard />
              </Grid>

              <Grid item className={classes.descriptionCard}>
                <DescriptionCard />
              </Grid>

              <Grid item className={classes.descriptionCard}>
                <DescriptionCard />
              </Grid>

              <Grid item className={classes.descriptionCard}>
                <DescriptionCard />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Features.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Features);
