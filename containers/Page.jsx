import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

function Page({ children }) {
  return (
    <div className="w-full flex">
      <Header />
      <main className="p-2">
        {children}
      </main>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
