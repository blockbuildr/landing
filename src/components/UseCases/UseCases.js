import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '../Typography';
import styles from './styles';
import Card from './Card';
import One from '../../svgs/1.svg';
import Two from '../../svgs/2.svg';
import Three from '../../svgs/3.svg';

const UseCases = ({classes}) => {
  return (
    <Grid
      className={classes.container}
      container
      direction="row"
      justify="center"
    >
      <Grid
        className={classes.gridContainer}
        container
        direction="column"
        alignItems="center"
      >
        <Grid item className={classes.titleContainer}>
          <Typography variant="title" className={classes.title}>
            Blockbuildr Process
          </Typography>
        </Grid>

        <Grid item>
          <Grid container direction="row">
            <Grid item>
              <Card 
                header="Analysis"
                subtitle="Requirement Gathering" 
                description={"asdasd"}
                image={One} 
                imageStyle={{ width: 40, height: 40 }}  
              />
            </Grid>
            <Grid item className={classes.card}>
              <Card 
                header="Design and Software"
                subtitle="Development" 
                image={Two} 
                description={""} 
              />
            </Grid>
            <Grid item className={classes.card}>
              <Card 
                header="Deploy" 
                subtitle="Production"
                image={Three} 
                description={""} 
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

UseCases.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UseCases);
