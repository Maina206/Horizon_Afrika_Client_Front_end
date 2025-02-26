import React from "react";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <div> 
      <Home />
      <Footer />
      <FontAwesomeIcon icon={faCoffee} />

    </div>
  );
};

export default App;
