import React from "react";
import { Link } from "react-router-dom";

const HowWorks = () => {
  return (
    <div className="dg__work__area how__work">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="thumb">
              <img
                src={process.env.PUBLIC_URL + "/images/bg/pos.jpg"}
                alt="computer images"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="content">
              <h2>Point Of Sales (POS)</h2>
              <h6>
                A Software to manage your Restaurant
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <a href="http://pos.biz1book.com" target="_blank" className="slide__btn dg__btn">
                JOIN WITH US
              </a>
              {/* <Link
                className="slide__btn dg__btn"
                href="http://pos.biz1book.com"
              >
                JOIN WITH US
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
