import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '../../Typography';
import styles from './styles';

const Card = ({classes, header, image, imageStyle, description, subtitle }) => {
  return (
    <Grid className={classes.container} container direction="row">
      <Grid item>
        <img src={image} style={imageStyle} />
      </Grid>

      <Grid item>
        <Grid container direction="column" className={classes.textContainer}>
          <Grid item>
            <Typography className={classes.header}>{header}</Typography>
          </Grid>

          <Grid item>
            <Typography className={classes.subheader}>
              {subtitle}
            </Typography>
          </Grid>

          <Grid item>
            <Typography className={classes.description}>
              {description}
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
