/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import ApplicationWrapper from '../containers/ApplicationWrapper';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ApplicationWrapper>
      <Component {...pageProps} />
    </ApplicationWrapper>
  );
}

MyApp.propTypes = {
  Component: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object,
};
MyApp.defaultProps = {
  pageProps: {},
};

export default MyApp;
