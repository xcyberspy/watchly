import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({ label, onClick, type = 'button', className = '' }) => {
  return (
    <button type={type} className={`button ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
};

export default React.memo(Button);
