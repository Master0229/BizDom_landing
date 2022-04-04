import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Header from "../containers/headers/Header";
import BrandLogoTwo from "../containers/brand-logos/BrandLogoTwo";
import Newsletter from "../components/newsletters/Newsletter";
import Footer from "../containers/footers/Footer";

const LayoutTwo = ({ children, theme, posref, retailref, downloadref, contactref }) => {
  return (
    <Fragment>
      <Header theme={theme} posref={posref} retailref={retailref} downloadref={downloadref} contactref={contactref} />
      {children}
      {/* brand logo */}
      <BrandLogoTwo />
      {/* newsletter */}
      <Newsletter />
      <Footer theme={theme} elRef={contactref} />
    </Fragment>
  );
};

LayoutTwo.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.string
};

export default LayoutTwo;
