import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
// import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/destinations" element={<Destinations />} />
          <Route path="/safari-packages" element={<SafariPackages />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
