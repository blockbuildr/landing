import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '../Typography';
import styles from './styles';
import Button from '../Button';
import DescriptionCard from '../DescriptionCard';

const Features = ({classes}) => {
  return (
    <Grid
      className={classes.container}
      container
      direction="row"
      justify="center"
    >
      <Grid item className={classes.featureContainer}>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="title" className={classes.header}>
              Features
            </Typography>
          </Grid>

          <Grid item>
            <Typography className={classes.subheader}>
              Blockbuildr creates custom software that delivers on your business goals
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid
          container
          direction="column"
          justify="space-between"
          className={classes.descriptionContainer}
        >
          <Grid item>
            <Grid container direction="column">
              <Grid item className={classes.descriptionCard}>
                <DescriptionCard 
                  description={<span>
                    Blockchain Development, projects from Ethereum to privatized 
                    <br />
                    blockchain solutions using Hyperledger and Corda
                  </span>}
                />
              </Grid>

              <Grid item className={classes.descriptionCard}>
                <DescriptionCard 
                  description={<span>
                    Web Applications, we focus on using modern full stack technologies,
                    <br /> 
                    and scalable cloud solutions on Google and Amazon 
                  </span>}
                />
              </Grid>

              <Grid item className={classes.descriptionCard}>
                <DescriptionCard 
                  description={<span>
                    Mobile Applications, with our polyglot developers,
                    <br /> 
                     we can create software in all native devices
                  </span>}
                />
              </Grid>

              <Grid item className={classes.descriptionCard}>
                <DescriptionCard 
                  description={<span>
                    Data Science and Machine Learning solutions,
                    <br />
                    we can use the latest technologies to help automate tasks
                  </span>}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Features.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Features);
