import React from 'react';
import PropTypes from 'prop-types';
import MaterialTypography from '@material-ui/core/Typography';

const Typography = ({className, color, children, variant}) => (
  <MaterialTypography
    className={className}
    variant={variant}
    color={color || 'inherit'}
  >
    {children}
  </MaterialTypography>
);

Typography.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default Typography;
