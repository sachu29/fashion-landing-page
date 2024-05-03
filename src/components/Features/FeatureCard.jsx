import React from "react";
import SampleImage from "../../assets/sale-image.jpg";
import "./FeatureCard.css";

const FeatureCard = () => {
  const dress = [
    {
      id: 1,
      heading: "Footwear",
    },
    {
      id: 2,
      heading: "Headwear",
    },
    {
      id: 3,
      heading: "Jacket",
    },
    {
      id: 4,
      heading: "Bags",
    },
    {
      id: 5,
      heading: "Accesories",
    },
    {
      id: 6,
      heading: "Bottoms",
    },
  ];
  return (
    <>
      {/* {dress.map((data) => ( */}
      <div className="mask-container mb-4" style={{ height: 350 }}>
        <div className="feature-mask">
          <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            <div>
              <div className="card-heading">{dress.heading}</div>
              <div className="entry">
                <div className="card-para fs-5">
                  <p>Check our cool headwear collection.</p>
                  <p>Get Disc 10% on New Season!</p>
                  <button className="round-btn btn-white fs-5">Discover</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="img-fluid w-100 h-100  rounded-4 small-image"
          src={SampleImage}
          alt="SampleImage"
        />
      </div>
      {/* ))} */}

      <div className="mask-container mb-4" style={{ height: 500 }}>
        <div className="feature-mask">
          <div className="w-100 h-100 d-flex justify-content-center align-items-center"></div>
        </div>
        <img
          className="img-fluid h-100 rounded-4 big-image"
          src={SampleImage}
          alt="SampleImage"
        />
      </div>
    </>
  );
};

export default FeatureCard;
