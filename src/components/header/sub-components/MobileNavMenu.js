import React from "react";
import { Link } from "react-router-dom";

const MobileNavMenu = ({ scrollTo }) => {
  return (
    <nav className="offcanvasNavigation" id="offcanvas-navigation">
      <ul>
        <li>
          <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
          {/* <ul className="subMenu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/home-one"}>Home One</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/home-two"}>Home Two</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/home-three"}>
                Home Three
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/home-four"}>Home Four</Link>
            </li>
          </ul> */}
        </li>

        <li className="menuItemHasChildren">
          <a href="javascript:void(0);" onClick={() => scrollTo("posref")} >
            Products
          </a>
          <ul className="subMenu">
            <li>
              <a href="javascript:void(0);" onClick={() => scrollTo("posref")} >POS</a>
            </li>
            <li>
              <a href="javascript:void(0);" onClick={() => scrollTo("retailref")} >Retail</a>
            </li>
          </ul>
        </li>

        {/* <li className="menuItemHasChildren">
          <Link to={process.env.PUBLIC_URL + "/blog"}>News</Link>
          <ul className="subMenu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog"}>Blog Page</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-right-sidebar"}>
                Blog Right Sidebar
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                Blog Details
              </Link>
            </li>
          </ul>
        </li> */}
        {/* <li className="menuItemHasChildren">
          <Link to={process.env.PUBLIC_URL + "#/"}>Pages</Link>
          <ul className="subMenu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/about"}>About Us</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/about-bitcoin"}>
                About Bitcoin
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/merchants"}>Merchants</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/team"}>Team Page</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/wallet"}>Wallet Page</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/login-register"}>
                Login / Register
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
            </li>
          </ul>
        </li> */}
        <li>
          <a href="javascript:void(0);" onClick={() => scrollTo("contactref")} >About Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
