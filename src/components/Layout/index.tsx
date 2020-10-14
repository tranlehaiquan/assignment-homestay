/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';

import './layout.css';

interface LayoutProps {
  staticHeader?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, staticHeader = false }) => {
  return (
    <>
      <Header staticHeader={staticHeader} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
