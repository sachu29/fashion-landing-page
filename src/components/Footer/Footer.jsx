import React from "react";
import "./Footer.css";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const date = new Date();
  let currentYear = date.getFullYear();
  return (
    <footer className="bg-dark text-white p-3">
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <h2>Jolt</h2>
          <p>
            Experience the great outdoor in style with Jolt's. Shop now and gear
            up for adventure in Jolt!
          </p>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="row">
            <div className="col-4">
              <h6>Categories</h6>
              <ul>
                <li>
                  <a href="/">Jacket</a>
                </li>
                <li>
                  <a href="/">Shirts</a>
                </li>
                <li>
                  <a href="/">Knit</a>
                </li>
                <li>
                  <a href="/">T-Shirts</a>
                </li>
                <li>
                  <a href="/">Bottoms</a>
                </li>
                <li>
                  <a href="/">Accessories</a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <h6>Customer Care</h6>
              <ul>
                <li>
                  <a href="/">FAQ</a>
                </li>
                <li>
                  <a href="/">Shipping</a>
                </li>
                <li>
                  <a href="/">Order Status</a>
                </li>
                <li>
                  <a href="/">Return & Exchange</a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <h6>Company</h6>
              <ul>
                <li>
                  <a href="/">Privacy</a>
                </li>
                <li>
                  <a href="/">Guides</a>
                </li>
                <li>
                  <a href="/">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-12">
          <ul className="d-flex justify-content-sm-end justify-content-start social-media">
            <li>
              <a href="/">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="/">
                <AiOutlineYoutube />
              </a>
            </li>
            <li>
              <a href="/">
                <FaXTwitter />
              </a>
            </li>
          </ul>
        </div>

        {/*  */}

        <div className="">
          <ul className="d-flex justify-content-sm-end justify-content-center contact-info">
            <li>
              <a href="tel:+12 332476">Call Us On +12 332476</a>
            </li>
            <li>
              <a href="/">USD $ | English</a>
            </li>
          </ul>
        </div>

        {/*  */}

        <div className="text-center text-md-center">
          <p>&#169;{currentYear} Jolt Studio, Inc - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
