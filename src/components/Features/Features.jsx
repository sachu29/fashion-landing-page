import React from "react";
import FeatureCard from './FeatureCard';

const Features = () => {
  return (
    <div className="text-center px-3 py-5">
      <div className="mb-5">
        <h2>Featured Collections</h2>
        <p>
          Dare to mix and match! Check our collections to level up your fashion{" "}
          game
        </p>
      </div>

      {/*  */}

      <div className="row">
        <div className="col-sm-4">
          <FeatureCard />
        </div>
        <div className="col-sm-4 d-flex flex-column-reverse">
          <FeatureCard />
        </div>
        <div className="col-sm-4">
          <FeatureCard />
        </div>
      </div>
    </div>
  );
};

export default Features;
