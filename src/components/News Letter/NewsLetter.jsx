import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="news-letter">
      <div className="background-image">
        <div className="overlay"></div>
        <div className="content">
          <h2>Sign Up to our Newsletter</h2>
          <p className="mt-4 mb-4">
            Get the Latest Beauty Secrets and Trends, Signup for our Newsletter
            and Stay Informed about all Things Beauty
          </p>
          <div className=" mb-3">
            <input type="text" className="me-3 mb-3" placeholder="Your Email" />
            <button className="round-btn btn-white" type="button">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
