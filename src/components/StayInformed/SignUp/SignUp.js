import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '../../Typography';
import styles from './styles';
import Button from '../../Button';

const SignUp = ({classes}) => {
  return (
    <Grid
      container
      className={classes.container}
      direction="column"
      alignItems="flex-start"
      justify="center"
    >
      <Grid item>
        <Typography variant="title" className={classes.description}>
          At Blockbuildr 
        </Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          alignItems="flex-start"
          justify="flex-start"
        >
          <Grid item>
            <Typography variant="title" className={classes.emailTitle}>
              EMAIL
            </Typography>
          </Grid>

          <Grid item>
            <Grid
              container
              direction="row"
              alignItems="flex-start"
              justify="flex-start"
            >
              <Grid item>
                <TextField
                  id="bootstrap-input"
                  className={classes.emailInput}
                  InputProps={{
                    disableUnderline: true,
                    classes: {
                      root: classes.bootstrapRoot,
                      input: classes.bootstrapInput,
                    },
                  }}
                />
              </Grid>

              <Grid item>
                <Button className={classes.signUp}>
                  <Typography>SIGN UP</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp);
