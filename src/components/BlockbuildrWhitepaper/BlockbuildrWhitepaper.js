import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '../Typography';
import styles from './styles';
import Button from '../Button';

const BlockbuildrWhitepaper = ({classes}) => {
  return (
    <Grid className={classes.container} container direction="row">
      <Grid item>
        <Grid
          container
          direction="column"
          alignItems="flex-end"
          className={classes.textContainer}
        >
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="title" className={classes.header}>
                  The Blockbuildr Whitepaper
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="title" className={classes.description}>
                  Praesent libero. Sed cursus ante dapibus diam, powered by
                  blockhain. Integer nec odio. Nulla quis sem at nibh elementum
                  imperdiet
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Button className={classes.button}>
              <Typography className={classes.buttonText}>Button CTA</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <div className={classes.imageHolder} />
      </Grid>
    </Grid>
  );
};

BlockbuildrWhitepaper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BlockbuildrWhitepaper);
