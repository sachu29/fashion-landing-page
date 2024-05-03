import React from "react";
import "./Sales.css";
import SaleImage from "../../assets/sale-image.jpg";

const Sales = () => {
  return (
    <div className="sales vh-100 px-3 py-5">
      <div className="row">
        <div className="col-sm-8">
          <img
            className="img-fluid sales-image"
            src={SaleImage}
            alt="SalesImage"
          />
        </div>

        <div className="col-sm-4  mt-4 mt-lg-0 ">
          <h2 className="sales-heading">
            Find Your perfect Looks at Jolt's Stylish New on Tokyo
          </h2>
          <p className="sales-para py-2">
            Welcome to the newest Jolt outlet in Shibuya, Japan! Step into our
            stylish and trendy strore and discover the latest in fashion and
            apparel. Come and experience the unique and vibrant atmosphere
          </p>

          {/*  */}

          <div>
            <h4>Come and Enjoy Sale!</h4>
            <h2 className="offer-rate pt-2 pb-1">50%</h2>
            <button className="round-btn btn-black">See On Maps</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
