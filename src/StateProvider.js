import React,{createContext,useContext,useReducer} from "react";


//prepare dataLayer
export const StateContext = createContext();


//wrap the app
export const StateProvider = ({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);


//pull info from datalayout
export const useStateValue = () => useContext(StateContext);