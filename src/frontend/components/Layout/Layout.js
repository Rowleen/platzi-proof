import React from "react";
import PropTypes from "prop-types";

import { Header, Footer } from "components";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
