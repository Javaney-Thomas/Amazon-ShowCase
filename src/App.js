import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() =>{
    //will only run once when the app component loads

    auth.onAuthStateChanged(authUser => {
      console.log("The USER IS >>>", authUser);
      
      if (authUser) {
        //the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })//if the page refreshes, or you loeave and come back it sets the user to who was logged in
      } else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })//if the user is logged out its gonna set the user to nobody so noone is loged in
      }
    })
  }, [])

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
