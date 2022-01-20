import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollToTop from '../utils/scrollToTop';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
