import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';

function Page({ children }) {
  return (
    <div className="w-full min-h-screen flex">
      <Sidebar />
      <main className="p-2">
        {children}
      </main>
    </div>
  );
}

Page.defaultProps = {
  children: null,
};
Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
