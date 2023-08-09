import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    //BEM CONVENTION
    //Had to remove the global header and add them to each component that needed a header
    //Did this beacuase the login page has no header just the form
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
