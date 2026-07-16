import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import AddPet from "./components/AddPet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addpet" element={<AddPet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;