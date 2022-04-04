import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Logo from "../../components/header/Logo";
import Navigation from "../../components/header/Navigation";
import HeaderBtn from "../../components/header/HeaderBtn";
import MobileMenu from "../../components/header/MobileMenu";

const Header = ({ theme, posref, retailref, downloadref, contactref }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector("header");
    setHeaderTop(header.offsetTop);
    // console.log(header.offsetTop)
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // console.log(window.scrollY)
    setScroll(window.scrollY);
  };

  // console.log("from header", scrollTo)

  // const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
  const scrollToRef = (ref) => window.scrollTo({
    top: ref.current.offsetTop,
    left: 0,
    behavior: 'smooth'
  })

  const executeScroll = (ref) => {
    const refs = {
      "posref": posref,
      "retailref": retailref,
      "downloadref": downloadref,
      "contactref": contactref
    }
    // console.log(refs[ref])
    scrollToRef(refs[ref])
  }

  return (
    <header
      className={`dg__header header--absolute space-right-left ${scroll > headerTop ? "stick" : ""
        }`}
    >
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-2 col-xl-2 col-6">
            {/* logo */}
            <Logo
              image={
                theme === "white" ? "/images/logo/bizdom_white.png" : "/images/logo/bizdom_white.png"
              }
            />
          </div>
          {/* <div className="col-lg-3 col-xl-2 col-6"> col-lg-3 col-xl-2 col-6 */}

          {/* navigation */}
          {/* <Navigation /> */}
          {/* </div> */}
          {/* <div className="col-lg-7 col-xl-8 d-none d-lg-block"> */}
          {/* header buttons */}
          {/* <HeaderBtn /> */}
          {/* <Navigation scrollTo={executeScroll} /> */}
          {/* </div> */}
          <div className="col-lg-7 col-xl-8 d-none d-lg-block">
            {/* navigation */}
            <Navigation scrollTo={executeScroll} />
          </div>
          <div className="col-lg-3 col-xl-2 col-6">
            {/* header buttons */}
            <HeaderBtn />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <MobileMenu scrollTo={executeScroll} />
    </header>
  );
};

Header.propTypes = {
  theme: PropTypes.string
};

export default Header;
