import React from "react";
import NewArrivalCard from "./NewArrivalCard";

const NewArrivals = () => {
  return (
    <div className="px-3 py-4">
      <div className="text-center mb-5">
        <h2>New Arrivals</h2>
        <p>
          Our new arrivals are built to withstand your activities while keeping{" "}
          you looking your best
        </p>
      </div>

      {/*  */}

      <div className="row">
        <NewArrivalCard />
        <NewArrivalCard />
        <NewArrivalCard />
        <NewArrivalCard />
        <NewArrivalCard />
        <NewArrivalCard />
        <NewArrivalCard />
        <NewArrivalCard />
      </div>
      <div className="mt-3 d-flex justify-content-center">
        <button className="round-btn btn-black d-block">See All</button>
      </div>
    </div>
  );
};

export default NewArrivals;
