import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '../Typography';
import styles from './styles';
import Button from '../Button';
import Triangle from '../../svgs/triangle.svg';

const DescriptionCard = ({
  classes,
  containerClassName,
  textClassName,
  text,
  description
}) => {
  return (
    <Grid
      className={containerClassName}
      container
      direction="row"
      alignItems="center"
    >
      <Grid item>
        <img src={Triangle} />
      </Grid>

      <Grid item className={classes.textContainer}>
        <Typography className={textClassName || classes.text}>
          {description}          
        </Typography>
      </Grid>
    </Grid>
  );
};

DescriptionCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DescriptionCard);
