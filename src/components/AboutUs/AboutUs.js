import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '../Typography';
import styles from './styles';
import ProfileCard from './ProfileCard';

const AboutUs = ({classes}) => {
  return (
    <Grid
      className={classes.container}
      container
      direction="column"
      alignItems="center"
    >
      <Grid item>
        <Typography variant="title" className={classes.header}>
          About Us
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="title" className={classes.subheader}>
          Fusce nec tellus sed augue semper porta. Mauris massa.
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.description}>
          Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Nam nec
          ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing
          diam, a cursus ipsum ante quis turpis. Nulla facilisi suspendisse
          potenti. Nunc feugiat mi a tellus consequat imperdiet.
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.team}>OUR TEAM</Typography>
      </Grid>

      <Grid
        container
        direction="row"
        className={classes.profileContainer}
        justify="center"
      >
        <ProfileCard name="Danny Lee" />
        <ProfileCard className={classes.profileCard} name="Matt Ng" />
        <ProfileCard className={classes.profileCard} name="Tiffany Taylor" />
        <ProfileCard className={classes.profileCard} name="Steven Barragan" />
      </Grid>

      <Grid
        container
        direction="row"
        className={classes.profileContainer}
        justify="center"
      >
        <ProfileCard name="Dan Howard" />
        <ProfileCard className={classes.profileCard} name="Chris Berizko" />
        <ProfileCard className={classes.profileCard} name="Ahmed Khanzada" />
        <ProfileCard className={classes.profileCard} name="Randall Goo" />
      </Grid>

      <Grid
        container
        direction="row"
        className={classes.profileContainer}
        justify="center"
      >
        <ProfileCard name="Lan Nguyen" />
        <ProfileCard className={classes.profileCard} name="Miwa Tachibana" />
        <ProfileCard className={classes.profileCard} name="Kimberly Luu" />
        <ProfileCard className={classes.profileCard} name="Allen Kim" />
      </Grid>
    </Grid>
  );
};

AboutUs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutUs);
