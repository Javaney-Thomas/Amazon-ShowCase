import React, { createContext, useContext, useReducer } from "react";


//Prepares the datalayer
export const StateContext = createContext();


// Wraps our app and provide the Data layer to every component in oour app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
    </StateContext.Provider>
);


//Pull information from the data layer 
export const useStateValue = () => useContext(StateContext);