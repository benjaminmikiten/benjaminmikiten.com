import React from 'react';
import PropTypes from 'prop-types';

function Text({ tag, children, className }) {
  return React.createElement(tag, { className }, children);
}

Text.defaultProps = {
  tag: 'span',
  className: null,
  children: null,
};

Text.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li', 'span']),
};

export default Text;
