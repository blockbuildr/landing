import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '../Typography';
import styles from './styles';
import Button from '../Button';

const DescriptionCard = ({
  classes,
  containerClassName,
  textClassName,
  text,
}) => {
  return (
    <Grid
      className={containerClassName}
      container
      direction="row"
      alignItems="center"
    >
      <Grid item>
        <div className={classes.image} />
      </Grid>

      <Grid item className={classes.textContainer}>
        <Typography className={textClassName || classes.text}>
          Lorem ipsum dolor sit amet. Praesent <br />
          libero. Blockhain consectetur
        </Typography>
      </Grid>
    </Grid>
  );
};

DescriptionCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DescriptionCard);
