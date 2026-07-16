import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow"
      style={{
        background: "#FF914D",
      }}
    >
      <div className="container">

        <Link
          className="navbar-brand fw-bold fs-4"
          to="/"
        >
          🐾 Pet Boarding
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbar"
        >
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/addpet"
              >
                Register Pet
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/view"
              >
                View Pets
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;