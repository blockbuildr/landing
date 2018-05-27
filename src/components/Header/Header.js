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
    <AppBar className={classes.appBar}>
      <Toolbar>
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
                  <Typography variant="title" color="inherit">
                    Block
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="title" color="inherit">
                    builder
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
          <Button className={classes.subscribe}>
            <Typography className={classes.link}>SUBSCRIBE</Typography>
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
