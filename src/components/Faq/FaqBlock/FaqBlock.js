import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '../../Typography';
import styles from './styles';
import Triangle from '../../../svgs/triangle-2.svg';

const FaqBlock = ({classes}) => {
  return (
    <Grid
      container
      className={classes.container}
      direction="column"
      alignItems="flex-start"
      justify="flex-start"
    >
      <Grid item>
        <Grid
          container
          className={classes.innerContainer}
          direction="row"
          alignItems="flex-start"
          justify="center"
        >
          <Grid item>
            <img src={Triangle} />
          </Grid>
          <Grid item>
            <Typography variant="title" className={classes.faqTitle}>
              Lorem ipsum dolor sit amet. Praesent libero. Blockhain consectetur
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Typography variant="title" className={classes.faqBody}>
          Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
          Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed
          convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.
          Suspendisse in justo eu magna luctus suscipit. Sed lectus. Morbi
          lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac
          turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus,
          ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat
          condimentum velit. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos.
        </Typography>
      </Grid>
    </Grid>
  );
};

FaqBlock.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FaqBlock);
