import React from 'react';
import PropTypes from 'prop-types';
import MaterialButton from '@material-ui/core/Button';

const Button = ({children, className}) => {
  return <MaterialButton className={className}>{children}</MaterialButton>;
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  className: PropTypes.string,
};

export default Button;
