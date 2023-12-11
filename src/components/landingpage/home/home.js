import React from "react";
import "./home.css";
import Lottie from "lottie-react";
import homeLottie from "../../assets/landingPage/Home/homelottie.json";

export default function Home() {
  return (
    <>
      <div className="container-fluid homeBg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-white">
              <h1 className="homeH1  fw-bold">
                Enterprice Software Devlopment
              </h1>
              <h4 className="homeH4">
                Empowering Business With next-gen solutions to drive business
                growth
              </h4>
              <button className="homeBtn">
                GET A QUOTE NOW <span className="homeSpan">&rarr;</span>
              </button>
            </div>
            <div className="col-lg-6">
              <Lottie
                animationData={homeLottie}
                loop={true}
                autoplay={true}
                style={{ width: "500px", height: "500px" }}
                className="mt-3"
              />
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
