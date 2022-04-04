import React from "react";

const SoftwareDownloadTwo = ({ elRef }) => {
  return (
    <section ref={elRef}
      className="dg__software__area dg__software--2 section-padding--xl"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bg/download.jpg"})`,
        backgroundRepeat: `no-repeat`
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="dg__software__inner">
              <h2 style={{ color: "black" }}>Download Software, Compatible For All Devices</h2>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation Ut enim ad minim
                veniam, quis nostrud exercitation.
              </p> */}
              <ul className="avilable__device">
                <li>
                  <a
                    href={"https://github.com/mohamed1408/biz1book/releases/download/v1.0.43/Biz1Book_POS_BizDom-1.0.43-setup.exe"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/pos.png"}
                      alt="images"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={"https://github.com/Master0229/Biz1Maket_Single_Store/releases/download/Biz1Pos/Biz1Pos-win32-ia32.zip"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/Retail.png"}
                      alt="images"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={"https://github.com/mohamed1408/biz1book-waiter-app/releases/download/v1.029/biz1bookwaiterapp-v1.029.apk"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/waiterapp.jpg"}
                      alt="images"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={"https://github.com/mohamed1408/biz1book/releases/download/v1.0.43/KDSApp.-.v1.0.apk"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/kdsapp.jpg"}
                      alt="images"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareDownloadTwo;
