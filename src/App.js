import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Checkout from "./Checkout";

function App() {
  return (
    //BEM CONVENTION
    <Router>
      <div className="App">
        <Header /> 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/Checkout" element={<Checkout />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
