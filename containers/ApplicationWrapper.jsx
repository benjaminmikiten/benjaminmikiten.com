import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

function ApplicationWrapper({ children }) {
  return (
    <div className="bg-dracula-darker-800 min-h-screen">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono&family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </Head>
      {children}
    </div>
  );
}

ApplicationWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApplicationWrapper;
