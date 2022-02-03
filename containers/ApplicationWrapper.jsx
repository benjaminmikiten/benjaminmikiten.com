import React from 'react';
import PropTypes from 'prop-types';

function ApplicationWrapper({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

ApplicationWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApplicationWrapper;
