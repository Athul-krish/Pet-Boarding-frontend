import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AddPet from "./components/AddPet";
import ViewPet from "./components/ViewPet";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/addpet" element={<AddPet />} />

        <Route path="/view" element={<ViewPet />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
