import React, { useState, useEffect } from "react";
import { animateScroll } from "react-scroll";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaVimeoSquare,
  FaTumblrSquare,
  FaInstagramSquare
} from "react-icons/fa";
import { MdExpandLess } from "react-icons/md";

const Footer = ({ theme, elRef }) => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // animateScroll.scrollToTop();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <footer ref={elRef}
      className={`footer-area ${theme === "white" ? "footer--2" : "footer--1"}`}
    >
      <div
        className={`dg__footer__container ${theme === "white" ? "bg--white" : "bg__color--2"
          }`}
      >
        <div className="container">
          <div className="row">
            {/* Start Single Widget */}
            {/* <div className="col-lg-3 col-md-6 col-sm-6 col-12 col-12"> */}
            {/* <div className="footer__widget">
                <h4>Resources</h4>
                <div className="footer__inner">
                  <ul className="ft__menu">
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Bitcoin Price</a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Blog</a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Helps Portal</a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Privacy Policy</a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Buy Theme</a>
                    </li>
                  </ul>
                </div>
              </div> */}
            {/* </div> */}
            {/* End Single Widget */}
            {/* Start Single Widget */}
            {/* <div className="col-lg-3 col-md-6 col-sm-6 col-12 xs__mt--40"> */}
            {/* <div className="footer__widget information">
                <h4>Information</h4>
                <div className="footer__inner">
                  <ul className="ft__menu">
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>
                        Currency Exchange
                      </a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Todays Rate</a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>About Howard</a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Privacy Policy</a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>How To Video</a>
                    </li>
                  </ul>
                </div>
              </div> */}
            {/* </div> */}
            {/* End Single Widget */}
            {/* Start Single Widget */}
            <div className="col-lg-9 col-md-6 col-sm-6 col-12 md__mt--40 sm__mt--40">
              {/* <div className="footer__widget support">
                <h4>Support</h4>
                <div className="footer__inner">
                  <ul className="ft__menu">
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Contact us</a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Support Center</a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Helps</a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Live Chat</a>
                    </li>
                  </ul>
                </div>
              </div> */}
              {/* <div style="width: 100%"> */}
              <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=No%2060,%20RGM%20Complex,%20Old%20Mahabalipuram%20Rd,%20Karapakkam,%20Chennai,%20Tamil%20Nadu%20600097+(BizDom%20Solutions)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                <a href="https://www.gps.ie/marine-gps/">marine gps</a>
              </iframe>
              {/* </div> */}
            </div>
            {/* End Single Widget */}
            {/* Start Single Widget */}
            <div className="col-lg-3 col-md-6 col-sm-6 md__mt--40 sm__mt--40">
              <div className="footer__widget resources">
                <h4>Contact</h4>
                <div className="footer__inner">
                  <ul>
                    {/* <li>admin@biz1book.com</li> */}
                    <li>
                      <br /> 60, RGM Complex,
                      <br /> OMR Road, Karapakkam
                      <br /> Chennai - 600 097
                      <br /> +91 8680 0017 712, admin@biz1book.com
                    </li>
                    {/* <li>
                      
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            {/* End Single Widget */}
          </div>
        </div>
      </div>
      <div
        className={`copyright ${theme === "white" ? "bg__color--1" : "bg--black"
          }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6 col-12">
              <div className="copyright__inner">
                <p>Copyright © All Right Reserved</p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-12">
              <ul className="footer__right social__icon">
                <li>
                  <a
                    href="//facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookSquare />
                  </a>
                </li>
                <li>
                  <a
                    href="//linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                {/* <li>
                  <a
                    href="//twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitterSquare />
                  </a>
                </li>
                <li>
                  <a
                    href="//vimeo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaVimeoSquare />
                  </a>
                </li> */}
                <li>
                  <a
                    href="//tumblr.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagramSquare />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <MdExpandLess />
      </button>
    </footer>
  );
};

export default Footer;
