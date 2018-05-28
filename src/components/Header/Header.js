import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '../Typography';
import styles from './styles';
import Button from '../Button';

const Header = ({classes}) => {
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Grid
          container
          className={classes.container}
          direction="row"
          alignItems="stretch"
          justify="space-between"
        >
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <div className={classes.logo} />
            </Grid>

            <Grid item>
              <Grid container direction="row">
                <Grid item>
                  <Typography variant="title" className={classes.block}>
                    Block
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="title" className={classes.buildr}>
                    buildr
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={classes.container}>
          <Typography className={classes.link}>WHITEPAPER</Typography>
        </Grid>

        <Grid item className={classes.container}>
          <Typography className={classes.link}>HOW IT WORKS</Typography>
        </Grid>

        <Grid item className={classes.container}>
          <Typography className={classes.link}>ABOUT US</Typography>
        </Grid>

        <Grid item>
          <div className={classes.verticalHr} />
        </Grid>

        <Grid item>
          <Button className={classes.button}>
            <Typography className={classes.learnMore}>Learn More</Typography>
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
