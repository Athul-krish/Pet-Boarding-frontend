import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const ViewPet = () => {
  const [pets, setPets] = useState([]);

  const fetchData = () => {
    axios
      .post("http://localhost:3000/viewpet")
      .then((response) => {
        setPets(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deletePet = (id) => {
    axios
      .delete("http://localhost:3000/delete/" + id)
      .then((response) => {
        alert(response.data.message);
        fetchData();
      })
      .catch((error) => {
        console.log(error);
        alert("Something Went Wrong");
      });
  };

  const getPetEmoji = (type) => {
    switch (type) {
      case "Dog":
        return "🐶";
      case "Cat":
        return "🐱";
      case "Bird":
        return "🦜";
      case "Rabbit":
        return "🐰";
      case "Fish":
        return "🐠";
      case "Hamster":
        return "🐹";
      case "Turtle":
        return "🐢";
      default:
        return "🐾";
    }
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
          <h2 className="text-center fw-bold mb-5" style={{ color: "#4B3F35" }}>
            🐾 Registered Pets
          </h2>

          <div className="row">
            {pets.map((pet, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div
                  className="card h-100 shadow border-0"
                  style={{
                    background: "rgba(255,255,255,.25)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "18px",
                  }}
                >
                  <div className="card-body">
                    <h2 className="text-center mb-3">
                      {getPetEmoji(pet.petType)}
                    </h2>

                    <h4
                      className="text-center fw-bold mb-4"
                      style={{ color: "#4B3F35" }}
                    >
                      {pet.petName}
                    </h4>

                    <p>
                      <b>Booking ID :</b> {pet.bookingId}
                    </p>
                    <p>
                      <b>Pet Type :</b> {pet.petType}
                    </p>
                    <p>
                      <b>Breed :</b> {pet.breed}
                    </p>
                    <p>
                      <b>Age :</b> {pet.age} Years
                    </p>
                    <p>
                      <b>Weight :</b> {pet.weight} kg
                    </p>
                    <p>
                      <b>Vaccination :</b> {pet.vaccinationStatus}
                    </p>
                    <p>
                      <b>Owner :</b> {pet.ownerName}
                    </p>
                    <p>
                      <b>Phone :</b> {pet.ownerPhone}
                    </p>
                    <p>
                      <b>Email :</b> {pet.ownerEmail}
                    </p>
                    <p>
                      <b>Check-In :</b> {pet.checkInDate}
                    </p>
                    <p>
                      <b>Check-Out :</b> {pet.checkOutDate}
                    </p>
                    <p>
                      <b>Kennel :</b> {pet.kennelNumber}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewPet;
