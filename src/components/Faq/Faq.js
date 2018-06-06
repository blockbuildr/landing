import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '../Typography';
import styles from './styles';
import FaqBlock from './FaqBlock/FaqBlock';

const Faq = ({classes}) => {
  return (
    <Grid
      container
      className={classes.container}
      direction="column"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Typography variant="title" className={classes.faqTitle}>
          Frequently Asked Questions
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          className={classes.innerContainer}
          direction="row"
          justify="center"
          alignItems="center"
          spacing="24"
        >
          <Grid item xs={6}>
            <FaqBlock />
          </Grid>
          <Grid item xs={6}>
            <FaqBlock />
          </Grid>
          <Grid item xs={6}>
            <FaqBlock />
          </Grid>
          <Grid item xs={6}>
            <FaqBlock />
          </Grid>
          <Grid item xs={6}>
            <FaqBlock />
          </Grid>
          <Grid item xs={6}>
            <FaqBlock />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Faq.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Faq);
