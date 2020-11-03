import React from 'react';
import PropTypes from 'prop-types';

export default function Emoji({ className, role, props }) {
  return (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ''}
      aria-hidden={props.label ? 'false' : 'true'}
    >
      {props.symbol}
    </span>
  );
}

Emoji.propTypes = {
  props: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};
