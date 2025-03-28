import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import DestinationPage from "./Components/DestinationPage";
import SafariPackages from "./Components/PackagePage";
import Contact from "./Components/ContactPage";
import AboutUs from "./Components/AboutUs";
import PaymentPage from "./Components/PaymentPage";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<DestinationPage />} />
          <Route path="/safari-packages" element={<SafariPackages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />

          {/* Testing payment page */}
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
