import axios from "axios";
import React, { useState } from "react";
import Navbar from "./Navbar";

const AddPet = () => {

  const [pet, setPet] = useState({

    bookingId: "",
    petName: "",
    petType: "",
    breed: "",
    age: "",
    weight: "",
    vaccinationStatus: "",
    ownerName: "",
    ownerPhone: "",
    ownerEmail: "",
    checkInDate: "",
    checkOutDate: "",
    kennelNumber: "",

  });

  const inputHandler = (e) => {
    setPet({
      ...pet,
      [e.target.name]: e.target.value,
    });
  };

  const readValues = () => {

    axios
      .post("http://localhost:3000/addpet", pet)
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        console.log(error);
        alert("Something Went Wrong");
      });

  };

  const inputStyle = {
    background: "rgba(255,255,255,.25)",
    border: "1px solid rgba(255,255,255,.5)",
    borderRadius: "12px",
    color: "#4B3F35",
  };

  return (
    <>
      <div
        className="min-vh-100 py-5"
        style={{
          background: "linear-gradient(135deg,#FF914D,#FFD166)",
        }}
      >

        <div className="container">

          <div className="row justify-content-center">

            <div className="col-lg-10">

              <div
                className="card shadow-lg border-0"
                style={{
                  background: "rgba(255,255,255,.25)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "20px",
                }}
              >

                <div className="card-body p-5">

                  <h2
                    className="text-center fw-bold mb-2"
                    style={{ color: "#4B3F35" }}
                  >
                    🐾 Register Your Pet
                  </h2>

                  <p
                    className="text-center mb-5"
                    style={{ color: "#5A4636" }}
                  >
                    Fill in the details below to book a comfortable stay for your pet.
                  </p>

                  <div className="row g-4">

                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Booking ID
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        style={inputStyle}
                        placeholder="Enter Booking ID"
                        name="bookingId"
                        onChange={inputHandler}
                      />

                    </div>

                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Pet Name
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        style={inputStyle}
                        placeholder="Enter Pet Name"
                        name="petName"
                        onChange={inputHandler}
                      />

                    </div>

                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Pet Type
                      </label>

                      <select
                        className="form-select"
                        style={inputStyle}
                        name="petType"
                        onChange={inputHandler}
                      >
                        <option value="">Select Pet Type</option>
                        <option>Dog</option>
                        <option>Cat</option>
                        <option>Bird</option>
                        <option>Rabbit</option>
                        <option>Hamster</option>
                        <option>Fish</option>
                        <option>Turtle</option>
                        <option>Other</option>
                      </select>

                    </div>
                                        <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Breed
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        style={inputStyle}
                        placeholder="Enter Breed"
                        name="breed"
                        onChange={inputHandler}
                      />

                    </div>

                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Age (Years)
                      </label>

                      <input
                        type="number"
                        className="form-control"
                        style={inputStyle}
                        placeholder="Enter Age"
                        name="age"
                        onChange={inputHandler}
                      />

                    </div>

                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Weight (kg)
                      </label>

                      <input
                        type="number"
                        className="form-control"
                        style={inputStyle}
                        placeholder="Enter Weight"
                        name="weight"
                        onChange={inputHandler}
                      />

                    </div>

                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Vaccination Status
                      </label>

                      <select
                        className="form-select"
                        style={inputStyle}
                        name="vaccinationStatus"
                        onChange={inputHandler}
                      >
                        <option value="">Select Status</option>
                        <option>Fully Vaccinated</option>
                        <option>Partially Vaccinated</option>
                        <option>Not Vaccinated</option>
                      </select>

                    </div>

                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Owner Name
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        style={inputStyle}
                        placeholder="Enter Owner Name"
                        name="ownerName"
                        onChange={inputHandler}
                      />

                    </div>

                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Owner Phone
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        style={inputStyle}
                        placeholder="Enter Phone Number"
                        name="ownerPhone"
                        onChange={inputHandler}
                      />

                    </div>
                                        <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Breed
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        style={inputStyle}
                        placeholder="Enter Breed"
                        name="breed"
                        onChange={inputHandler}
                      />

                    </div>

                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Age (Years)
                      </label>

                      <input
                        type="number"
                        className="form-control"
                        style={inputStyle}
                        placeholder="Enter Age"
                        name="age"
                        onChange={inputHandler}
                      />

                    </div>

                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Weight (kg)
                      </label>

                      <input
                        type="number"
                        className="form-control"
                        style={inputStyle}
                        placeholder="Enter Weight"
                        name="weight"
                        onChange={inputHandler}
                      />

                    </div>

                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Vaccination Status
                      </label>

                      <select
                        className="form-select"
                        style={inputStyle}
                        name="vaccinationStatus"
                        onChange={inputHandler}
                      >
                        <option value="">Select Status</option>
                        <option>Fully Vaccinated</option>
                        <option>Partially Vaccinated</option>
                        <option>Not Vaccinated</option>
                      </select>

                    </div>

                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Owner Name
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        style={inputStyle}
                        placeholder="Enter Owner Name"
                        name="ownerName"
                        onChange={inputHandler}
                      />

                    </div>

                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Owner Phone
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        style={inputStyle}
                        placeholder="Enter Phone Number"
                        name="ownerPhone"
                        onChange={inputHandler}
                      />

                    </div>
                                        <div className="col-12 mt-4">

                      <button
                        className="btn btn-dark w-100 py-3 fw-bold"
                        onClick={readValues}
                      >
                        🐾 Register Pet
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </>
  );

};

export default AddPet;