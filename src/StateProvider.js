import React, { createContext, useContext, useReducer } from "react";

// Prepares the data layer
export const StateContext = createContext();

// Wrap our App and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
/* Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
   Accepts a value prop to be passed to consuming components that are descendants of this Provider. 
   One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.*/
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the Data layer
export const useStateValue = () => useContext(StateContext);

