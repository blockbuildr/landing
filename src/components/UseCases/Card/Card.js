import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '../../Typography';
import styles from './styles';

const Card = ({classes, header}) => {
  return (
    <Grid className={classes.container} container direction="row">
      <Grid item>
        <div className={classes.image} />
      </Grid>

      <Grid item>
        <Grid container direction="column" className={classes.textContainer}>
          <Grid item>
            <Typography className={classes.header}>{header}</Typography>
          </Grid>

          <Grid item>
            <Typography className={classes.subheader}>
              SUBTITLE LOREM IPSUM
            </Typography>
          </Grid>

          <Grid item>
            <Typography className={classes.description}>
              Subtitle lorem ipsum. Duis sagittis ipsum. Praesent mauris. Fusce
              nec tellus sed augue semper porta. Curabitur sodales ligula in
              libero.
            </Typography>
          </Grid>

          <Grid item>
            <Typography className={classes.description}>
              Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Card.propTypes = {
  classes: PropTypes.object.isRequired,
  header: PropTypes.string.isRequired,
};

export default withStyles(styles)(Card);
