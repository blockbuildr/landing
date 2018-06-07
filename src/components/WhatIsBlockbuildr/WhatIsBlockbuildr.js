import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '../Typography';
import styles from './styles';
import Button from '../Button';

const WhatIsBlockbuildr = ({classes}) => {
  return (
    <Grid className={classes.container} container direction="row" justify="center">
      <Grid item>
        <div className={classes.imageHolder} />
      </Grid>

      <Grid item>
        <Grid
          container
          direction="column"
          justify="space-between"
          className={classes.textContainer}
        >
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="title" className={classes.header}>
                  What is Blockbuildr?
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="title" className={classes.subheader}>
                  Fusce nec tellus sed augue semper porta. Mauris massa.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="title" className={classes.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec <br />
                  odio. Praesent libero. <br />
                  Sed cursus ante dapibus diam.
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
    </Grid>
  );
};

WhatIsBlockbuildr.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WhatIsBlockbuildr);
