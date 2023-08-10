import React from "react";

import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import PageViewBox from "../../atoms/PageViewBox";

const Layout = ({ children }) => {
  return (
    <PageViewBox>
      <Header />
      {children}
      <Footer />
    </PageViewBox>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
