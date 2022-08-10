import React from 'react';
import HeaderOne from './header/HeaderOne';

const Layout = ({ children }) => {
  return (
    <>
      <main className="page-wrapper">
        <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />
        {children}
      </main>
    </>
  );
};
export default Layout;
