import React from "react";
import './Navbar.css'
import { IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid d-flex justify-content-between">
          <a className="navbar-brand fs-2 fw-bolder" href="/">
            Jolt
          </a>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            // data-bs-toggle="popover"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Categories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Colletions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Store
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Find Store
                </a>
              </li>
            </ul>

            {/*  */}

            <ul className="navbar-nav  my-2 my-lg-0 navbar-nav-scroll d-flex justify-content-end align-items-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <IoMdSearch className="me-1" /> Search
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <CgProfile className="me-1" />
                  Chart (0)
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <HiOutlineShoppingBag className="me-1" /> Login
                </a>
              </li>
            </ul>

            <div></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
