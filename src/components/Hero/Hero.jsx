import React from "react";
import "./Hero.css";
// import Header from "../Header/Header";
import Navbar from "./../Navbar/Navbar";

const Hero = () => {
  return (
    <div className="hero text-center hero-custom-height p-lg-3 pt-lg-0">
      <div className="h-100 d-flex justify-content-between align-items-center flex-column pt-sm-0 pt-3  ">
        {/* <div className="mask"></div> */}

        <header className="container-fluid mask">
          <Navbar />
        </header>

        <div>
          <h1>Jolt Sport Project</h1>
          <p className="mb-5 container  px-sm-2 px-lg-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsa
            quia repudiandae omnis, architecto maiores minima tempora quod non.
            Sunt delectus esse molestias facere similique nobis nihil amet
            autem! Quod!
          </p>
        </div>
        <div className=" mb-5 mb-lg-3">
          <button className="round-btn btn-white">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
