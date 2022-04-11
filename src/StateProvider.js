import React, { createContext, useContext, useReducer } from 'react'

//Prepare the Data Layer
export const StateConxtext = createContext()

//Wrap the app and provide the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateConxtext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateConxtext.Provider>
)

//Pull information from the Data Layer
export const useStateValue = () => useContext(StateConxtext)