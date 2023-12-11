import React from "react";
// import brandLogo from "../../assets/Header & footer/header/medichainlogo.svg";

export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark text-light">
        <div className="container pb-4">
          <div className="row pt-4 ">
            <div className="col-lg-4">
              <div className=" d-flex">
                {/* <img src={brandLogo} className="footerLogo" /> */}
                <h4 className="pt-2 ms-3">SecureSync</h4>
              </div>
              <p className="mt-4">
                Crafting the next-level of user experience <br></br> and data
                security.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-4 ">
                  <h5>ABOUT PROJECT</h5>
                  <p className="mt-4">Hardhat Repository</p>
                  <p>Graph Repository</p>
                  <p>React Repository</p>
                </div>
                <div className="col-lg-4">
                  <h5>HARDHAT TOOLS</h5>
                  <p className="mt-4">Hardhat</p>
                  <p>The Graph</p>
                  <p>Alchemy</p>
                </div>
                <div className="col-lg-4">
                  <h5>FRONTEND</h5>
                  <p className="mt-4">Reactjs</p>
                  <p>Bootstrap</p>
                  <p>Gsap</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="col-lg-12">
                <h5>Follow Us</h5>
              </div>
            </div>
          </div>
          <hr />
          <div className="row text-center pt-3 pb-3">
            <h3 >If you have any questions please contact us</h3>
            <p> info@SecureSync.com | +91 950 17 xxxxx , +91 987 83 xxxxx</p>
          </div>

          <div className="row">
            <hr />
            <div className="d-flex col-lg-6 text-start">
              <p className="">Privacy Policy</p>
              <p className="ms-3">Sitemap</p>
            </div>
            <div className="text-end col-lg-6">
              <p>&copy; 2023 SecureSync. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
