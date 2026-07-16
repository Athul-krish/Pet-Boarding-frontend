import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div
        className="min-vh-100 d-flex align-items-center"
        style={{
          background:
            "linear-gradient(135deg,#FF914D,#FFD166)",
        }}
      >
        <div className="container">

          <div
            className="mx-auto shadow-lg p-5 text-center"
            style={{
              maxWidth: "850px",
              background: "rgba(255,255,255,.2)",
              backdropFilter: "blur(12px)",
              borderRadius: "25px",
            }}
          >

            <h1
              className="display-4 fw-bold mb-4"
              style={{ color: "#4B3F35" }}
            >
              🐾 Pet Boarding Management
            </h1>

            <p
              className="lead mb-5"
              style={{ color: "#5A4636" }}
            >
              Give your furry friends a safe,
              comfortable and caring place to stay.
              Easily register pets, manage boarding
              details and view all bookings.
            </p>

            <div className="d-flex justify-content-center gap-3 flex-wrap">

              <Link
                to="/add"
                className="btn btn-dark btn-lg px-4"
              >
                Register Pet
              </Link>

              <Link
                to="/view"
                className="btn btn-outline-dark btn-lg px-4"
              >
                View Pets
              </Link>

            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Home;