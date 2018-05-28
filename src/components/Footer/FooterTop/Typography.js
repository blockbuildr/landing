import React from 'react';
import PropTypes from 'prop-types';
import MaterialTypography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';

const Typography = ({className, color, children, variant, classes}) => (
  <MaterialTypography
    className={className ? [className, classes.root] : classes.root}
    variant={variant}
    color={color}
  >
    {children}
  </MaterialTypography>
);

Typography.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default withStyles(styles)(Typography);
