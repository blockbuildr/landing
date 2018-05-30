import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '../Typography';
import styles from './styles';
import Button from '../Button';

const HowItWorks = ({classes}) => {
  return (
      <Grid
        className={classes.gridContainer}
        container
        direction="column"
      >
        <Grid item>
          <Typography variant="title" className={classes.title}>
            How it Works
          </Typography>
        </Grid>

        <Grid
          container
          direction="row"
          className={classes.blockbuildr}
        >
          <Grid item>
            <div className={classes.placeholder} />
          </Grid>

          <Grid item className={classes.card}>
            <Grid container direction="column" className={classes.rightText}>
              <Grid item>
                <Typography variant="title" className={classes.subheader}>
                  Sub-header split onto 2 line. It’s really great. Lorem ipsum.
                </Typography>
              </Grid>

              <Grid item className={classes.text}>
                <Typography className={classes.description}>
                  Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis.
                </Typography>
                <Typography className={classes.description}>
                  Nulla facilisi. Ut fringilla. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </Typography>
                <Typography className={classes.description}>
                  Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.  Nunc feugiat mi a tellus consequat imperdiet.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          className={classes.blockbuildr}
        >
          <Grid item className={classes.card}>
            <Grid container direction="column" className={classes.leftText}>
              <Grid item>
                <Typography variant="title" className={classes.subheader}>
                  Sub-header split onto 2 line. It’s really great. Lorem ipsum.
                </Typography>
              </Grid>

              <Grid item className={classes.text}>
                <Typography className={classes.description}>
                  Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis.
                </Typography>
                <Typography className={classes.description}>
                  Nulla facilisi. Ut fringilla. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </Typography>
                <Typography className={classes.description}>
                  Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.  Nunc feugiat mi a tellus consequat imperdiet.
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <div className={classes.placeholder} />
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          className={classes.blockbuildr}
        >
          <Grid item>
            <div className={classes.placeholder} />
          </Grid>

          <Grid item>
            <Grid container direction="column" className={classes.rightText}>
              <Grid item>
                <Typography variant="title" className={classes.subheader}>
                  Sub-header split onto 2 line. It’s really great. Lorem ipsum.
                </Typography>
              </Grid>

              <Grid item className={classes.text}>
                <Typography className={classes.description}>
                  Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis.
                </Typography>
                <Typography className={classes.description}>
                  Nulla facilisi. Ut fringilla. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </Typography>
                <Typography className={classes.description}>
                  Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.  Nunc feugiat mi a tellus consequat imperdiet.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
};

HowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HowItWorks);
